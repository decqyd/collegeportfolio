import  { ReactNode }from "react";

interface TimelineItemProps {
    children: ReactNode,
    date: string,
    header: string,
    className?: string,
}

const Timeline = ({children, className}: {children: ReactNode, className: string}) => {
    return (
        <ol className={`border-l border-white flex flex-col gap-y-5 absolute ${className}`}>
            {children}
        </ol>
    )
}

const TimelineItem = ({children, date, header, className}: TimelineItemProps) => {
    return (
        <li className={className}>
            <div className="flex-start flex items-center pt-3">
                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-white"></div>
                <p className="text-sm ml-1 text-neutral-300">{date}</p>
            </div>
            <h4 className="my-1 ml-5 text-xl font-semibold">{header}</h4>
            <div className="mb-6 ml-5 mt-2">
                {children}
            </div>
        </li>
    )
}

export {Timeline, TimelineItem}