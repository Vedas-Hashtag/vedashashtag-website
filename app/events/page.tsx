import EventPage from "@/components/EventPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Vedas Hashtag",
  description: "This is the events page of Vedas Hashtag.",
};

const Page = () => {
  return <EventPage />;
};

export default Page;
