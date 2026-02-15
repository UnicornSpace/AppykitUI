import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";

const Logo = ({
  full = false,
  width = 100,
  height = 100,
  link = true,
  className,
  textClassName,
  isBeta = false,
}: {
  full?: boolean;
  link?: boolean;
  isBeta?: boolean;
  width?: number;
  height?: number;
  className?: string;
  textClassName?: string;
}) => {
  if (link)
    return (
      <Link
        href={"/"}
        className={cn(
          "flex items-center text-xl font-light  font-bbh ",
          className
        )}
      >
        <Image
          src={"/appykitUITemp.png"}
          width={30}
          height={30}
          alt=""
          className=""
        />

        {full && <span className={cn("-ml-1", textClassName)}>ppykitUI</span>}
      </Link>
    );
  else
    return (
      <div
        className={cn("flex items-center text-xl font-light font-bbh", className)}
      >
        <Image
          src={"/appykitUITemp.png"}
          width={30}
          height={30}
          alt="logo"
        />
        {full && <span className={cn("-ml-1", textClassName)}>ppykitUI</span>}
      </div>
    );
};

export default Logo;

{
  /* <Link */
}
//             href={"/"}
//             className=" "
//           >
//             {/* <span className="bg-[#007AFF] px-2  rounded-sm">A</span> */}

//             <Image
//               src={"/appykitUI temp logo.png"}
//               height={30}
//               width={30}
//               className="rounded-t-sm"
//               alt=""
//             />
//             <span className="-ml-1">ppykitUI</span>
//           </Link>
