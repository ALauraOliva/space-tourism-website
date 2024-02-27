import type { Metadata } from "next";
import Destination from "./destination";

export const metadata: Metadata = {
  title: "Destination",
};

export default function Page() {
  return <Destination />;
}
