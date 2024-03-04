import type { Metadata } from "next";
import Crew from "../ui/crew/crew";

export const metadata: Metadata = {
  title: "Crew",
};

export default function Page() {
  return <Crew />;
}
