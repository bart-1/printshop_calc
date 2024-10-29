import { ChangeEvent, ReactNode, useEffect, useState } from "react";

export type RadioInputProps = {
    id: string;
    value: string | number;
    className?: string;
    fieldName: string | ReactNode | ReactNode[];
};

interface RadioInputsSectionProps {
    defaultCheckedValue?: string;
    radioInputsGroup: RadioInputProps[] | [];
    legend: string;
    className: string;
    output: (x: RadioInputProps["value"]) => void;
}

const RadioInputsSection = ({
    className = "",
    radioInputsGroup,
    legend,
    output,
    defaultCheckedValue,
}: RadioInputsSectionProps) => {
    const [value, setValue] = useState("");

    useEffect(() => {
        output(value);
    }, [value]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };

    const renderRadioInputs = radioInputsGroup?.map((el, index) => (
        <div key={"input" + index} className="flex align-middle gap-2">
            <label htmlFor={el.id}>{el.fieldName}</label>
            <input
                defaultChecked={defaultCheckedValue === el.value || defaultCheckedValue === el.id ? true : false}
                id={el.id}
                name={legend}
                onChange={handleChange}
                value={el.value}
                type="radio"
            />
        </div>
    ));

    return (
        <>
            <fieldset className={`${className}`}>
                <legend className="px-2">{legend}</legend> {renderRadioInputs}
            </fieldset>
        </>
    );
};
export default RadioInputsSection;
