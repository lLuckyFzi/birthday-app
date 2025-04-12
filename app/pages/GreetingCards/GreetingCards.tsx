import React, { useState } from 'react'
import Text from '~/components/Text'
import FlipCard from './Partials/FlipCard'
import { MotionConfig } from 'framer-motion'
import ModalFlipCard from './Partials/ModalFlipCard'
import cardData from './data/cardData'
import PrimaryButton from '~/components/Button'
import { useNavigate } from 'react-router'


function GreetingCards() {
    const navigate = useNavigate()

    const [selectedId, setSelectedId] = useState<string | null>(null)

    function onSelectCard(id: string | null) {
        setSelectedId(id)
    }

    return (
        <MotionConfig transition={{ duration: 0.4, ease: "easeInOut" }}>
            <div className='p-2 flex flex-col gap-y-14 pb-16'>
                <div className='flex flex-col gap-y-3.5 text-center'>
                    <Text weight='bold' size='h3'>Greeting Cards</Text>
                    <Text size='caption'>I pray for you without limit</Text>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='grid grid-cols-2 gap-8'>
                        {cardData.map((d) => (<FlipCard key={d.id} id={d.id} onSelectCard={(v) => onSelectCard(v)} />))}
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center text-center gap-y-6'>
                    <Text size='caption'>Remember, I pray for you without limit</Text>
                    <PrimaryButton className='bg-green-500 text-white' onClick={() => navigate("/game/prologue-wishing-form")}>Continue</PrimaryButton>
                </div>
            </div>
            <ModalFlipCard title={`Wish Card`} selectedCard={selectedId} onSelectedCard={(v) => setSelectedId(v)} data={cardData} />
        </MotionConfig>
    )
}

export default GreetingCards