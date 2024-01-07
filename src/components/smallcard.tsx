import  {ReactNode} from "react";

const Smallcard = ({children, subject, subsubject}: {children: ReactNode, subject: string, subsubject: string}) => {
    return (
        <div className="border-2 flex items-center flex-col py-5 mt-3 px-4 rounded-md w-80 h-36">
            <h1 className="text-2xl font-bold">{children}</h1>
            <p className="mt-3 text-[1rem]">{subject}</p>
            <p className="text-sm my-1">{subsubject}</p>
        </div>
    )
}

export default Smallcard