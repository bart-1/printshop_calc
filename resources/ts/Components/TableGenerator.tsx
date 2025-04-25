import React, {
    ChangeEvent,
    FormEvent,
    MouseEventHandler,
    SyntheticEvent,
    useEffect,
    useState,
} from "react";
import TableInput from "./TableInput";

interface TableGeneratorProps<T> {
    data: T;
    title?: string;
}

const TableGenerator = <T extends Object[]>({
    data,
    title,
}: TableGeneratorProps<T>) => {
    const [baseData, setBaseData] = useState<T>(data);
    const [copyBaseData, setCopyBaseData] = useState<T>(data);

    useEffect(() => {
        setBaseData(data);
        setCopyBaseData(data);
        return () => {};
    }, []);

    const tableColumnsTitle = Object.keys(baseData[0]).map((key, index) => (
        <td key={key + index} className="p-0.5 mb-3 text-center">
            {key}
        </td>
    ));

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleReset = (e: SyntheticEvent) => {
        setBaseData(copyBaseData);
    };

    const tableRows = baseData?.map((el, index) => (
        <tr key={`${index}`}>
            {Object.entries(el).map(([key, value], index) => (
                <td key={value + index} className=" p-0.5 text-sm border-none">
                    {key === "id" ? (
                        value
                    ) : (
                        <TableInput
                            input={value}
                            output={(e) => e}
                            className="p-0.5 text-sm bg-black border-none"
                        />
                    )}
                </td>
            ))}
        </tr>
    ));

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className=" text-gray-400 bg-black/40 rounded-xl p-6 shadow-md"
            >
                <div className="flex w-full justify-between">
                    <button
                        onClick={handleReset}
                        className="text-white bg-red-600 px-2 rounded-md hover:text-black hover:bg-red-300"
                    >
                        Reset
                    </button>
                    <h4 className="font-black text-white">{title}</h4>
                    <button
                        type="submit"
                        className="text-white bg-green-600 px-2 rounded-md hover:text-black hover:bg-green-300"
                    >
                        Save
                    </button>
                </div>
                <table className="">
                    <thead className="">
                        <tr>{tableColumnsTitle}</tr>
                    </thead>
                    <tbody>{tableRows}</tbody>
                </table>
            </form>
        </>
    );
};
export default TableGenerator;
