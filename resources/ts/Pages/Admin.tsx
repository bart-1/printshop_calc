import { ReactNode } from "react";
import { Head } from "@inertiajs/react";
import MasterLayout from "../Layouts/MasterLayout";
import PageTitle from "../Components/PageTitle";

interface BcCalculatorProps {
    className: string;
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
