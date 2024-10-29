import { ChangeEvent, MouseEventHandler, useEffect, useState } from "react";

type CheckboxInputProps = {
    id: string;
    value: string;
    className?: string;
    fieldName: string;
};

interface CheckboxInputsSectionProps {
    defaultCheckedValue?: string;
    checkboxInputsGroup: CheckboxInputProps[] | null;
    legend: string;
    className: string;
    output: (x: CheckboxInputProps["value"]) => void;
}

const CheckboxInputsSection = ({
    className = "",
    checkboxInputsGroup,
    legend,
    output,
    defaultCheckedValue,
}: CheckboxInputsSectionProps) => {
    const [value, setValue] = useState("");
    const [values, setValues] = useState(["cut"]);

    useEffect(() => {

        const arrValuesTest = values.filter(el=> el === value)
        if (value && arrValuesTest.length === 0 ) values.push(value);


        console.log(values);
        output(value);
    }, [value]);

    const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
   console.log(e.currentTarget)
        // setValue(e.currentTarget.value);
    };

    const test = (e: MouseEventHandler<HTMLButtonElement>) => {
e.name
    }

    const renderCheckboxInputs = checkboxInputsGroup?.map((el, index) => (
        <div key={"input" + index} className="flex align-middle gap-2">
            <label htmlFor={el.id}>{el.fieldName}</label>
            <input
                defaultChecked={defaultCheckedValue === el.value ? true : false}
                id={el.id}
                name={legend}
                // onChange={handleChange}
                value={el.value}
                type="checkbox"
            />
        </div>
    ));

    return (
        <>
            <fieldset className={className}>
                <form onChange={handleChange}>
                    <legend className="px-2">{legend}</legend> {renderCheckboxInputs}
                </form>
            </fieldset>
        </>
    );
};
export default CheckboxInputsSection;
