import PuzzleProloguePage from "../../pages/Puzzle/Prologue";
import type { Route } from "../+types/main";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "BIRTHDAY!" },
    { name: "description", content: "Your happy day!" },
  ];
}

export default function PuzzlePrologue() {
  return <PuzzleProloguePage />;
}
