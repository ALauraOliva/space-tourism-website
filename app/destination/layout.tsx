import type { Metadata } from "next";
import Destination from "@/app/destination/page";

export const metadata: Metadata = {
  title: "Destination",
};

export default function DestinationLayout() {
  return <Destination />;
}
