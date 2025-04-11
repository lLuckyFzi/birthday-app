import React, { useState } from "react";
import { useNavigate } from "react-router";
import PrimaryButton from "~/components/Button";
import Text from "~/components/Text";

function Prologue() {
  const navigate = useNavigate();

  const [playerSymbol, setPlayerSymbol] = useState<"X" | "O" | null>(null);

  return (
    <div className="flex h-screen justify-center">
      <div className="text-center flex flex-col gap-40 justify-center items-center px-6">
        <Text size="h2" weight="bold">
          Let's Take a Break
        </Text>
        <Text size="caption">
          Its not a game but its important, Drag and drop the number to the
          required field, Ready?
        </Text>
        <PrimaryButton
          className="bg-blue-500 text-white"
          onClick={() =>
            navigate("/game/puzzle", {
              replace: true,
            })
          }
        >
          Ready!
        </PrimaryButton>
      </div>
    </div>
  );
}

export default Prologue;
