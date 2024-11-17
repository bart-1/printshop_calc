import { PageProps } from "@inertiajs/inertia";

export interface AuthProps extends PageProps {
    auth: {
        user: {
            id: number;
            name: string;
            email: string;
            role_id: number;
            discount: number;
            discount_products_list: string;
            created_at: Date;
            updated_at: Date;
            email_verified_at: string;
        };
    };
    version: string;
}

export type PricesBC = {
    id: number;
    threshold: number;
    bc_40_print: number;
    bc_44_print: number;
    bc_lamin_mat: number;
    bc_lamin_gloss: number;
    bc_lamin_mix: number;
    bc_lamin_none: number;
    bc_lamin_soft: number;
};

export type Formats = {
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

export type LargeFormatColorPrintPrices = {
    threshold_from: number;
    threshold_to: number;
    paper: number;
    sticker_foil: number;
    sticker_foil_easy_dot: number;
    blockout: number;
    canvas: number;
};
export type PlotterCutPrices = {
    plotter_cut: number;
    plotter_A3_cut: number;
    plotter_A3_max_cut: number;
    removal_foil: number;
    transfer_foil_m2: number;
};

export type MinPrices = {
    small_cut_min: number;
    roll_lamin_min: number;
    plotter_cut_min: number;
    laser_cut_min: number;
    cut_min: number;
    large_format_color_print_min: number;
};

export type Bindery = {
    cut_1h: number;
    cut_boards_5pcs: number;
    cut_stickers_from_roll_10pcs: number;
    cut_stickers_set: number;
};

export type SubstratePrices = {
    name: string;
    price: number;
};
export type ColorPrintPrices = {
    threshold_from: number;
    threshold_to: number;
    price: number;
};
export type FoldStaplePrices = {
    threshold_from: number;
    threshold_to: number;
    staple: number;
    fold: number;
    binder_staple: number;
};

export type LaminationPrices = {
    threshold_from: number;
    threshold_to: number;
    a4_roll_mat: number;
    a4_roll_gloss: number;
    a4_roll_soft: number;
    a3_100mic: number;
    a3_250mic: number;
    a4_100mic: number;
    a4_250mic: number;
    a5_100mic: number;
    a5_250mic: number;
    a6_100mic: number;
    a6_250mic: number;
    bc_200mic: number;
};
