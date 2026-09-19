import Link from "next/link";
import LogoPic from "../../../public/images/logo/logo.png"

export const Logo = () => 
(
    <Link href={"/"}>
        <div className="logo cursor-pointer">
            <img className="w-[20%]" src={LogoPic.src} alt="" />
            <span>محتوا پلاس</span>
        </div>
    </Link>
)