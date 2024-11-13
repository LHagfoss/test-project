import Link from "next/link"
import FadeIn from "./fadeIn";

export default function Footer() {

    return (
        <FadeIn delay={0}>
            <div className="relative bg-[#2f27ce] w-[100vw] h-[100vh] md:h-[70vh] flex justify-center items-center -z-10 overflow-hidden" id="footer">
                <div className="container h-full md:mx-20 flex flex-col md:flex-row justify-between items-center text-[--text] overflow-hidden">
                    <div className="w-full h-full flex flex-col overflow-hidden">
                        <div className="flex-[3] md:flex-[4] mt-10 overflow-hidden">

                        </div>
                        <div 
                            className="flex-1 mb-2 md:mb-10 border-t-2 border-[--primary] flex flex-col md:flex-row justify-between items-center overflow-hidden"
                        >
                            <div 
                                className="text-[--inverseText] flex-1 overflow-hidden mt-10"
                            >
                                © LHAGFOSS™ AS – <Link href="" className="text-[--accent] underline">Privacy Policy</Link> and <Link href="" className="text-[--accent] underline">Cookies</Link>
                            </div>

                            <div className="text-[--inverseText] overflow-hidden">
                                Made by <Link href="https://lhagfoss.com" className="text-[--accent] underline">LHagfoss</Link>
                            </div>

                            <div className="flex-1 flex flex-col md:flex-row gap-2 md:gap-6 justify-end items-center text-[--inverseText] overflow-hidden">
                                <div className="flex gap-2 items-center cursor-pointer overflow-hidden">
                                    <div className="w-[30px] h-[30px] bg-[--textWhite] rounded-full overflow-hidden"></div>
                                    <div className="">YouTube</div>
                                </div>

                                <Link href="https://lhagfoss.com/" target="_blank">
                                    <div className="flex gap-2 items-center cursor-pointer overflow-hidden">
                                        <div className="w-[30px] h-[30px] bg-[--textWhite] rounded-full overflow-hidden"></div>
                                        <div className="">Portfolio</div>
                                    </div>
                                </Link>

                                <div className="flex flex-row gap-2 items-center cursor-pointer overflow-hidden">
                                    <div className="w-[30px] h-[30px] bg-[--textWhite] rounded-full overflow-hidden"></div>
                                    <div className="">Github</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FadeIn>
    );
};