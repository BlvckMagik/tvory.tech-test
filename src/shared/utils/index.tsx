import moment from "moment";

export const formatDate = (date: number, format: string) => {
  return moment(date).format(format);
};
