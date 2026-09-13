import Link from "next/link";

export const Logo = () => 
(
    <Link href={"/"}>
        <div className="logo cursor-pointer">
            <span className="logoIcon">◖</span>
            <span>محتوا پلاس</span>
        </div>
    </Link>
)