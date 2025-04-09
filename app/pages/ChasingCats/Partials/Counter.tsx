import { motion } from "framer-motion";
import Text from "~/components/Text";

interface CounterProps {
  timer: number;
}

function Counter(props: CounterProps) {
  const { timer } = props;
  return (
    <motion.div className="text-2xl font-bold bg-yellow-500 rounded-full p-8 mb-7">
      <motion.div
        key={timer}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1.2 }}
        exit={{ scale: 0.5 }}
        transition={{ duration: 0.3 }}
      >
        <Text className="text-white" size="h2">
          {timer}s
        </Text>
      </motion.div>
    </motion.div>
  );
}

export default Counter;
