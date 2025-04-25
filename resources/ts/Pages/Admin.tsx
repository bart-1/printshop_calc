import { ReactNode } from "react";
import { Head, usePage } from "@inertiajs/react";
import MasterLayout from "../Layouts/MasterLayout";
import PageTitle from "../Components/PageTitle";
import TableGenerator from "../Components/TableGenerator";
import { SubstratePrices } from "../inertiaPropsTypes";

interface BcCalculatorProps {
    className: string;
}

const Admin = ({ className }: BcCalculatorProps) => {
    const { substratePrices } = usePage().props;

    console.log(substratePrices)
    return (
        <div className={className}>
            <Head title="Admin" />
            <PageTitle heavyTxt="Admin" lightTxt="Calc" />
            <TableGenerator
                data={substratePrices as SubstratePrices[]}
                title="Substrates"
            />
        </div>
    );
};

Admin.layout = (page: ReactNode | ReactNode[]) => (
    <MasterLayout children={page} />
);

export default Admin;
