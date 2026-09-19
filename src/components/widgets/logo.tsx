import Image from "next/image";

import LogoPic from "../../../public/images/logo/logo.png";

export const Logo = () => {
  return (
    <div className="logo flex min-w-0 cursor-pointer items-center gap-2 sm:gap-2.5 md:gap-3">
      <Image
        src={LogoPic}
        alt="محتوا پلاس"
        priority
        className="h-auto w-9 shrink-0 object-contain sm:w-10 md:w-11 lg:w-16"
      />

      <span className="truncate text-sm font-bold text-[var(--text)] sm:text-[15px] md:text-base lg:text-xl">
        محتوا پلاس
      </span>
    </div>
  );
};
