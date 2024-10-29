import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import ContentBoxSection from "../Components/ContentBoxSection";
import RadioInputsSection from "../Components/RadioInputsSection";
import { Head, Link, usePage } from "@inertiajs/react";
import MasterLayout, { InertiaProps } from "../Layouts/MasterLayout";
import { discontTester, findElemntInJSONString } from "../helpers";
import PageTitle from "../Components/PageTitle";

interface BcCalculatorProps {
    className: string;
}

export type Print = "bc_40_print" | "bc_44_print";
export type Laminate =
    | "bc_lamin_mat"
    | "bc_lamin_gloss"
    | "bc_lamin_soft"
    | "bc_lamin_none"
    | "bc_lamin_mix";

type PricesBC = {
    id: number;
    // created_at: string | null;
    // updated_at: string | null;
    threshold: number;
    bc_40_print: number;
    bc_44_print: number;
    bc_lamin_mat: number;
    bc_lamin_gloss: number;
    bc_lamin_mix: number;
    bc_lamin_none: number;
    bc_lamin_soft: number;
};
interface Prices extends InertiaProps {
    prices: PricesBC[];
}

const BcCalculator = ({ className }: BcCalculatorProps) => {
    const [quantity, setQuantity] = useState(100);
    const [printSides, setPrintSides] = useState<keyof PricesBC>();
    const [laminate, setLaminate] = useState<keyof PricesBC>();
    const [result, setResult] = useState(0);

    const { prices } = usePage<Prices>().props;
    const { auth } = usePage<InertiaProps>().props;

    useEffect(() => {
        setPrintSides("bc_40_print");
        setLaminate("bc_lamin_none");
    }, []);

    useEffect(() => {
        const quantityFilter = prices.filter((el) => el.threshold === quantity);
        const list =
            auth.user !== null ? auth.user.discount_products_list : null;
        const discount = auth.user !== null ? auth.user.discount : null;

        if (printSides && laminate) {
            setResult(
                quantityFilter[0][printSides] *
                    discontTester(printSides, list, discount) +
                    quantityFilter[0][laminate] *
                        discontTester(laminate, list, discount)
            );
        }
    }, [quantity, printSides, laminate]);

    return (
        <div className={className}>
            <Head title="BC Calc" />
            <PageTitle heavyTxt="BCards" lightTxt="Calc" />

            <div className="scale-90">
                <ContentBoxSection>
                    <fieldset className="w-[200px] border-2 border-indigo-950 dark:border-gray-400 p-3 gap-3 flex">
                        <legend className="px-2">quantity </legend>

                        <input
                            className="w-[70%]"
                            id="bc-qantity"
                            type="range"
                            min={100}
                            max={1000}
                            step={100}
                            value={quantity}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setQuantity(Number(e.currentTarget.value))
                            }
                        />
                        <input
                            className="w-[30%] p-0 text-center dark:text-black"
                            value={quantity}
                            disabled
                        />
                    </fieldset>

                    <RadioInputsSection
                        legend="print"
                        output={(e) => setPrintSides(e as keyof PricesBC)}
                        className="border-2 border-indigo-950 dark:border-gray-400 p-3 gap-3 flex"
                        defaultCheckedValue="bc_40_print"
                        radioInputsGroup={[
                            {
                                value: "bc_40_print",
                                id: "40",
                                className: "",
                                fieldName: "4+0",
                            },
                            {
                                value: "bc_44_print",
                                id: "44",
                                className: "",
                                fieldName: "4+4",
                            },
                        ]}
                    />
                    <RadioInputsSection
                        legend="foil laminate 1+1"
                        output={(e) => setLaminate(e as keyof PricesBC)}
                        className="border-2 border-indigo-950 dark:border-gray-400 p-3 gap-3 flex"
                        defaultCheckedValue="bc_lamin_none"
                        radioInputsGroup={[
                            {
                                value: "bc_lamin_none",
                                id: "mone",
                                className: "",
                                fieldName: "none",
                            },
                            {
                                value: "bc_lamin_mat",
                                id: "mat",
                                className: "",
                                fieldName: "mat",
                            },
                            {
                                value: "bc_lamin_gloss",
                                id: "gloss",
                                className: "",
                                fieldName: "gloss",
                            },
                            {
                                value: "bc_lamin_mix",
                                id: "gloss",
                                className: "",
                                fieldName: "mat+gloss",
                            },
                            {
                                value: "bc_lamin_soft",
                                id: "soft",
                                className: "",
                                fieldName: "soft touch",
                            },
                        ]}
                    />

                    <ContentBoxSection className="mt-4">
                        <div className="text-4xl">
                            PLN Brutto: {parseFloat(String(result)).toFixed(2)}
                            ,-{" "}
                        </div>
                        <div className="text-xl">
                            PLN Netto:{" "}
                            {parseFloat(String(result / 1.23)).toFixed(2)},-{" "}
                        </div>
                        {auth.user !== null && auth.user.discount > 0 ? (
                            <div className=" right-0 ">
                                Twój rabat STAŁEGO KLIENTA został uwzględniony{" "}
                                {auth.user.discount}%
                            </div>
                        ) : (
                            ""
                        )}
                    </ContentBoxSection>
                </ContentBoxSection>
            </div>
        </div>
    );
};

BcCalculator.layout = (page: ReactNode | ReactNode[]) => (
    <MasterLayout children={page} />
);

export default BcCalculator;
