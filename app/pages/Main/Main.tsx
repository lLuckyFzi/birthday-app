import { useRef, useState } from 'react'
import Text from '~/components/Text'
import BackgroundMain from '/images/illustrations/bg-main.png'
import PrimaryButton from '~/components/Button'
import { useNavigate } from 'react-router';

function Main() {
    const navigate = useNavigate()

    const containerRef = useRef<HTMLDivElement>(null);
    const [playedButton, setPlayedButton] = useState<{ position: { top: string; left: string }; isMoved: boolean; count: number }>(
        { count: 1, isMoved: false, position: { left: "0px", top: "0px" } }
    )

    const handlePlayedButton = () => {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();

        const buttonWidth = 180;
        const buttonHeight = 40;

        const maxLeft = rect.width - buttonWidth;
        const maxTop = rect.height - buttonHeight;

        const randomLeft = Math.floor(Math.random() * maxLeft);
        const randomTop = Math.floor(Math.random() * maxTop);

        setPlayedButton((prev) => ({
            ...prev,
            position: { top: `${randomTop}px`, left: `${randomLeft}px` },
            isMoved: true,
            count: prev.count + 1
        }))
    }

    return (
        <div className='flex flex-col gap-4'>
            <div className='p-8 flex flex-col gap-3'>
                <Text weight='bold' size='h3'>HAPPY BIRTHDAY!</Text>
                <Text weight='medium' size='caption' className='w-[200px]'>Hai, Let’s play some mini game!</Text>
            </div>
            <div className='relative'>
                <img src={BackgroundMain} alt='main' />
                <div className='absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <img src={`/images/faces/face-${playedButton.count <= 6 ? playedButton.count : 6}.png`} alt='face' className='max-[490px]:w-[90px]' />
                </div>
            </div>
            <div ref={containerRef} className='flex flex-col gap-6 justify-center items-center relative h-[250px]'>
                <PrimaryButton className='bg-[#FFDD32] font-medium' onClick={() => navigate("/game/prologue-chasing-cats", { replace: true })}>Sure!</PrimaryButton>
                <PrimaryButton
                    className='text-gray font-medium absolute bg-white w-[180px]'
                    onClick={handlePlayedButton}
                    style={playedButton?.isMoved ? {
                        top: playedButton?.position.top,
                        left: playedButton?.position.left
                    } : { bottom: 50 }}>Ga</PrimaryButton>
            </div>
        </div>
    )
}

export default Main