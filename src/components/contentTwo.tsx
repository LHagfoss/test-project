import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image";

import { texts } from "@/app/api/text";

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
    subtitle: string;
    title: string;
    date: string;
    paragraphs: any;
    image: any;
};

export default function ContentTwo() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const uke1: Item[] = [
        { id: 1, title: "Dag 1", subtitle: "Mandag", date: "11. November", paragraphs: texts.uke1[0]?.paragraphs || [], image: image1 },
        { id: 2, title: "Dag 2", subtitle: "Tirsdag", date: "12. November", paragraphs: texts.uke1[1]?.paragraphs || [], image: image2 },
        { id: 3, title: "Dag 3", subtitle: "Onsdag", date: "13. November", paragraphs: texts.uke1[2]?.paragraphs || [], image: image3 },
        { id: 4, title: "Dag 4", subtitle: "Torsdag", date: "14. November", paragraphs: texts.uke1[3]?.paragraphs || [], image: image4 },
        { id: 5, title: "Dag 5", subtitle: "Fredag", date: "15. November", paragraphs: texts.uke1[4]?.paragraphs || [], image: image5 },
    ];

    const uke2: Item[] = [
        { id: 6, title: "Dag 6", subtitle: "Mandag", date: "18. November", paragraphs: texts.uke2[0]?.paragraphs || [], image: image6 },
        { id: 7, title: "Dag 7", subtitle: "Tirsdag", date: "19. November", paragraphs: texts.uke2[1]?.paragraphs || [], image: image7 },
        { id: 8, title: "Dag 8", subtitle: "Onsdag", date: "20. November", paragraphs: texts.uke2[2]?.paragraphs || [], image: image8 },
        { id: 9, title: "Dag 9", subtitle: "Torsdag", date: "21. November", paragraphs: texts.uke2[3]?.paragraphs || [], image: image9 },
        { id: 10, title: "Dag 10", subtitle: "Fredag", date: "22. November", paragraphs: texts.uke2[4]?.paragraphs || [], image: image10 },
    ];

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (selectedId && event.target instanceof HTMLElement && !event.target.closest('.card')) {
                setSelectedId(null);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [selectedId]);

    const handleCardClick = (id: number) => {
        if (selectedId === id) {
            return;
        } else {
            setSelectedId(id);
        }
    };

    return (
        <div className="w-[100vw] flex justify-center p-5 md:p-20 mb-20" id="hvaGjordeJeg">
            <div className="container bg-[--background] flex flex-col gap-5 relative">
                <div className="relative grid grid-cols-1 md:grid-cols-5 gap-5 md:h-[40vh] p-1 md:p-0">
                    {uke1.map((item) => (
                        <motion.div 
                            key={item.id} 
                            layoutId={item.id.toString()} 
                            onClick={() => handleCardClick(item.id)}
                            className="cursor-pointer bg-[--background] p-5 rounded-3xl shadow-md min-h-[300px] relative inset-0 border border-[--textWhite]"
                        >
                            <div className="flex gap-1 mb-1">
                                <motion.h5 className="text-lg text-[--text]">{item.subtitle}</motion.h5>
                                <motion.h5 className="text-lg text-[--text]">{item.date}</motion.h5>
                            </div>
                            <motion.h2 className="text-4xl text-[--text]">{item.title}</motion.h2>
                            <motion.p className="mt-4">
                                {item.paragraphs.length > 0 ? `${item.paragraphs[0].text.substring(0, 200)}...` : ""}
                            </motion.p>
                            <div className="absolute bottom-0 left-0 w-full p-4">
                                <button type="button" className="w-full bg-[--primary] py-3 text-[--inverseText] rounded-2xl">Les mer</button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-5 gap-5 md:h-[40vh] p-1 md:p-0">
                    {uke2.map((item) => (
                        <motion.div 
                            key={item.id} 
                            layoutId={item.id.toString()} 
                            onClick={() => handleCardClick(item.id)}
                            className="cursor-pointer bg-[--background] p-5 rounded-3xl shadow-md relative inset-0 min-h-[300px] border border-[--textWhite]"
                        >
                            <div className="flex gap-1 mb-1">
                                <motion.h5 className="text-lg text-[--text]">{item.subtitle}</motion.h5>
                                <motion.h5 className="text-lg text-[--text]">{item.date}</motion.h5>
                            </div>
                            <motion.h2 className="text-4xl text-[--text]">{item.title}</motion.h2>
                            <motion.p className="mt-4">
                                {item.paragraphs.length > 0 ? `${item.paragraphs[0].text.substring(0, 200)}...` : ""}
                            </motion.p>
                            <div className="absolute bottom-0 left-0 w-full p-4">
                                <button type="button" className="w-full bg-[--primary] py-3 text-[--inverseText] rounded-2xl">Les mer</button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center bg-[#33333340] backdrop-blur-sm">
                            <motion.div 
                                layoutId={selectedId.toString()} 
                                className="relative inset-0 bg-[--background] border border-[--textWhite] container mx-5 md:mx-20 h-[80vh] p-8 rounded-3xl shadow-lg card overflow-auto"
                            >
                                <div className="w-full flex flex-col gap-3 relative inset-0 overflow-y-scroll">
                                    <div className="flex gap-1">
                                        <motion.h5 className="text-[4vw] md:text-[1vw] text-[--text]">{uke1.find(item => item.id === selectedId)?.subtitle || uke2.find(item => item.id === selectedId)?.subtitle}</motion.h5>
                                        <motion.h5 className="text-[4vw] md:text-[1vw] text-[--text]">{uke1.find(item => item.id === selectedId)?.date || uke2.find(item => item.id === selectedId)?.date}</motion.h5>
                                    </div>
                                    <motion.h2 className="text-[10vw] md:text-[3vw] text-[--text] leading-10">{uke1.find(item => item.id === selectedId)?.title || uke2.find(item => item.id === selectedId)?.title}</motion.h2>
                                    <motion.div className="text-[5vw] md:text-[1vw] my-5 text-[--text]">
                                        {selectedId && (
                                            <>
                                                {uke1.find(item => item.id === selectedId)?.paragraphs.map((para: { id: number; text: string }) => (
                                                    <motion.p 
                                                        key={para.id} 
                                                        className="mb-10"
                                                    >
                                                        {para.text}
                                                    </motion.p> 
                                                )) || uke2.find(item => item.id === selectedId)?.paragraphs.map((para: { id: number; text: string }) => (
                                                    <motion.p 
                                                        key={para.id}
                                                        className="mb-10"
                                                    >
                                                        {para.text}
                                                    </motion.p>
                                                ))}
                                            </>
                                        )}
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
