import React, { useEffect, useRef, useState } from "react";
import Text from "~/components/Text";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import PrimaryButton from "~/components/Button";

const randomColor = () => `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;

const text = "20";
const items = text.split("").map((c) => ({
  color: randomColor(),
  value: c,
}));

function Puzzle() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [placed, setPlaced] = useState<boolean[]>(
    Array(items.length).fill(false)
  );
  const [draggable, setDraggable] = useState<
    { id: string; value: string; x: number; y: number; color: string }[]
  >([]);

  const constraintsRef = useRef<HTMLDivElement | null>(null);
  const contentRefs = useRef<(HTMLSpanElement | null)[]>([]);

  function checkDrop(ref: HTMLSpanElement | null, x: number, y: number) {
    const rect = ref?.getBoundingClientRect();
    if (!rect) return false;

    return (
      x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
    );
  }

  function handleDropDrag(itemId: string, value: string, x: number, y: number) {
    for (let i = 0; i < items.length; i++) {
      if (!placed[i] && items[i].value === value) {
        const ref = contentRefs.current[i];
        if (checkDrop(ref, x, y)) {
          setPlaced((prev) => {
            const updatedPlaced = [...prev];
            updatedPlaced[i] = true;

            return updatedPlaced;
          });

          setDraggable((prev) => prev.filter((item) => item.id !== itemId));

          break;
        }
      }
    }
  }

  useEffect(() => {
    if (!constraintsRef.current) return;

    const { width, height } = constraintsRef.current.getBoundingClientRect();

    const paddingX = 40;
    const paddingY = 120;

    const generated = items
      .map((d, idx) => ({
        id: `${d.value}-${idx}`,
        value: d.value,
        x: Math.random() * (width - 2 * paddingX) + paddingX,
        y: Math.random() * (height - 2 * paddingY) + paddingY,
        color: randomColor(),
      }))
      .sort(() => Math.random() - 0.5);

    setDraggable(generated);
  }, []);

  useEffect(() => {
    if (placed.every((d) => d)) {
      setIsCompleted(true);
    }
  }, [placed]);

  return (
    <div className="flex flex-col justify-center items-center py-10 gap-y-12 h-screen">
      <div className="text-center">
        <Text weight="bold" size="h3">
          HAPPY BIRTHDAY!
        </Text>
        <Text weight="normal" size="caption" className="">
          Let's build your new age!
        </Text>
      </div>
      <motion.div
        ref={constraintsRef}
        className="flex flex-col justify-around h-full w-full m-5 overflow-hidden relative"
      >
        <motion.div className="flex justify-center items-center gap-x-1 flex-wrap p-5">
          {items.map((d, idx) => (
            <span
              key={`chara-${idx}`}
              ref={(el) => {
                contentRefs.current[idx] = el;
              }}
              className=" relative w-auto"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={twMerge("text-gray-400 text-[140px] font-bold")}
                style={placed[idx] ? { color: d.color } : {}}
              >
                {d.value}
              </motion.div>
            </span>
          ))}
        </motion.div>
        <motion.div className="flex p-2 justify-evenly flex-wrap h-full w-full items-center mb-10">
          {!isCompleted ? (
            <>
              {draggable.map((d, idx) => (
                <motion.div
                  key={d.id}
                  drag
                  initial={{
                    x: 0,
                    y: 0,
                    rotate: Math.random() * 20 - 10,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, delay: idx * 0.03 },
                  }}
                  whileDrag={{ scale: 1.2 }}
                  dragConstraints={constraintsRef}
                  className="font-bold text-[140px] inline"
                  onDragEnd={(e, info) => {
                    handleDropDrag(d.id, d.value, info.point.x, info.point.y);
                  }}
                  style={{
                    position: "absolute",
                    top: d.y,
                    left: d.x,
                    color: d.color,
                  }}
                >
                  {d.value}
                </motion.div>
              ))}
            </>
          ) : (
            <div className="items-center gap-y-12 flex flex-col text-center">
              <Text weight="bold" size="h4">
                This is your happy day! Congratulations!
              </Text>
              <PrimaryButton className="bg-green-500 text-white">
                Continue
              </PrimaryButton>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Puzzle;
