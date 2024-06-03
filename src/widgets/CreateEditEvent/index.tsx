import useSWR from "swr";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "@mui/material";

import { Event, Type, Status, SnackbarProps } from "@/shared/types";
import {
  EMAIL_REGEX,
  UA_PHONE_REGEX,
  eventDefaultValues as defaultValues,
} from "@/shared/constants";
import FormInput from "@/features/FormInput";
import DateTimePicker from "@/features/DateTimePicker";
import EnumSelect from "@/features/EnumSelect";
import { fetcher, instance } from "@/shared/gateway";

import * as Styled from "./index.styled";

const CreateEditEvent: React.FC<{
  setSnackbar: (snackbarProps: SnackbarProps) => void;
}> = ({ setSnackbar }) => {
  const { ...router } = useRouter();
  const params = useParams();

  const {
    data: event,
    error,
    isLoading,
    mutate,
  } = useSWR(params?.id ? `/tvorytech/${params.id}` : null, fetcher);

  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
    getValues,
    setValue,
  } = useForm<Event>({ defaultValues: defaultValues });

  const { fields, prepend, remove } = useFieldArray<Event>({
    name: "participants",
    control,
  });
  const initialItemsCount = 0;

  const create = async (data: Event) =>
    await instance.post<Event>("/tvorytech", {
      ...data,
      createdAt: new Date().getTime(),
    });

  const update = async (data: Event) =>
    await instance.put<Event>(`/tvorytech/${params?.id}`, {
      ...data,
    });

  const onSubmit = async (data: Event) => {
    try {
      const response = await (params?.id ? update(data) : create(data));

      setSnackbar({
        message: params?.id
          ? "Event successfully Updated"
          : "Event successfully created",
        severity: "success",
        open: true,
      });
      router.push(`/#${response.data.id || params?.id}`);
    } catch (error) {
      setSnackbar({
        message:
          //@ts-ignore
          error?.message || "Oops.. Something went wrong. Try again later",
        severity: "error",
        open: true,
      });
    }
  };

  useEffect(() => {
    if (event) {
      setValue("createdAt", event.createdAt);
      setValue("title", event.title);
      setValue("description", event.description);
      setValue("startDate", event.startDate);
      setValue("endDate", event.endDate);
      setValue("type", event.type);
      setValue("status", event.status);
      setValue(
        "participants",
        event.participants.length
          ? event.participants
          : [{ email: "", phone: "" }]
      );
    }
  }, [isLoading, event]);

  return (
    <Styled.Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Styled.Tooltip title="Add participant">
        <Styled.AddIcon onClick={() => prepend({ email: "", phone: "" })} />
      </Styled.Tooltip>
      <Styled.Tooltip title="Reset form" sx={{ top: "-20px", right: "34px" }}>
        <Styled.ResetIcon onClick={() => reset()} />
      </Styled.Tooltip>
      <FormInput
        id="title"
        name="title"
        label="Event title"
        placeholder="Type here"
        control={control}
        error={!!errors.title}
        required
      />
      <FormInput
        id="description"
        name="description"
        label="Event description"
        placeholder="Type here"
        control={control}
        error={!!errors.description}
        maxRows={3}
        multiline
        required
      />
      <DateTimePicker
        id="startDate"
        name="startDate"
        label="Start date"
        control={control}
        error={!!errors.startDate}
        required
      />
      <DateTimePicker
        id="endDate"
        name="endDate"
        label="End date"
        control={control}
        error={!!errors.endDate}
        required
      />
      <EnumSelect
        id="type"
        name="type"
        label="Event type"
        control={control}
        options={Type}
        error={!!errors.type}
        required
      />
      <EnumSelect
        id="status"
        name="status"
        label="Event status"
        control={control}
        options={Status}
        error={!!errors.status}
        required
      />
      {fields
        .map((field, index, { length }) => (
          <React.Fragment key={field.id}>
            <Styled.Typography variant="h4" sx={{ gridColumn: "span 2" }}>
              {`Participant #${length - index}`}:
              {length === 1 ||
              length - index <= (initialItemsCount || 0) ? null : (
                <Styled.DeleteTooltip title="Delete item">
                  <Styled.DeleteIcon onClick={() => remove(index)} />
                </Styled.DeleteTooltip>
              )}
            </Styled.Typography>
            <FormInput
              id={`email${index}`}
              name={`participants[${index}].email`}
              label="Email"
              placeholder="Type here"
              control={control}
              error={!!errors?.participants?.[index]?.email}
              pattern={EMAIL_REGEX}
              required
            />
            <FormInput
              id={`phone${index}`}
              name={`participants[${index}].phone`}
              label="Phone"
              placeholder="Type here"
              control={control}
              error={!!errors?.participants?.[index]?.phone}
              pattern={UA_PHONE_REGEX}
              required
            />
          </React.Fragment>
        ))
        .reverse()}
      <Button
        id="submitBtn"
        variant="contained"
        type="submit"
        sx={{ width: "30%", margin: "auto", color: "white" }}
      >
        {params?.id ? "Save" : "Create"}
      </Button>
    </Styled.Form>
  );
};

export default CreateEditEvent;
