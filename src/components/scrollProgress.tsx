import { motion, useViewportScroll, useTransform } from "framer-motion"

export default function ScrollProgress() {
    const { scrollYProgress } = useViewportScroll()
    const height = useTransform(scrollYProgress, [0, 1], ['0vh', '100vh'])

    return (
        <motion.div
            style={{ height }}
            className="fixed top-1 right-1 w-2 bg-[--accent] z-10 rounded-full"
        />
    )
}

