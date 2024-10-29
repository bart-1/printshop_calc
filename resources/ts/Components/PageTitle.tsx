import { Link } from "@inertiajs/react";
import React from "react";

interface PageTitleProps {
    className?: string;
    heavyTxt: string;
    lightTxt: string;
}

const PageTitle = ({ className, heavyTxt, lightTxt }: PageTitleProps) => {
    return (
        <>
            <div
                className={`${className} flex text-center justify-center text-indigo-950 dark:text-red-600 `}
            >
                <Link
                    className="font-extrabold text-6xl mr-5"
                    href={route("welcome")}
                >
                    {" "}
                    &#8630;{" "}
                </Link>
                <h1 className="font-extrabold text-6xl">{heavyTxt}</h1>{" "}
                <h2 className="self-baseline font-light text-6xl">
                    {lightTxt}
                </h2>
            </div>
        </>
    );
};
export default PageTitle;
