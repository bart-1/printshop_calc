import React, { ChangeEvent, FormEvent, FormEventHandler, useEffect, useState } from "react";
import Checkbox from "./Checkbox";

type InputOutputData = string | number | readonly string[] | undefined;

interface TableInputProps {
    input: ChangeEvent<HTMLInputElement>,
    output: (e: ChangeEvent<HTMLInputElement>) => void,
    className?: string,
}

const TableInput = ({ input, output, className }: TableInputProps) => {
    const [inputData, setInputData] = useState<ChangeEvent<HTMLInputElement> >();


    useEffect( () => {
        setInputData(input)
    }, []);

    useEffect(() => {
        if(inputData)
        output(inputData)
    }, [inputData])


    return (
        <><form >

                {typeof inputData === "string" && inputData != null && (
                    <input
                        className={className}
                        type="text"
                        defaultValue={input as InputOutputData}
                        onChange={e => setInputData(e)}
                        value={inputData || ""}
                    />
                )}
                {typeof inputData === "number" && (
                    <input value={inputData || 0} className={className} type="number" />
                )}
        </form>
        </>
    );
};
export default TableInput;
