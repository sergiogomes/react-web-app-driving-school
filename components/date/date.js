import { parseISO, format } from "date-fns";

export default function DateComponent({ dateString }) {
  if (dateString && dateString.length === 10) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
  }
  return <></>;
}
