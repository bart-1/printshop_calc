import {
    InputHTMLAttributes,
    RefObject,
    forwardRef,
    useEffect,
    useRef,
} from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>{
    type?: string;
    className?: string;
    isFocused?: boolean;
    // props: DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    ref: RefObject<HTMLInputElement>;
}

const TextInput = forwardRef(function TextInput({
    className = "",
    isFocused = false,
    type = "text",
    ref,
    ...props
}: TextInputProps) {
    const input = ref ? ref : useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isFocused && input.current !== null) {
            input.current.focus();
        }
    }, []);

    return (
        <>
            <input
                {...props}
                className={
                    "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm " +
                    className
                }
                ref={input}
            />
        </>
    );
});

export default TextInput;
