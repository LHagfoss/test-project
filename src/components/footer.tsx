import Link from "next/link"

export default function Footer() {

    return (
        <div className="relative bg-[#2f27ce] w-full h-[70vh] flex justify-center items-center">
            <div className="container h-full md:mx-20 flex justify-between items-center text-[--text]">
                <div className="w-full h-full flex flex-col">
                    <div className="flex-[4] mt-10">

                    </div>
                    <div 
                        className="flex-1 mb-10 border-t-2 border-[--primary] flex justify-between items-center"
                    >
                        <div 
                            className="text-[--textWhite] flex-1"
                        >
                            © LHAGFOSS™ AS – <Link href="" className="text-[--accent] underline">Privacy Policy</Link> and <Link href="" className="text-[--accent] underline">Cookies</Link>
                        </div>

                        <div className="text-[--textWhite]">
                            Made by <Link href="https://lhagfoss.com" className="text-[--accent] underline">LHagfoss</Link>
                        </div>

                        <div className="flex-1 flex gap-6 justify-end items-center text-[--textWhite]">
                            <div className="flex gap-2 items-center cursor-pointer">
                                <div className="w-[30px] h-[30px] bg-[--textWhite] rounded-full"></div>
                                <div className="">YouTube</div>
                            </div>

                            <div className="flex gap-2 items-center cursor-pointer">
                                <div className="w-[30px] h-[30px] bg-[--textWhite] rounded-full"></div>
                                <div className="">Portfolio</div>
                            </div>

                            <div className="flex gap-2 items-center cursor-pointer">
                                <div className="w-[30px] h-[30px] bg-[--textWhite] rounded-full"></div>
                                <div className="">Github</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};