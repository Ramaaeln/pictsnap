import Link from "next/link";
import ThemeToggle from "./ui/toggleTheme";

export default function Header(){
    return(
        <header className="sticky top-0 dark:text-white text-black z-100" >
            <nav className="flex justify-between items-center p-2 text-xl">
                <a href="#">PicTSnap</a>
                <div className="text-lg">   
                    <a href="#service" className="mr-4">Service</a>
                    <Link href="/pricing" className="mr-4">Pricing</Link>
                    <Link href="/gallery">Gallery</Link>
                </div>
                <div className="text-lg flex gap-4 items-center">
                    <Link href="">SignIn</Link> {"|"} <Link href="">SignUp</Link>
                    <ThemeToggle/>
                </div>

            </nav>
        </header>
    )
}