import React from "react";
import FadeIn from "./fadeIn";
import AnimatedText from "./animatedText";

export default function Intro() {
    return (
        <FadeIn delay={0}>
            <div className="w-[100vw] h-[100vh] flex justify-center items-center">
                <div className="container m-5 md:mx-20 flex justify-between items-center text-[--text]">
                    <div className="w-full flex flex-col justify-between h-[60vh] text-[--Text]">
                        <div className="flex flex-col leading-tight">
                            <h1 className="text-[9vw] md:text-[4vw] font-bold"><AnimatedText text="IT-Avdeling Kommunen" delay={0.1} /></h1>
                            <h3 className="text-[8vw] md:text-[2.5vw] font-medium"><AnimatedText text="Rådhusgata 26" delay={0.2} /></h3>
                            <h4 className="text-[3.5vw] md:text-[1vw]"><AnimatedText text="11. November -{'>'} 22. November" delay={0.3} /></h4>
                        </div>
                        <div className="w-full flex justify-between text-[6vw] md:text-[1vw]">
                            <h1 className=""><AnimatedText text="Laget av " delay={0.4} /> <span className="text-[--primary] underline cursor-pointer"> <AnimatedText text="Lucas Hagfoss" delay={0.9} /></span></h1>
                            <h1 className=""><AnimatedText text="Scroll down" delay={1.5} /></h1>
                        </div>
                    </div>
                </div>
            </div>
        </FadeIn>
    );
};