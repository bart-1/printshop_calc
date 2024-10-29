import { Head } from "@inertiajs/react";
import MasterLayout from "../Layouts/MasterLayout";

const header = (
    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        Dashboard
    </h2>
);

interface DashboardProps {
    auth: { user: { name: string; email: string } };
}
export default function Dashboard({ auth }: DashboardProps) {
    return (
        <MasterLayout>
            <Head title="Dashboard" />

            {/* <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div> */}
        </MasterLayout>
    );
}
