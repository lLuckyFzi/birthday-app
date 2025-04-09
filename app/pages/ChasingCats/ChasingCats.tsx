import React, { useEffect, useState } from "react";
import Header from "./Partials/Header";
import { AnimatePresence, motion } from "framer-motion";
import ModalSummary from "./Partials/ModalSummary";
import Counter from "./Partials/Counter";
import Text from "~/components/Text";

const MAX_CAT = 12;
const TIMEOUT = 20;

interface CatOptionModel {
  id: number;
  visible: boolean;
  characterIndex: number;
}
interface GameSettingsModel {
  userPoint: number;
  isOver: boolean;
  isWin: boolean | null;
}

function ChasingCats() {
  const [timer, setTimer] = useState(TIMEOUT);
  const [gameSettings, setGameSettings] = useState<GameSettingsModel>({
    userPoint: 0,
    isOver: false,
    isWin: null,
  });
  const [catOption, setCatOption] = useState<CatOptionModel[]>(
    Array.from({ length: 4 }, (_, i) => ({
      id: i,
      visible: false,
      characterIndex: 0,
    }))
  );

  function handleCatch(index: number) {
    if (gameSettings.isOver) return;

    setCatOption((prev) =>
      prev.map((d) => (d.id === index ? { ...d, visible: false } : d))
    );

    setGameSettings((prev) => {
      const newPoint = prev.userPoint + 1;
      const isWin = newPoint === MAX_CAT;

      return {
        ...prev,
        userPoint: newPoint,
        isOver: isWin,
        isWin: isWin ? true : prev.isWin,
      };
    });
  }

  function handleRestart() {
    setGameSettings(() => ({
      userPoint: 0,
      isOver: false,
      isWin: null,
    }));
    setTimer(TIMEOUT);
  }

  useEffect(() => {
    if (gameSettings.isOver) return;

    const interval = setInterval(() => {
      setCatOption((prev) =>
        prev.map((d) => {
          const willAppear = Math.random() < 0.4;
          return {
            ...d,
            visible: willAppear,
            characterIndex: willAppear
              ? Math.floor(Math.random() * 5)
              : d.characterIndex,
          };
        })
      );
    }, 1200);

    return () => clearInterval(interval);
  }, [gameSettings.isWin]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setGameSettings((prevGame) => ({
            ...prevGame,
            isOver: true,
            isWin: prevGame.userPoint >= MAX_CAT,
          }));
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [gameSettings.isOver]);

  return (
    <div className="flex flex-col justify-between items-center p-6 gap-y-10 h-screen">
      <ModalSummary
        userPoint={gameSettings.userPoint}
        MAXCAT={MAX_CAT}
        isOver={gameSettings.isOver}
        isWin={gameSettings.isWin}
        handleRestart={handleRestart}
      />
      <Header count={gameSettings.userPoint} max={MAX_CAT} />
      <div className="grid grid-cols-2 gap-4">
        {catOption.map((d) => {
          return (
            <div key={d.id} className="relative w-24 h-24">
              <img
                src="/images/illustrations/pipe.png"
                alt="pipe"
                className="w-full"
              />
              <AnimatePresence>
                {d.visible && (
                  <motion.img
                    alt="cat"
                    key={d.characterIndex}
                    onClick={() => handleCatch(d.id)}
                    exit={{ y: 5, opacity: 0, scale: 0.6 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    initial={{ y: 5, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    src={`/images/cats/cat-${d.characterIndex + 1}.png`}
                    className="absolute bottom-[35px] left-[50%] -translate-x-1/2 w-[60px]"
                  />
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
      <Text weight="bold" className="text-center">
        Grab all the cats that appear in the pipe!
      </Text>
      <Counter timer={timer} />
    </div>
  );
}

export default ChasingCats;
