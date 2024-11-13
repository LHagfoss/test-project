import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StaticImageData } from "next/image";
import Image from "next/image";

import image1 from '../../public/Images/IMG_1.jpg';
import image2 from '../../public/Images/IMG_2.jpg';
import image3 from '../../public/Images/IMG_3.jpg';
import image4 from '../../public/Images/IMG_4.jpg';
import image5 from '../../public/Images/IMG_5.jpg';
import image6 from '../../public/Images/IMG_6.jpg';
import image7 from '../../public/Images/IMG_7.jpg';
import image8 from '../../public/Images/IMG_8.jpg';
import image9 from '../../public/Images/IMG_9.jpg';
import image10 from '../../public/Images/IMG_10.jpg';

interface Item {
    id: number;
    image: StaticImageData;
}

export default function ImageContent() {
    const [selectedImageId, setSelectedImageId] = useState<number | null>(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const uke1: Item[] = [
        { id: 11, image: image1 },
        { id: 12, image: image2 },
        { id: 13, image: image3 },
        { id: 14, image: image4 },
        { id: 15, image: image5 },
    ];

    const uke2: Item[] = [
        { id: 16, image: image6 },
        { id: 17, image: image7 },
        { id: 18, image: image8 },
        { id: 19, image: image9 },
        { id: 20, image: image10 },
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

    useEffect(() => {
        const timer = setTimeout(() => {
            setImagesLoaded(true);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    const handleCardClick = (id: number) => {
        if (selectedImageId === id) {
            return;
        } else {
            setSelectedImageId(id);
        }
    };

    const renderImage = (item: Item) => (
        <motion.div 
            key={item.id} 
            layoutId={item.id.toString()} 
            onClick={() => handleCardClick(item.id)}
            className="cursor-pointer rounded-3xl shadow-md relative inset-0 min-h-[300px]"
        >
            <div className={`absolute rounded-3xl inset-0 bg-gradient-to-br from-black to-gray-800 ${imagesLoaded ? 'hidden' : 'block'} animate-pulse`}></div>
            <Image 
                src={item.image} 
                alt={`Image ${item.id}`} 
                fill 
                style={{ objectFit: 'cover' }} 
                className={`rounded-3xl w-full h-full ${imagesLoaded ? 'block' : 'hidden'}`}
            />
        </motion.div>
    );

    return (
        <div className="w-[100vw] flex justify-center p-5 md:p-20 mb-20" id="imageContent">
            <div className="container bg-[--background] flex flex-col gap-5 relative">
                <div className="grid grid-cols-1 md:grid-cols-5 md:h-[40vh] gap-5 p-1 md:p-0">
                    {uke1.map(renderImage)}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 md:h-[40vh] gap-5 p-1 md:p-0">
                    {uke2.map(renderImage)}
                </div>

                <AnimatePresence>
                    {selectedImageId && (
                        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center bg-[#33333340] backdrop-blur-sm z-10">
                            <motion.div 
                                layoutId={selectedImageId.toString()} 
                                className="relative inset-0 bg-white container mx-5 md:mx-20 h-[80vh] rounded-3xl shadow-lg card overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br from-black to-gray-800 ${imagesLoaded ? 'hidden' : 'block'} animate-pulse`}></div>
                                <Image 
                                    src={uke1.find(item => item.id === selectedImageId)?.image || uke2.find(item => item.id === selectedImageId)?.image || ''} 
                                    alt="" 
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className={`w-full h-full ${imagesLoaded ? 'block' : 'hidden'}`}
                                />
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
}
