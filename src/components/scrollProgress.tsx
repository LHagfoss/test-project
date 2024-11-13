import { motion, useViewportScroll, useTransform } from "framer-motion"

export default function ScrollProgress() {
    const { scrollYProgress } = useViewportScroll()
    const height = useTransform(scrollYProgress, [0, 1], ['0.8vh', '98.5vh'])

    return (
        <motion.div
            style={{ height }}
            className="fixed top-2 left-2 w-2 bg-[--accent] z-10 rounded-full"
        />
    )
}

