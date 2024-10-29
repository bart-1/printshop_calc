import { LabelHTMLAttributes, ReactNode } from "react";

interface InputLabelProps
    extends LabelHTMLAttributes<HTMLLabelElement> {
    value: string;
    className?: string;
    children?: ReactNode | ReactNode[];
}

export default function InputLabel({
    value,
    className = "",
    children,
    ...props
}: InputLabelProps) {
    return (
        <label
            {...props}
            className={`block font-medium text-sm text-gray-700 ` + className}
        >
            {value ? value : children}
        </label>
    );
}
