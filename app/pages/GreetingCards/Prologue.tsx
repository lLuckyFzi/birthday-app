import React from 'react'
import { useNavigate } from 'react-router'
import PrimaryButton from '~/components/Button'
import Text from '~/components/Text'

function Prologue() {
    const navigate = useNavigate()

    return (
        <div className='flex h-screen justify-center'>
            <div className='text-center flex flex-col gap-40 justify-center items-center px-6'>
                <Text size='h2' weight='bold'>Greeting Cards</Text>
                <Text size='caption'>This is your birthday, so there’s some greeting cards from me. Ready?</Text>
                <PrimaryButton className='bg-blue-500 text-white' onClick={() => navigate("/game/greeting-cards", { replace: true })}>Ready!</PrimaryButton>
            </div>
        </div>
    )
}

export default Prologue