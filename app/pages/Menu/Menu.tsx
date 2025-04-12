import React from 'react'
import Text from '~/components/Text'
import { menuData } from './data/dataMenu'
import { useNavigate } from 'react-router'

function Menu() {
    const navigate = useNavigate()

    return (
        <div className='p-6 flex flex-col gap-y-6'>
            <div>
                <Text weight='bold' size='h2'>Main Menu</Text>
                <Text size='caption'>Which game u want to play again?</Text>
            </div>
            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-2 gap-3.5'>
                    {menuData.map((d) => {
                        return <div key={d.id} className='text-center flex flex-col gap-y-2' onClick={() => navigate(d.route)}>
                            <div className='bg-white cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,0.6)] active:shadow-none active:translate-y-1 p-4 overflow-hidden w-[180px] h-[180px] max-[410px]:w-[140px] max-[410px]:h-[140px] max-[335px]:w-[100px] max-[335px]:h-[100px] rounded-lg duration-100 border border-gray-400 flex items-center justify-center'>
                                <img src={d.image} alt={d.title} className='object-cover' />
                            </div>
                            <Text weight='semibold' size='caption'>{d.title}</Text>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Menu