import React from 'react'
import { useNavigate } from 'react-router'
import PrimaryButton from '~/components/Button'
import Text from '~/components/Text'

function Prologue() {
    const navigate = useNavigate()

    return (
        <div className='flex h-screen justify-center'>
            <div className='text-center flex flex-col gap-40 justify-center items-center px-6'>
                <Text size='h2' weight='bold'>The Game Called ‘Grab The Cat!’</Text>
                <Text size='caption'>This is EZ Pezy, Tap and collect the cat in the pipe when it appears. Timed in just 20 seconds, Ready?</Text>
                <PrimaryButton className='bg-[#FFDD32]' onClick={() => navigate("/game/chasing-cats", { replace: true })}>Ready!</PrimaryButton>
            </div>
        </div>
    )
}

export default Prologue