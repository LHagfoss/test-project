import { motion } from "framer-motion";

const AnimatedText = ({ text, delay }: { text: string; delay: number }) => {
    return (
        <span>
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: delay + index * 0.05, duration: 0.2 }}
                    className=""
                >
                    {char}
                </motion.span>
            ))}
        </span>
    );
}

export default AnimatedText;
