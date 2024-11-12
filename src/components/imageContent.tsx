import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image";

import image1 from "../../public/Images/IMG_1.jpg";
import image2 from "../../public/Images/IMG_2.jpg";
import image3 from "../../public/Images/IMG_3.jpg";
import image4 from "../../public/Images/IMG_4.jpg";
import image5 from "../../public/Images/IMG_5.jpg";
import image6 from "../../public/Images/IMG_6.jpg";
import image7 from "../../public/Images/IMG_7.jpg";
import image8 from "../../public/Images/IMG_8.jpg";
import image9 from "../../public/Images/IMG_9.jpg";
import image10 from "../../public/Images/IMG_10.jpg";

interface Item {
    id: number;
    image: any;
}

export default function ImageContent() {
    const [selectedImageId, setSelectedImageId] = useState<number | null>(null)

    const uke1: Item[] = [
        { id: 100, image: image1 },
        { id: 200, image: image2 },
        { id: 300, image: image3 },
        { id: 400, image: image4 },
        { id: 500, image: image5 },
    ];

    const uke2: Item[] = [
        { id: 600, image: image6 },
        { id: 700, image: image7 },
        { id: 800, image: image8 },
        { id: 900, image: image9 },
        { id: 1000, image: image10 },
    ];

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (selectedImageId && event.target instanceof HTMLElement && !event.target.closest('.imageCard')) {
                setSelectedImageId(null);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [selectedImageId]);

    const handleCardClick = (id: number) => {
        if (selectedImageId === id) {
            return;
        } else {
            setSelectedImageId(id);
        }
    };

    return (
        <div className="w-[100vw] flex flex-col items-center enter mb-20">
            <h1 className="container mb-5 text-[1.5vw]"><span className="underline">Klikk</span> på bildene for å forstørre de</h1>
            <div className="container md:mx-20 bg-[--background] flex flex-col gap-5 relative">
                <div className="grid grid-cols-5 gap-5 h-[40vh] ">
                    {uke1.map((item) => (
                        <motion.div 
                            key={item.id} 
                            layoutId={item.id.toString()} 
                            onClick={() => handleCardClick(item.id)}
                            className="cursor-pointer bg-white p-5 rounded-3xl shadow-md relative inset-0"
                        >
                            <Image src={item.image} alt="" layout="fill" objectFit="cover" className="w-full h-full rounded-3xl"/>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-5 gap-5 h-[40vh] ">
                    {uke2.map((item) => (
                        <motion.div 
                            key={item.id} 
                            layoutId={item.id.toString()} 
                            onClick={() => handleCardClick(item.id)}
                            className="cursor-pointer bg-white p-5 rounded-3xl shadow-md relative inset-0"
                        >
                            <Image src={item.image} alt="" layout="fill" objectFit="cover" className="w-full h-full rounded-3xl"/>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedImageId && (
                        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center bg-[#33333340] backdrop-blur-sm">
                            <motion.div 
                                layoutId={selectedImageId.toString()} 
                                className="relative inset-0 bg-white container mx-20 h-[80vh] p-8 rounded-3xl shadow-lg card overflow-hidden"
                            >
                                <Image src={uke1.find(item => item.id === selectedImageId)?.image || image1} alt="" layout="fill" objectFit="cover" className="w-full h-full"/>
                                <motion.button 
                                    onClick={() => setSelectedImageId(null)}
                                    className="absolute top-0 right-0 bg-[--primary] text-white m-5 px-6 p-4 rounded-full"
                                >
                                    X
                                </motion.button>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};