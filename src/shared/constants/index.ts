//@ts-nocheck
import theme from "@/app/theme";
import { Event } from "../types";

export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const UA_PHONE_REGEX = /^\+?3?8?(0\d{2})\d{7}$/;

export const minutesFormat = "YYYY-MM-DD HH:mm";
export const fullDate = "LLLL";
export const dayFormat = "YYYY-MM-DD";

export const eventDefaultValues: Omit<Event, "id"> = {
  createdAt: null,
  title: "",
  description: "",
  participants: [{ email: "", phone: "" }],
  startDate: null,
  type: null,
  status: null,
};

export const statusLabelColorsConfig = {
  CANCELLED: theme.palette.error.light,
  FINISHED: theme.palette.success.light,
  IN_PROGRESS: theme.palette.info.light,
  PLANNED: theme.palette.warning.light,
};

export const eventTypeLabelColorsConfig = {
  OFFLINE: theme.palette.error.light,
  ONLINE: theme.palette.success.light,
};
