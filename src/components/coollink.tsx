import Link from "next/link"

const CoolLink = ({href, children}: {href: string, children: React.ReactNode}) => {
    return (
        <Link href={href} target="_blank" className="link">{children}</Link>
    )
}

export default CoolLink;