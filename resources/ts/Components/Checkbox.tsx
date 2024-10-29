import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface CheckboxProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    className?: string;
}

export default function Checkbox({ className = "", ...props }: CheckboxProps) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 " +
                className
            }
        />
    );
}
