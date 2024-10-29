import { Link } from "@inertiajs/inertia-react";
import React, { ReactNode } from "react";
import { IconContext } from "react-icons";
import NavLink from "./NavLink";

interface BoxModuleProps {
    // link?: string;
    title?: string;
    children: string | ReactNode | ReactNode[];
    icon?: ReactNode;
    className?: string;
}

const ContentBoxSection = ({
    icon,
    children,
    title,
    className = "",
}: BoxModuleProps) => {
    return (
        <>
            <div
                className={` p-6 min-h-56 bg-slate-300 dark:bg-mygray-darker/50 dark:bg-gradient-to-bl from-mygray-lighter/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-black/60 flex  transition-all duration-250 focus:outline focus:outline-2 border-[1px] border-mygray-normal hover:border-cyan-500 hover:dark:border-red-500 ${className}`}
            >
                <div>
                    {icon && (
                        <div className="h-16 w-16 bg-blue-50 dark:bg-red-800/20 flex items-center justify-center rounded-full">
                            <IconContext.Provider
                                value={{
                                    className:
                                        "w-7 h-7 text-indigo-900 dark:text-red-500",
                                }}
                            >
                                {icon}
                            </IconContext.Provider>
                        </div>
                    )}
                    <h2 className="mt-5 text-2xl text-left font-semibold text-indigo-950 dark:text-white">
                        {title ? title : ""}
                    </h2>
                    <div className="mt-2 text-left text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};
export default ContentBoxSection;
