import { NextPage } from "next";
import EventsList from "@/widgets/EventsList";
import Layout from "@/app/Layout";
import { SnackbarProps } from "@/shared/types";

const Home: NextPage<{
  setSnackbar: (snackbarProps: SnackbarProps) => void;
}> = ({ setSnackbar }) => {
  return (
    <Layout>
      {/* @ts-ignore */}
      <EventsList setSnackbar={setSnackbar} />
    </Layout>
  );
};

export default Home;
