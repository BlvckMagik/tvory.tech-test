import { KeyedMutator } from "swr";
import { useRouter } from "next/router";
import { SpeedDialAction, SpeedDialIcon, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { Event, Type, Status, SnackbarProps } from "@/shared/types";
import { formatDate } from "@/shared/utils";
import {
  dayFormat,
  eventTypeLabelColorsConfig,
  fullDate,
  statusLabelColorsConfig,
} from "@/shared/constants";
import { instance } from "@/shared/gateway";

import * as Styled from "./index.styled";

const EventCard: React.FC<
  Event & {
    setSnackbar: (snackbarProps: SnackbarProps) => void;
    mutate: KeyedMutator<any>;
  }
> = ({
  id,
  createdAt,
  description,
  startDate,
  endDate,
  type,
  participants,
  status,
  title,
  setSnackbar,
  mutate,
}) => {
  const { ...router } = useRouter();

  const deleteEvent = async () => {
    try {
      const response = await instance.delete<Event>(`/tvorytech/${id}`);
      setSnackbar({
        message: "Event successfully deleted",
        severity: "success",
        open: true,
      });
      mutate();
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

  return (
    <Styled.Card id={String(id)} isSelected={window.location.hash === `#${id}`}>
      <Styled.SpeedDial
        ariaLabel="additional actions"
        icon={<SpeedDialIcon />}
        direction="down"
      >
        <SpeedDialAction
          id={`delete${id}`}
          icon={<DeleteIcon />}
          tooltipTitle={"Delete"}
          onClick={deleteEvent}
        />
        <SpeedDialAction
          icon={<EditIcon />}
          tooltipTitle={"Edit"}
          onClick={() => {
            router.push(`/edit/${id}`);
          }}
        />
      </Styled.SpeedDial>
      <Styled.Title>{title}</Styled.Title>
      <Tooltip placement="top" title="Click to select event">
        <Styled.CreatedDate href={`#${id}`}>
          <>{formatDate(createdAt, dayFormat)}</>
        </Styled.CreatedDate>
      </Tooltip>
      <Styled.Status bgColor={statusLabelColorsConfig[status]}>
        {Status[status]}
      </Styled.Status>
      <Styled.Item>
        <b>Event start date:</b> {formatDate(startDate, fullDate)}
      </Styled.Item>
      <Styled.Item>
        <b>Event end date:</b> {formatDate(endDate, fullDate)}
      </Styled.Item>
      <Styled.Item>
        <b>Event type:</b>{" "}
        <Styled.Chip bgColor={eventTypeLabelColorsConfig[type]}>
          {Type[type]}
        </Styled.Chip>
      </Styled.Item>
      <Styled.Item>
        <b>Participants:</b>{" "}
        {participants.map((participant, i) => (
          <Styled.UserInfo
            key={((participant?.email || participant?.phone) as string) + i}
          >
            <Styled.Avatar alt="default user" />
            <Styled.Contacts>
              {participant.email && (
                <Styled.Item sx={{ margin: "0 !important" }}>
                  {participant.email}
                </Styled.Item>
              )}
              {participant.phone && (
                <Styled.Item sx={{ margin: "0 !important" }}>
                  {participant.phone}
                </Styled.Item>
              )}
            </Styled.Contacts>
          </Styled.UserInfo>
        ))}
      </Styled.Item>
      <Styled.Item sx={{ marginTop: "2vw" }}>
        <b>Description:</b> {description}
      </Styled.Item>
    </Styled.Card>
  );
};

export default EventCard;
