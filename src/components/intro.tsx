import Image from "next/image";
import React from "react";
import FadeIn from "./fadeIn";

export default function Intro() {
    return (
        <FadeIn delay={0}>
            <div className="w-[100vw] h-[100vh] flex justify-center items-center">
                <div className="container m-5 md:mx-20 flex justify-between items-center text-[--text]">
                    <div className="w-full flex flex-col justify-between h-[60vh] text-[--Text]">
                        <div className="flex flex-col leading-tight">
                            <h3 className="text-[6vw] md:text-[2.5vw]">Utplassering</h3>
                            <h1 className="text-[9vw] md:text-[4vw] font-bold   ">IT-Avdeling Kommunen</h1>
                            <h3 className="text-[8vw] md:text-[2.5vw]">Rådhusgata 26</h3>
                            <h4 className="text-[3.5vw] md:text-[1vw]">11. November -{'>'} 22. November</h4>
                        </div>
                        <div className="text-[6vw] md:text-[1vw]">
                            <h1 className="">av <span className="text-[--primary] underline cursor-pointer"> Lucas Hagfoss</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </FadeIn>
    );
};