import { motion } from 'framer-motion';
import { RiFlowerFill } from 'react-icons/ri';

interface FlipCard {
    id: string
    onSelectCard: (v: string) => void
}

function FlipCard(props: FlipCard) {
    const { id, onSelectCard } = props

    return (
        <>
            <motion.div
                layout
                key={id}
                layoutId={`card-${id}`}
                onClick={() => onSelectCard(id)}
                className='bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.6)] active:shadow-none duration-100 border border-gray-400 w-[100px] h-[150px] flex items-center justify-center'
                whileHover={{ rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                drag
                dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                dragElastic={0.2}>
                <RiFlowerFill className='text-pink-500 w-9 h-9' />
            </motion.div>

        </>
    );
}

export default FlipCard