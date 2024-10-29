import React, { ReactNode, useEffect, useState } from "react";
import ApplicationLogo from "../Components/ApplicationLogo";
import ThemeToggleSwitch from "../Components/ThemeToggleSwitch";
import { Link, usePage } from "@inertiajs/react";
import Dropdown from "../Components/Dropdown";
import { BsList } from "react-icons/bs";
import { PageProps } from "@inertiajs/inertia";

interface MasterLayoutProps {
    children: ReactNode | ReactNode[];
}

export interface InertiaProps extends PageProps {
    auth: {
        user: {
            id: number;
            name: string;
            email: string;
            discount: number;
            discount_products_list: string;
            created_at: Date;
            updated_at: Date;
            email_verified_at: string;
        };
    };
    version: string;
}
const MasterLayout = ({ children }: MasterLayoutProps) => {
    const { auth, version } = usePage<InertiaProps>().props;
    return (
        <>
            <div className=" w-full h-12 fixed top-0 flex justify-items-stretch">
                <ThemeToggleSwitch className="align-middle self-center scale-90" />
                <div className="grow"></div>
                <div className="self-center px-4">
                    {auth.user ? (
                        <>
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 border border-transparent text-xl leading-4 font-medium rounded-md  text-indigo-950-600
                                                        hover:text-gray-900
                                                        dark:text-white
                                                        dark:hover:text-white
                                                        focus:outline
                                                        focus:outline-2
                                                        focus:rounded-sm
                                                         hover:border-cyan-500 hover:dark:border-red-500 focus:outline-none transition ease-in-out duration-150 uppercase
                                                        "
                                        >
                                            {auth.user.name}
                                            <BsList />
                                        </button>
                                    </span>
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <Dropdown.Link
                                        href={route("welcome.logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="text-xl font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>
                        </>
                    )}
                </div>
            </div>

            {route().current() === "welcome" ? (
                <Link href={route("welcome")}>
                    <div className="flex justify-center mt-16">
                        <ApplicationLogo
                            viewBox="0 0 300 300"
                            className="h-22 fill-indigo-950 dark:fill-[#FF2D20]"
                        />
                    </div>
                </Link>
            ) : (
              <div className="h-20"></div>
            )}
            <div className="flex justify-center m-auto">{children}</div>

            <div className="fixed w-screen text-xs h-8 bg-indigo-950 dark:bg-black text-white bottom-0 right-0 flex justify-center mt-16 px-6 sm:items-center sm:justify-between">
                <div className="text-center text-sm sm:text-start">&nbsp;</div>
                <span>made by Dziwny Kot Studio</span>
                <div className="text-center  sm:text-end sm:ms-0">
                    v{version ? version : "x"}
                </div>
            </div>
        </>
    );
};
export default MasterLayout;
