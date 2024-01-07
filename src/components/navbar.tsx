"use client"
import Link from "next/link";
import {LuHome, LuSchool, LuTrophy, LuLaugh} from "react-icons/lu";
import { BsPerson } from "react-icons/bs";
import {mapIncludes} from "yaml/dist/compose/util-map-includes";
import React, {ReactNode} from "react";

const Navbar = ({children}: {children: ReactNode}) => {
    return (
        <div className="fixed right-10 top-1/2 -translate-y-1/2 z-50">
            {children}
        </div>
    )
}


interface NavbarItemProps {
    icon: React.ReactElement,
    children: string,
    highlighted: boolean
}

const NavbarItem = ({icon, highlighted, children}:  NavbarItemProps) => {
    return <a href={`#${children}`} className={`rounded-xl flex justify-end items-center hover:bg-white hover:font-normal
                    hover:text-3xl hover:text-black group transition-all duration-150 p-2 text-2xl mb-3 ${highlighted ? "font-bold" : "font-normal"}`}>
        {children}&nbsp;&nbsp;{icon}
    </a>
}

export {NavbarItem, Navbar};
