import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import ContentBoxSection from "../Components/ContentBoxSection";
import RadioInputsSection, {
    RadioInputProps,
} from "../Components/RadioInputsSection";
import { Head, Link, usePage } from "@inertiajs/react";
import MasterLayout, { InertiaProps } from "../Layouts/MasterLayout";
import { findValueByThersholds, isNameISOFormat } from "../helpers";
import PageTitle from "../Components/PageTitle";

interface SmallFormatCalculatorProps {
    className: string;
}

type Formats = {
    name: string;
    width: number;
    height: number;
    small_format_sheet_width: number;
    small_format_sheet_height: number;
    small_format_multiplier: number;
    small_format_sheet_set: number;
    large_format_sheet_width: number;
    large_format_sheet_height: number;
    large_format_sheet_area: number;
    large_format_multiplier: number;
    large_format_cut_to_sheet_width: number;
    large_format_cut_to_sheet_height: number;
    large_format_cut_to_sheet_area: number;
    large_format_cut_to_multiplier: number;
    large_format_sheet_set: number;
};

type LargeFormatColorPrintPrices = {
    threshold_from: number;
    threshold_to: number;
    paper: number;
    sticker_foil: number;
    sticker_foil_easy_dot: number;
    blockout: number;
    canvas: number;
};
type PlotterCutPrices = {
    plotter_cut: number;
    plotter_A3_cut: number;
    plotter_A3_max_cut: number;
    removal_foil: number;
    transfer_foil_m2: number;
};

type MinPrices = {
    small_cut_min: number;
    roll_lamin_min: number;
    plotter_cut_min: number;
    laser_cut_min: number;
    cut_min: number;
    large_format_color_print_min: number;
};
type Bindery = {
    cut_1h: number;
    cut_boards_5pcs: number;
    cut_stickers_from_roll_10pcs: number;
    cut_stickers_set: number;
};

interface LatexStickersCalc extends InertiaProps {
    formats: Formats[];
    plotterCutPrices: PlotterCutPrices[];
    largeFormatPrintPrices: LargeFormatColorPrintPrices[];
    minPrices: MinPrices[];
    bindery: Bindery[];
}

