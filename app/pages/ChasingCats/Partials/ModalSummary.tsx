import React, { useEffect, useState } from "react";
import { FaCat } from "react-icons/fa";
import { useNavigate } from "react-router";
import PrimaryButton from "~/components/Button";
import Modal from "~/components/Modal";
import Text from "~/components/Text";

interface ModalSummaryProps {
  userPoint: number;
  MAXCAT: number;
  isOver: boolean;
  isWin: boolean | null;
  handleRestart: () => void;
}

interface ModalWinProps {
  isOpen: boolean;
  userPoint: number;
  MAXCAT: number;
}

interface ModalTryAgainProps {
  isOpen: boolean;
  userPoint: number;
  MAXCAT: number;
  handleRestart: () => void;
}

function ModalWin(props: ModalWinProps) {
  const { isOpen, MAXCAT, userPoint } = props;

  const navigate = useNavigate();

  return (
    <Modal isOpen={isOpen}>
      <div className="bg-green-500 rounded-3xl max-[320px]:py-9 max-[320px]:px-8 py-9 px-16 shadow-[0px_4px_0px_0px_rgba(0,0,0,0.6)] border border-gray-600">
        <Text className="text-white" weight="medium">
          Congratulations!
        </Text>
      </div>
      <div className="flex flex-col gap-y-3.5 text-center my-9">
        <div className="flex flex-col gap-y-3.5">
          <Text weight="semibold" size="h2">
            Collected Cat
          </Text>
          <div className="flex justify-center items-center gap-x-4">
            <FaCat className="text-[#FFDD32] w-7 h-7" />
            <Text>
              {userPoint}/{MAXCAT}
            </Text>
          </div>
        </div>
        <Text className="pt-3.5" size="caption">
          Amazing! You collected all the cats!
        </Text>
      </div>

      <div className="flex gap-x-4 justify-center">
        <PrimaryButton
          className="mb-5 bg-green-500 text-white"
          onClick={() => navigate("/game/prologue-tic-tac-toe")}
        >
          Continue
        </PrimaryButton>
      </div>
    </Modal>
  );
}

function ModalTryAgain(props: ModalTryAgainProps) {
  const { isOpen, MAXCAT, userPoint, handleRestart } = props;

  const navigate = useNavigate();

  return (
    <Modal isOpen={isOpen}>
      <div className="bg-yellow-500 rounded-3xl max-[320px]:py-9 max-[320px]:px-8 py-9 px-16 shadow-[0px_4px_0px_0px_rgba(0,0,0,0.6)] border border-gray-600">
        <Text className="text-white" weight="medium">
          Please Try Again
        </Text>
      </div>
      <div className="flex flex-col gap-y-3.5 text-center my-9">
        <div className="flex flex-col gap-y-3.5">
          <Text weight="semibold" size="h2">
            Collected Cat
          </Text>
          <div className="flex justify-center items-center gap-x-4">
            <FaCat className="text-[#FFDD32] w-7 h-7" />
            <Text>
              {userPoint}/{MAXCAT}
            </Text>
          </div>
        </div>
        <Text className="pt-3.5" size="caption">
          It's fine you did well you can try again!
        </Text>
      </div>

      <div className="flex gap-x-4">
        <PrimaryButton
          className="mb-5"
          onClick={() => navigate("/game/prologue-tic-tac-toe")}
        >
          No
        </PrimaryButton>
        <PrimaryButton className="mb-5" onClick={handleRestart}>
          Try Again
        </PrimaryButton>
      </div>
    </Modal>
  );
}

function ModalSummary(props: ModalSummaryProps) {
  const { MAXCAT, userPoint, isOver, isWin = null, handleRestart } = props;

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (isOver) {
      setModalOpen(true);
    }
  }, [isOver]);

  return (
    <>
      {isWin ? (
        <ModalWin MAXCAT={MAXCAT} isOpen={modalOpen} userPoint={userPoint} />
      ) : (
        <ModalTryAgain
          isOpen={modalOpen}
          MAXCAT={MAXCAT}
          userPoint={userPoint}
          handleRestart={() => {
            handleRestart();
            setModalOpen(false);
          }}
        />
      )}
    </>
  );
}

export default ModalSummary;
