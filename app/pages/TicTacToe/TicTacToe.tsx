import React, { useEffect, useState } from "react";
import { BiCircle } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { useLocation, useNavigate } from "react-router";
import { twMerge } from "tailwind-merge";
import PrimaryButton from "~/components/Button";
import Text from "~/components/Text";

type Player = "X" | "O" | null;

const initialBoard: Player[] = Array(9).fill(null);

type ResetProps = {
  resetGame: () => void;
};

function LoseDescription(props: ResetProps) {
  return (
    <div className="flex flex-col gap-y-14 justify-center items-center">
      <div className="flex flex-col items-center gap-3">
        <Text size="h4" weight="bold" className="text-center">
          You not lose
        </Text>
        <Text size="caption" className="w-[250px] text-center">
          Its fine, you can try again!
        </Text>
      </div>
      <div className="flex gap-x-6 max-[280px]:flex max-[280px]:flex-col gap-y-5">
        <PrimaryButton
          onClick={props.resetGame}
          className="bg-blue-500 text-white"
        >
          Try Again
        </PrimaryButton>
      </div>
    </div>
  );
}

function WinnerDescription(props: ResetProps) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-y-14 justify-center items-center">
      <div className="flex flex-col items-center gap-3">
        <Text size="h4" weight="bold" className="text-center">
          It's your Winner Day!
        </Text>
        <Text size="caption" className="w-[250px] text-center">
          Congratulations! You can try again or continue to the next game!
        </Text>
      </div>
      <div className="flex gap-x-6 max-[325px]:flex max-[325px]:flex-col gap-y-5">
        <PrimaryButton
          onClick={props.resetGame}
          className="bg-blue-500 text-white"
        >
          Try Again
        </PrimaryButton>
        <PrimaryButton
          className="bg-green-500 text-white"
          onClick={() => navigate("/game/prologue-puzzle")}
        >
          Continue
        </PrimaryButton>
      </div>
    </div>
  );
}

function DrawDescription(props: ResetProps) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-y-14 justify-center items-center">
      <div className="flex flex-col items-center gap-3">
        <Text size="h4" weight="bold" className="text-center">
          Whoa, It's Draw!
        </Text>
        <Text size="caption" className="w-[250px] text-center">
          Congratulations! You can try again or continue to the next game!
        </Text>
      </div>
      <div className="flex gap-x-6 max-[325px]:flex max-[325px]:flex-col gap-y-5">
        <PrimaryButton
          onClick={props.resetGame}
          className="bg-blue-500 text-white"
        >
          Try Again
        </PrimaryButton>
        <PrimaryButton
          className="bg-green-500 text-white"
          onClick={() => navigate("/game/prologue-puzzle")}
        >
          Continue
        </PrimaryButton>
      </div>
    </div>
  );
}

function TicTacToe() {
  const location = useLocation();
  const { playerSymbol } = location.state || {};

  const [board, setBoard] = useState(initialBoard);
  const [isPlay, setIsPlay] = useState(playerSymbol === "X" ? true : false);
  const [winner, setWinner] = useState<Player | "Draw">(null);

  const botSymbol = playerSymbol === "X" ? "O" : "X";

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function handleClickBoard(index: number) {
    if (!isPlay || board[index] || winner) return;

    let newBoard = [...board];
    newBoard[index] = playerSymbol;

    setBoard(newBoard);
    setIsPlay(false);
  }

  function checkWinnerHandler(board: Player[]) {
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    if (board.every((cell) => cell !== null)) return "Draw";
    return null;
  }

  const resetGame = () => {
    setBoard(initialBoard);
    setIsPlay(playerSymbol === "X" ? true : false);
    setWinner(null);
  };

  useEffect(() => {
    const result = checkWinnerHandler(board);
    if (result) {
      setWinner(result);
      return;
    }

    if (!isPlay && playerSymbol) {
      const thingkingInterval = setInterval(() => {
        const availableCell = board
          .map((cell, idx) => (cell === null ? idx : null))
          .filter((idx) => idx !== null) as number[];
        const botMove =
          availableCell[Math.floor(Math.random() * availableCell.length)];

        if (board !== undefined) {
          let newBoard = [...board];
          newBoard[botMove] = botSymbol;
          setBoard(newBoard);
        }

        setIsPlay(true);
      }, 700);

      return () => clearInterval(thingkingInterval);
    }
  }, [isPlay, board, playerSymbol]);

  function renderWinner() {
    switch (winner) {
      case "X":
        if (playerSymbol === "O") {
          return <LoseDescription resetGame={resetGame} />;
        } else {
          return <WinnerDescription resetGame={resetGame} />;
        }

      case "O":
        if (playerSymbol === "X") {
          return <LoseDescription resetGame={resetGame} />;
        } else {
          return <WinnerDescription resetGame={resetGame} />;
        }

      case "Draw":
        return <DrawDescription resetGame={resetGame} />;

      default:
        <DrawDescription resetGame={resetGame} />;
        break;
    }
  }

  return (
    <div className="flex flex-col justify-center items-center gap-y-6 py-11">
      <Text weight="bold" size="h2">
        Tic Tac Toe
      </Text>
      <div className="grid grid-cols-3 gap-2">
        {board.map((cell, index) => {
          return (
            <PrimaryButton
              key={`cell-${index}`}
              disabled={winner === "Draw" || winner === "O" || winner === "X"}
              onClick={() => handleClickBoard(index)}
              className={twMerge(
                "max-[320px]:w-[55px] max-[320px]:h-[55px] w-20 h-20 flex justify-center items-center",
                cell === "X" && "shadow-none bg-blue-500",
                cell === "O" && "shadow-none bg-red-500"
              )}
            >
              {cell === "X" && (
                <CgClose
                  className={twMerge("w-8 h-8", cell === "X" && "text-white")}
                />
              )}
              {cell === "O" && (
                <BiCircle
                  className={twMerge("w-8 h-8", cell === "O" && "text-white")}
                />
              )}
            </PrimaryButton>
          );
        })}
      </div>
      <div>{renderWinner()}</div>
    </div>
  );
}

export default TicTacToe;
