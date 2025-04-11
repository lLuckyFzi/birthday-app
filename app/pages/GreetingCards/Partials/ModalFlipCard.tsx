import { AnimatePresence, motion } from 'framer-motion'
import { CgClose } from 'react-icons/cg'
import Text from '~/components/Text'
import type { CardModel } from '~/model/CardModel'

interface ModalFlipCardProps {
    title: string
    data: CardModel[]
    selectedCard: string | null
    onSelectedCard: (v: string | null) => void
}


function getReadableRandomBgColor(): string {
    let r = 0, g = 0, b = 0;
    let luminance = 0;

    do {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);

        // Hitung luminance
        luminance = 0.299 * r + 0.587 * g + 0.114 * b;

        // Ulang jika warna terlalu gelap
    } while (luminance < 180);

    return `rgb(${r}, ${g}, ${b})`;
}


function ModalFlipCard(props: ModalFlipCardProps) {
    const { onSelectedCard, selectedCard, title, data } = props

    const message = data?.find((d) => d.id === selectedCard)?.message
    const from = data?.find((d) => d.id === selectedCard)?.from

    const bgColor = getReadableRandomBgColor();

    return (
        <AnimatePresence>
            {selectedCard && (
                <motion.div
                    key="backdrop"
                    className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-2"
                    onClick={() => onSelectedCard(null)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        key="modal-content"
                        layoutId={`card-${selectedCard}`}
                        className="rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.6)] w-[300px] h-[400px]"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        style={{ backgroundColor: bgColor }}
                    >
                        <div className='py-6 px-8 flex flex-col justify-between h-full'>
                            <div className='flex justify-between items-center'>
                                <Text weight='semibold'>
                                    {title}
                                </Text>
                                <motion.button
                                    className="hover:text-gray-800"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => onSelectedCard(null)}
                                >
                                    <CgClose className='w-6 h-6' />
                                </motion.button>
                            </div>

                            <Text size='body' weight='medium'>{message}</Text>
                            <div className='flex justify-end'>
                                <Text size='caption' className='text-end'>{from}</Text>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ModalFlipCard