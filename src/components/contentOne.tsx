import { motion, useScroll, useTransform } from "framer-motion"

export default function ContentOne() {
    const { scrollYProgress } = useScroll()
    
    const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 360, 360])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 55])

    return (
        <>
            <div className="relative w-[100vw] h-[200vh] flex justify-center">
                <div className="container w-full h-full md:mx-20 pt-20 flex justify-center inset-0">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 2, type: "spring", stiffness: 100 }}
                        style={{ 
                            rotate,
                            scale,
                            position: "sticky",
                            top: "50%",
                        }}
                        className="w-[50px] h-[50px] bg-[#2f27ce] flex justify-center items-center"
                    >
                        Hello
                    </motion.div>
                </div>
            </div>
            <div className="h-[300px]"></div>
        </>
    );
};