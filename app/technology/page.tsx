import type { Metadata } from "next";
import Technology from "../ui/technology/technology";

export const metadata: Metadata = {
  title: "Technology",
};

export default function Page() {
  return <Technology />;
}
