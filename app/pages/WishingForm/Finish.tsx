import React from 'react'
import PrimaryButton from '~/components/Button'
import Text from '~/components/Text'

function Finish() {
    const images = {
        planets: "/images/illustrations/planets.png",
        cake: "/images/illustrations/blue-cake.png"
    }
    return (
        <div className='h-screen'>
            <div className='relative flex items-center justify-center'>
                <img src={images.planets} alt="planets" className='absolute w-[350px] top-0 right-0' />
            </div>
            <div className='flex flex-col gap-y-6 justify-center h-full p-6'>
                <div className='flex flex-col gap-y-3'>
                    <Text weight='bold' size='h3'>Whatever your wish is, may it come true!</Text>
                    <Text size='caption'>Thank you for following all along, I wish you all the best!</Text>
                </div>
                <PrimaryButton className='bg-blue-500 text-white'>Menu</PrimaryButton>
            </div>
            <div className='relative flex items-center justify-center'>
                <img src={images.cake} alt="planets" className='absolute bottom-0 w-[350px]' />
            </div>
        </div>
    )
}

export default Finish