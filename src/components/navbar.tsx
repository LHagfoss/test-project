import Link from "next/link"
import ChangeTheme from "./changeTheme"
import { motion } from "framer-motion"
import { useState } from "react"

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
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    return (
        <div className="navbar fixed top-0 w-full h-[80px] flex justify-center items-center">
            <div className="container md:mx-20 flex justify-between items-center text-[--text]">
                <button onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} className="absolute top-5 right-10 md:hidden h-[80px] w-[80px] hover:underline z-10 rounded-full bg-[--primary]">
                    {isMobileNavOpen ? "Lukk" : "Meny"}
                </button>

                {isMobileNavOpen && (
                    <motion.div 
                        className="fixed top-0 left-0 w-full h-full bg-[--background] flex flex-col items-center justify-center gap-5 md:hidden" 
                        initial={{ opacity: 0, y: -100 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: -100 }} 
                        transition={{ duration: 0.3 }}
                    >
                        <Link href="/" className="px-4 py-2 rounded-md hover:underline">
                            <AnimatedText text="Hva gjorde jeg?" delay={0.5} />
                        </Link>
                        <Link href="/" className="px-4 py-2 rounded-md hover:underline">
                            <AnimatedText text="Hvor var jeg?" delay={1.8} />
                        </Link>
                        <Link href="/" className="px-4 py-2 rounded-md hover:underline">
                            <AnimatedText text="Om IT-Avdeling" delay={2.5} />
                        </Link>
                        <ChangeTheme />
                    </motion.div>
                )}

                <div className="container hidden md:flex justify-between items-center">
                    <h1 className="text-[1.5vw] font-bold">LHagfoss</h1>
                    <div className="flex gap-3">
                        <Link href="/" className="px-4 py-2 rounded-md hover:underline">
                            <AnimatedText text="Hva gjorde jeg?" delay={0.5} />
                        </Link>
                        <Link href="/" className="px-4 py-2 rounded-md hover:underline">
                            <AnimatedText text="Hvor var jeg?" delay={1.8} />
                        </Link>
                        <Link href="/" className="px-4 py-2 rounded-md hover:underline">
                            <AnimatedText text="Om IT-Avdeling" delay={2.5} />
                        </Link>
                        <ChangeTheme />
                    </div>
                </div>
            </div>
        </div>
    )
}