import { Head, Link } from "@inertiajs/react";
import ContentBoxSection from "../Components/ContentBoxSection";
import {
    BsCreditCard2Front,
    BsFileEarmarkImage,
    BsLayoutWtf,
    BsStickies,
} from "react-icons/bs";
import { ReactNode } from "react";
import MasterLayout from "../Layouts/MasterLayout";

const Welcome = () => {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center selection:bg-red-500 selection:text-white">
                <div className="max-w-7xl mx-auto p-6 lg:p-8">
                    <div className="mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:mx-0 xl:grid-cols-3 gap-6 lg:gap-8 auto-rows-auto">
                            <Link as="button" href="sfcolorprint">
                                <ContentBoxSection
                                    icon={<BsStickies />}
                                    title="Druk małoformatowy"
                                    className="scale-100 hover:scale-105"
                                >
                                    A3, A4, A5, A6 itd. (zaproszenia, ulotki,
                                    plakaty A3 i mniejsze, identyfikatory).
                                </ContentBoxSection>
                            </Link>

                            <Link as="button" href="calcbc">
                                <ContentBoxSection
                                    icon={<BsCreditCard2Front />}
                                    title="Wizytówki"
                                    className="scale-100 hover:scale-105"
                                >
                                    Maksymalny rozmiar 95x60 mm.
                                </ContentBoxSection>
                            </Link>
                            <Link as="button" href="latexstickers">
                                <ContentBoxSection
                                    icon={<BsLayoutWtf />}
                                    title="Druk lateksowy - naklejki"
                                    className="scale-100 hover:scale-105"
                                >
                                    {" "}
                                    Wszystkie naklejki nacinane ploterowo, w
                                    arkuszach zbiorczych lub cięte na sztuki.
                                </ContentBoxSection>
                            </Link>

                            <Link as="button" href="calcbc">
                                <ContentBoxSection
                                    icon={<BsFileEarmarkImage />}
                                    title="Druk wielkoformatowy"
                                    className="scale-100 hover:scale-105"
                                >
                                    Plakaty, naklejki wielkoformatowe.
                                </ContentBoxSection>
                            </Link>
                            <Link as="button" href="calcbc">
                                <ContentBoxSection
                                    icon={<BsFileEarmarkImage />}
                                    title="Broszury"
                                    className="scale-100 hover:scale-105"
                                >
                                    Broszury
                                </ContentBoxSection>
                            </Link>
                        </div>
                    </div>

                    {/* <BcCalculator className="w-full mt-8" /> */}
                </div>
            </div>
        </>
    );
};

Welcome.layout = (page: ReactNode | ReactNode[]) => (
    <MasterLayout children={page} />
);

export default Welcome;
