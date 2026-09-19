import Image from "next/image";

import LogoPic from "../../../public/images/logo/logo.png";

export const Logo = () => {
  return (
    <div className="logo cursor-pointer">
      <Image
        className="w-[20%]"
        src={LogoPic}
        alt="محتوا پلاس"
        priority
      />
      <span>محتوا پلاس</span>
    </div>
  );
};
