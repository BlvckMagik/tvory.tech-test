import useSWR from "swr";

import AddIcon from "@mui/icons-material/Add";
import { fetcher } from "@/shared/gateway";
import { Event, SnackbarProps } from "@/shared/types";
import EventCard from "@/entities/EventCard";

import * as Styled from "./index.styled";

const EventsList: React.FC<{
  setSnackbar: (snackbarProps: SnackbarProps) => void;
}> = ({ setSnackbar }) => {
  const {
    data: eventsList,
    error,
    isLoading,
    mutate,
  } = useSWR("/tvorytech", fetcher);

  if (error) {
    return (
      <Styled.NoEventsTitle>
        An unforeseen error occurred. Please reload the page
        {error.message && (
          <>
            <br />
            {error.message}
          </>
        )}
      </Styled.NoEventsTitle>
    );
  }

  if (isLoading) {
    return <Styled.CircularProgress size={80} />;
  }

  return eventsList?.length ? (
    <>
      <Styled.Stack>
        {eventsList
          ?.sort((a: Event, b: Event) => a.startDate - b.startDate)
          ?.map((event: Event) => (
            <EventCard
              key={event.id}
              id={event.id}
              createdAt={event.createdAt}
              description={event.description}
              startDate={event.startDate}
              endDate={event.endDate}
              type={event.type}
              participants={[
                { email: "defaultUser@gmail.com" },
                ...event.participants,
              ]}
              status={event.status}
              title={event.title}
              setSnackbar={setSnackbar}
              mutate={mutate}
            />
          ))}
      </Styled.Stack>
      <Styled.AddEvent href="/create">
        <AddIcon />
      </Styled.AddEvent>
    </>
  ) : (
    <Styled.NoEventsTitle>
      Create the first event by clicking on the + in the corner
    </Styled.NoEventsTitle>
  );
};

export default EventsList;
