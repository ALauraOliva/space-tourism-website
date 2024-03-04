import type { Metadata } from "next";
import Destination from "../ui/destination/destination";

export const metadata: Metadata = {
  title: "Destination",
};

export default function Page() {
  return <Destination />;
}
