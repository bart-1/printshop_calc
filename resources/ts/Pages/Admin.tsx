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

const Admin = ({ className }: BcCalculatorProps) => {
    return (
        <div className={className}>
            <Head title="Admin" />
            <PageTitle heavyTxt="Admin" lightTxt="Calc" />

        </div>
    );
};

Admin.layout = (page: ReactNode | ReactNode[]) => (
    <MasterLayout children={page} />
);

export default Admin;
