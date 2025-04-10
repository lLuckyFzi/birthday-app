import React, { useState } from "react";
import { BiCircle, BiCloset } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { useNavigate } from "react-router";
import { twMerge } from "tailwind-merge";
import PrimaryButton from "~/components/Button";
import Text from "~/components/Text";

function Prologue() {
  const navigate = useNavigate();

  const [playerSymbol, setPlayerSymbol] = useState<"X" | "O" | null>(null);

  return (
    <div className="flex h-screen justify-center">
      <div className="text-center flex flex-col gap-40 justify-center items-center px-6">
        <Text size="h2" weight="bold">
          The Game Called ‘Tic Tac Toe’
        </Text>
        <Text size="caption">
          You know this game right? and you know the rules, you can Choose X or
          O?
        </Text>
        <div className="flex items-center justify-center gap-x-5">
          <PrimaryButton
            className={twMerge(
              "w-auto p-[21px]",
              playerSymbol === "X" && "bg-blue-500"
            )}
            onClick={() => setPlayerSymbol("X")}
          >
            <CgClose
              className={twMerge(
                "w-8 h-8",
                playerSymbol === "X" && "text-white"
              )}
            />
          </PrimaryButton>
          <PrimaryButton
            className={twMerge(
              "w-auto p-[21px]",
              playerSymbol === "O" && "bg-blue-500"
            )}
            onClick={() => setPlayerSymbol("O")}
          >
            <BiCircle
              className={twMerge(
                "w-8 h-8",
                playerSymbol === "O" && "text-white"
              )}
            />
          </PrimaryButton>
        </div>
        <PrimaryButton
          className="bg-blue-500 text-white"
          onClick={() =>
            navigate("/game/tic-tac-toe", {
              replace: true,
              state: {
                playerSymbol,
              },
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
