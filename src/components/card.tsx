import {ReactNode} from "react";
import Link from "next/link";
import Image from "next/image";
import {AiOutlineLink} from "react-icons/ai";

interface CardProps {
    children: ReactNode,
    imgurl: string,
    url: string,
}

const Card = ({children, imgurl, url}: CardProps) => {
    return (
        <Link href={url} target="_blank" className="flex flex-col grayscale hover:grayscale-0 gap-y-5 items-center justify-center w-44 h-44 group
        backdrop-blur-md rounded-lg border-2 hover:border-4 transition-all duration-150 hover:backdrop-blur-xl">
            <Image src={imgurl} width="70" height="70" alt="coolimage"/><span className="text-lg -mt-2">{children}</span>
            <span className="group-hover:-translate-y-3 text-sm absolute bottom-0 opacity-0 group-hover:opacity-100 transition-all"><AiOutlineLink/></span>
        </Link>
    )
}

export default Card