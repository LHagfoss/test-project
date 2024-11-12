import Link from "next/link"
import ChangeTheme from "./changeTheme"
import { motion } from "framer-motion"

const AnimatedText = ({ text, delay }: { text: string; delay: number }) => {
    return (
        <span>
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: delay + index * 0.01 }} 
                >
                    {char}
                </motion.span>
            ))}
        </span>
    );
}

export default function Navbar() {

    return (
        <div className="navbar fixed top-0 w-full h-[80px] flex justify-center items-center">
            <div className="container md:mx-20 flex justify-between items-center text-[--text]">
                <Link 
                    href="/" 
                    className="px-4 py-2 rounded-md hover:underline overflow-hidden"
                >
                    <AnimatedText text="Hjem" delay={0} />
                </Link>
                <div className="flex items-center gap-5">
                    <Link 
                        href="/" 
                        className="px-4 py-2 rounded-md hover:underline overflow-hidden"
                    >
                        <AnimatedText text="Hva gjorde jeg?" delay={0.5} />
                    </Link>
                    <Link 
                        href="/"
                        className="px-4 py-2 rounded-md hover:underline overflow-hidden"
                    >
                        <AnimatedText text="Contact" delay={1.8} />
                    </Link>
                    <Link 
                        href="/"
                        className="px-4 py-2 rounded-md hover:underline overflow-hidden"
                    >
                        <AnimatedText text="About" delay={2.5} />
                    </Link>
                    <ChangeTheme />
                </div>
            </div>
        </div>
    )
}