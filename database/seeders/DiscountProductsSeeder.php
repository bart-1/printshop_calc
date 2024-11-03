<?php

namespace Database\Seeders;

use App\Models\DiscountProduct;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DiscountProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
      DiscountProduct::create(['name' => 'guest']);

DiscountProduct::create(['name' => 'a4_black_min']);
DiscountProduct::create(['name' => 'a4_black_print']);
DiscountProduct::create(['name' => 'a4_color_print']);
DiscountProduct::create(['name' => 'a4_color_gray_print']);
DiscountProduct::create(['name' => 'a4_color_plot_cut']);
DiscountProduct::create(['name' => 'cad_black_print']);
DiscountProduct::create(['name' => 'cad_color_print']);
DiscountProduct::create(['name' => 'cad_black_copy']);
DiscountProduct::create(['name' => 'cad_color_copy']);
DiscountProduct::create(['name' => 'cad_scan']);
DiscountProduct::create(['name' => 'cad_fold']);
DiscountProduct::create(['name' => 'bc_44_print']);
DiscountProduct::create(['name' => 'bc_40_print']);
DiscountProduct::create(['name' => 'bc_lamin_mat']);
DiscountProduct::create(['name' => 'bc_lamin_gloss']);
DiscountProduct::create(['name' => 'bc_lamin_mix']);
DiscountProduct::create(['name' => 'bc_lamin_soft']);
DiscountProduct::create(['name' => 'lf_print_min']);
DiscountProduct::create(['name' => 'lf_paper_print']);
DiscountProduct::create(['name' => 'lf_foil_print']);
DiscountProduct::create(['name' => 'lf_foil_ed_print']);
DiscountProduct::create(['name' => 'lf_block_print']);
DiscountProduct::create(['name' => 'lf_canvas_print']);
DiscountProduct::create(['name' => 'lf_plot_cut__min']);
DiscountProduct::create(['name' => 'lf_plot_cut']);
DiscountProduct::create(['name' => 'lf_non_print_plot_cut']);
DiscountProduct::create(['name' => 'lf_transfer_foil']);
DiscountProduct::create(['name' => 'roll_lamin_min']);
DiscountProduct::create(['name' => 'lf_roll_lamin']);
DiscountProduct::create(['name' => 'a4_roll_lamin']);
DiscountProduct::create(['name' => 'a4_roll_lamin_st']);
DiscountProduct::create(['name' => 'fold']);
DiscountProduct::create(['name' => 'staple']);
DiscountProduct::create(['name' => 'staple_binder']);
DiscountProduct::create(['name' => 'cut_min']);
DiscountProduct::create(['name' => 'cut']);
DiscountProduct::create(['name' => 'holes']);
DiscountProduct::create(['name' => 'rounded_corners']);
DiscountProduct::create(['name' => 'binding_metal']);
DiscountProduct::create(['name' => 'binding_plastic']);
DiscountProduct::create(['name' => 'binding_crystal']);
DiscountProduct::create(['name' => 'photo_canvas']);
DiscountProduct::create(['name' => 'rollup_PS']);
DiscountProduct::create(['name' => 'rollup_PST']);
}
}
