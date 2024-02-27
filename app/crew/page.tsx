import type { Metadata } from "next";
import Crew from "./crew";

export const metadata: Metadata = {
  title: "Crew",
};

export default function Page() {
  return <Crew />;
}
