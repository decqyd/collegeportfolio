import Link from 'next/link';
import {ReactChildren} from "react";

interface ButtonProps {
    className?: string,
    children: string
}

const Button = (props: ButtonProps) => {
    return (
        <a href="/#me + skills">
            <div className={`border-2 rounded-md p-3 w-max ${props.className} transition hover:bg-white hover:rounded-none hover:text-black hover:border-transparent duration-200`} >
                {props.children}
            </div>
        </a>
    )
}

export default Button