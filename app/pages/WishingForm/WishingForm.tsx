import { addDoc, collection, Timestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import PrimaryButton from '~/components/Button'
import Text from '~/components/Text'
import { db } from '~/db/firebaseConfig'

function WishingForm() {
    const navigate = useNavigate()

    const [wishValue, setWishValue] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    async function handleSubmit() {
        if (!wishValue.trim()) return

        try {
            setIsLoading(true)
            await addDoc(collection(db, "wishes"), {
                message: wishValue,
                createdAt: Timestamp.now()
            })
            setWishValue("")
            navigate("/game/finish")
        } catch (error) {
            console.error("Error adding wish: ", error)
            alert("Failed to send your wish, please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='p-4 my-24 flex flex-col gap-y-10'>
            <div className='flex items-center justify-center flex-col gap-y-2'>
                <Text weight='bold' size='h3'>Last but not least</Text>
                <Text size='caption' className='text-center'>Please input your wish, and hopes for the future about what's your goal? what's your hopes for the future? what does you wanted to be?</Text>
            </div>
            <div className='mb-24 w-full'>
                <textarea
                    rows={10}
                    value={wishValue}
                    onChange={(e) => setWishValue(e.target.value)}
                    placeholder='Your wish, and hopes for the future'
                    className='w-full text-[12px] bg-gray-100 border border-gray-100 focus:outline-none focus:border-gray-100 py-[5px] px-2 rounded-lg' />
            </div>
            <div className='flex items-center justify-center w-full'>
                <PrimaryButton disabled={wishValue.length <= 8 || isLoading} onClick={handleSubmit} className='bg-blue-500 text-white disabled:bg-gray-300 disabled:text-gray-900 disabled:shadow-none disabled:active:translate-y-[0px] disabled:cursor-no-drop'>Done!</PrimaryButton>
            </div>
        </div>
    )
}

export default WishingForm