const SmallFormatCalculator = ({ className }: SmallFormatCalculatorProps) => {
    const {
        largeFormatPrintPrices,
        plotterCutPrices,
        minPrices,
        formats,
        bindery,
    } = usePage<LatexStickersCalc>().props;
    const { auth } = usePage<InertiaProps>().props;

    const substrates = Object.keys(largeFormatPrintPrices[0]).filter((key) => {
        if (/^sticker/.test(key)) {
            return key as keyof LargeFormatColorPrintPrices;
        }
    });

    const [quantity, setQuantity] = useState(0);
    const [result, setResult] = useState(0);
    const [plotterCut, setPlotterCut] = useState(true);
    const [cut, setCut] = useState(false);
    const [stickerFormatName, setStickerFormatName] = useState(formats[0].name);
    const [stickerMultiplier, setStickerMultiplier] = useState(0);
    const [radioInputsGroup, setRadioInputsGroup] = useState<
        RadioInputProps[] | []
    >([]);
    const [stickersSheetsSetArea, setStickersSheetsSetArea] = useState(0);
    const [substrate, setSubstrate] = useState(substrates[0]);
    const [format, setFormat] = useState(formats[0]);
    const [totalSquareMeters, setTotalSquareMeters] = useState(0);
    const [squareMeterPrice, setSquareMeterPrice] = useState(0);
    //inignition

    useEffect(() => {
        setStickerFormatName(formats[0].name);
        formats.forEach((el, index) => {
            /* Format names are in two versions - first is a real dimensions like 50x50, second is an ISO format name (like A4, B6 itd). If regex test gives FALSE (so is not an ISO) - add " mm" unit to name.
             */
            const fieldName = isNameISOFormat(el.name)
                ? el.name
                : el.name + " mm";

            setRadioInputsGroup((prevState) => [
                ...prevState,
                {
                    id: el.name,
                    value: el.name,
                    className: "",
                    fieldName: fieldName,
                },
            ]);
        });
        return () => {
            setRadioInputsGroup([]);
        };
    }, []);

    useEffect(() => {
        if (substrate !== null) {
            setSquareMeterPrice(
                findValueByThersholds<LargeFormatColorPrintPrices>(
                    largeFormatPrintPrices,
                    "threshold_from",
                    "threshold_to",
                    totalSquareMeters,
                    substrate as keyof LargeFormatColorPrintPrices
                )
            );
        }
    }, [substrate, totalSquareMeters]);

    useEffect(() => {
        if (stickerFormatName) {
            const checkedFormat = formats.filter(
                (el) => el.name === stickerFormatName
            );
            setFormat(checkedFormat[0]);
        }
    }, [stickerFormatName]);

    useEffect(() => {
        if (cut) {
            {
                setStickersSheetsSetArea(
                    format.large_format_cut_to_sheet_area *
                        format.large_format_sheet_set
                );
                setStickerMultiplier(
                    format.large_format_cut_to_multiplier > 0
                        ? format.large_format_multiplier
                        : 1
                );
            }
        } else {
            setStickersSheetsSetArea(
                format.large_format_sheet_area * format.large_format_sheet_set
            );
            setStickerMultiplier(
                format.large_format_multiplier > 0
                    ? format.large_format_multiplier
                    : 1
            );
        }
    }, [format.name, cut]);

    useEffect(() => {
        const sheetsNumber = Math.ceil(quantity / stickerMultiplier);
        const squareMeters = sheetsNumber * stickersSheetsSetArea;
        setTotalSquareMeters(squareMeters);
    }, [quantity, stickersSheetsSetArea, stickerMultiplier]);

    useEffect(() => {
        let plotterCutPrice = 0;
        if (plotterCut)
            plotterCutPrice =
                totalSquareMeters * plotterCutPrices[0].plotter_cut >
                minPrices[0].plotter_cut_min
                    ? totalSquareMeters * plotterCutPrices[0].plotter_cut
                    : minPrices[0].plotter_cut_min;

        const sheetsNumber = Math.ceil(quantity / stickerMultiplier);

        const cutToSheets =
            Math.floor(sheetsNumber / 10) *
            bindery[0].cut_stickers_from_roll_10pcs;

        const cutToPcs = cut ? bindery[0].cut_stickers_set : 0;
        const price = squareMeterPrice * totalSquareMeters;
        const verifyMinimalPrice =
            price >= minPrices[0].large_format_color_print_min
                ? price
                : minPrices[0].large_format_color_print_min;

        if (quantity > 0)
            setResult(
                verifyMinimalPrice + plotterCutPrice + cutToSheets + cutToPcs
            );
    }, [squareMeterPrice, totalSquareMeters, plotterCut, cut]);

    const substratesList = substrates.map((key, index) => {
        const newKey = key.replaceAll("_", " ");
        return (
            <option key={key + index} value={key}>
                {newKey}
            </option>
        );
    });

    return (
        <div className={className}>
            <Head title="Stickers Calc" />
            <PageTitle heavyTxt="Stickers" lightTxt="Calc" />
            <div className=" max-w-xl scale-90">
                <ContentBoxSection>
                    <div className="flex gap-2">
                        <fieldset className="w-[50%] border-2 border-indigo-950 dark:border-white p-3 gap-3 flex justify-center">
                            <legend className="px-2">quantity </legend>
                            <input
                                onChange={(
                                    e: ChangeEvent<HTMLInputElement>
                                ) => {
                                    switch (true) {
                                        case Number(e.currentTarget.value) >
                                            0 &&
                                            Number(e.currentTarget.value) <=
                                                10000:
                                            setQuantity(
                                                Number(e.currentTarget.value)
                                            );
                                            break;
                                        case Number(e.currentTarget.value) <= 0:
                                            setQuantity(1);
                                            break;
                                        case Number(e.currentTarget.value) >
                                            10000:
                                            setQuantity(10000);
                                            break;
                                        default:
                                            setQuantity(1);
                                    }
                                }}
                                className="w-fit p-0 text-center dark:text-black"
                                value={quantity}
                                type="number"
                            />
                        </fieldset>
                        <fieldset className="w-[50%] border-2 border-indigo-950 dark:border-white p-3 gap-3 flex justify-center">
                            <legend className="px-2">substrates </legend>
                            <select
                                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                                    setSubstrate(
                                        e.currentTarget
                                            .value as keyof LargeFormatColorPrintPrices
                                    )
                                }
                            >
                                {substratesList}
                            </select>
                        </fieldset>
                    </div>

                    <RadioInputsSection
                        legend="sticker size (mm / ISO)"
                        output={(e) => {
                            setStickerFormatName(String(e));
                        }}
                        className="border-2 border-indigo-950 dark:border-white p-3 gap-5 flex flex-wrap"
                        defaultCheckedValue={stickerFormatName}
                        radioInputsGroup={radioInputsGroup}
                    />

                    <fieldset className="border-2 border-indigo-950 dark:border-white p-3 gap-3 flex">
                        <legend className="px-2">finishing</legend>{" "}
                        <label htmlFor="cut">cut</label>
                        <input
                            id="cut"
                            type="checkbox"
                            onChange={() => setCut((prevState) => !prevState)}
                        />
                        <label htmlFor="plotter-cut">plotter cut</label>
                        <input
                            id="plotter-cut"
                            type="checkbox"
                            defaultChecked
                            onChange={() =>
                                setPlotterCut((prevState) => !prevState)
                            }
                        />
                    </fieldset>

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

SmallFormatCalculator.layout = (page: ReactNode | ReactNode[]) => (
    <MasterLayout children={page} />
);

export default SmallFormatCalculator;
