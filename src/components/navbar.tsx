import Link from "next/link"
import ChangeTheme from "./changeTheme"

export default function Navbar() {

    return (
        <div className="navbar fixed top-0 w-full h-[80px] flex justify-center items-center">
            <div className="container md:mx-20 flex justify-between items-center text-[--text]">
                <div className="">Lucas</div>
                <div className="flex items-center gap-5">
                    <Link 
                        href="/" 
                        className="px-4 py-2 rounded-md hover:underline"
                    >
                        Home
                    </Link>
                    <Link 
                        href="/" 
                        className="px-4 py-2 rounded-md hover:underline"
                    >
                        Projects
                    </Link>
                    <Link 
                        href="/"
                        className="px-4 py-2 rounded-md hover:underline"
                    >
                        Contact
                        </Link>
                    <Link 
                        href="/"
                        className="px-4 py-2 rounded-md hover:underline"
                    >
                        About
                        </Link>
                    <ChangeTheme />
                </div>
            </div>
        </div>
    )
}