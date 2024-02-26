import type { Metadata } from "next";
import Technology from "@/app/technology/page";

export const metadata: Metadata = {
  title: "Technology",
};

export default function TechnologyLayout() {
  return <Technology />;
}
