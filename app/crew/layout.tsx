import type { Metadata } from "next";
import Crew from "@/app/crew/page";

export const metadata: Metadata = {
  title: "Crew",
};

export default function DestinationLayout() {
  return <Crew />;
}
