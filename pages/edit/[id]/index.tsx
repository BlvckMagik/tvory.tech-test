import Layout from "@/app/Layout";
import { SnackbarProps } from "@/shared/types";
import CreateEditEvent from "@/widgets/CreateEditEvent";
import { NextPage } from "next";

const Home: NextPage<{
  setSnackbar: (snackbarProps: SnackbarProps) => void;
}> = ({ setSnackbar }) => {
  return (
    <Layout>
      {/* @ts-ignore */}
      <CreateEditEvent setSnackbar={setSnackbar} />
    </Layout>
  );
};

export default Home;
