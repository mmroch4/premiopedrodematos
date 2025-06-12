import { PlayPage as PlayComponent } from "@/components/pages/play";
import { Metadata } from "next";
import { metadata as m } from "../metadata";

export const metadata: Metadata = {
  ...m,
  title: "Jogar • Shh...",
  description: "Jogar de enigmas?? Essa é para ti!",
};

export default function PlayPage() {
  return (
    <>
      <PlayComponent />
    </>
  );
}
