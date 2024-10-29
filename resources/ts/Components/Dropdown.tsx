import {
    useState,
    createContext,
    useContext,
    Fragment,
    ReactNode,
    Dispatch,
    SetStateAction,
    DetailedHTMLProps,
    HTMLAttributes,
} from "react";
import { Link } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import {
    BaseInertiaLinkProps,
    InertiaLink,
    InertiaLinkProps,
} from "@inertiajs/inertia-react";

interface DropDownContextProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    toggleOpen: () => void;
}

const DropDownContext = createContext<DropDownContextProps>(
    {} as DropDownContextProps
);

interface NodeProps {
    children: ReactNode | ReactNode[];
}

const Dropdown = ({ children }: NodeProps) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((previousState) => !previousState);
    };

    return (
        <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
            <div className="relative">{children}</div>
        </DropDownContext.Provider>
    );
};

const Trigger = ({ children }: NodeProps) => {
    const { open, setOpen, toggleOpen } = useContext(DropDownContext);

    return (
        <>
            <div onClick={toggleOpen}>{children}</div>

            {open && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setOpen(false)}
                ></div>
            )}
        </>
    );
};

interface ContentProps extends NodeProps {
    align?: string;
    width?: string;
    className?: string;
}

const Content = ({
    align = "right",
    width = "48",
    className = "py-1 dark:bg-mygray-darker bg-gray-400 ",
    children,
}: ContentProps) => {
    const { open, setOpen } = useContext(DropDownContext);

    let alignmentClasses = "origin-top";

    if (align === "left") {
        alignmentClasses = "ltr:origin-top-left rtl:origin-top-right start-0";
    } else if (align === "right") {
        alignmentClasses = "ltr:origin-top-right rtl:origin-top-left end-0";
    }

    let widthClasses = "";

    if (width === "48") {
        widthClasses = "w-48";
    }

    return (
        <>
            <Transition
                as={Fragment}
                show={open}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div
                    className={`absolute z-50 mt-2 rounded-md shadow-lg  ${alignmentClasses} ${widthClasses}`}
                    onClick={() => setOpen(false)}
                >
                    <div
                        className={
                            `rounded-md ring-1 ring-black ring-opacity-5 ` +
                            className
                        }
                    >
                        {children}
                    </div>
                </div>
            </Transition>
        </>
    );
};

interface DropDownLinkProps extends NodeProps {
    inertiaProps?: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> &
        InertiaLinkProps;
    className?: string;
    href?: string;
    method?: "get" | "post";
    as?: string;
}

const DropdownLink = ({
    className = "",
    children,
    href,
    as,
    method,
    ...inertiaProps
}: DropDownLinkProps) => {
    return (
        <Link
            as={as}
            method={method}
            {...inertiaProps}
            href={inertiaProps.inertiaProps?.href ?? ""}
            className={
                "block w-full px-4 py-2 text-start text-sm leading-5 dark:text-white dark:bg-mygray-darker hover:dark:bg-mygray-lighter bg-gray-400 hover:bg-gray-300 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out  hover:border-cyan-500 hover:dark:border-red-500" +
                className
            }
        >
            {children}
        </Link>
    );
};

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;

export default Dropdown;
