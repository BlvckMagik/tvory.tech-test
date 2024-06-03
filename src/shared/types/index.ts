import { Color } from "@mui/material";

export type InputProps = {
  name: string;
  label?: string;
  control: unknown;
  required?: boolean;
  error?: boolean;
};

export type SnackbarProps = {
  message: string;
  severity: "error" | "info" | "success" | "warning";
  open: boolean;
};

export type Option = {
  id: number | string;
  name: string;
};

export enum Type {
  OFFLINE = "Offline",
  ONLINE = "Online",
}

export enum Status {
  PLANNED = "Planned",
  IN_PROGRESS = "In progress",
  CANCELLED = "Cancelled",
  FINISHED = "Finished",
}

export type Participant = { email?: string; phone?: string };

export type Event = {
  id: number;
  createdAt: number;
  title: string;
  description: string;
  participants: Participant[];
  startDate: number;
  endDate: number;
  type: keyof typeof Type;
  status: keyof typeof Status;
};
