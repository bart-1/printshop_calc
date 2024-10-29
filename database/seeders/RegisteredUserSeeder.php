<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class RegisteredUserSeeder extends Seeder
{
 /**
  * Run the database seeds.
  */
 public function run(): void
 {
  DB::table('users')->insert([
   'name'                   => "bfagencja",
   'email'                  => "bf@test.pl",
   'password'               => Hash::make('test'),
    'role_id'           => 3, // User
   'discount'               => 10,
   'discount_products_list' => "[
'a4_black_min',
'a4_black_print',
'a4_color_print',
'a4_color_gray_print',
'a4_color_plot_cut',
'cad_black_print',
'cad_color_print',
'cad_black_copy',
'cad_color_copy',
'cad_scan',
'cad_fold',
'bc_44_print',
'bc_40_print',
'bc_lamin_mat',
'bc_lamin_gloss',
'bc_lamin_mix',
'bc_lamin_soft',
'lf_print_min',
'lf_paper_print',
'lf_foil_print',
'lf_foil_ed_print',
'lf_block_print',
'lf_canvas_print',
'lf_plot_cut__min',
'lf_plot_cut',
'lf_non_print_plot_cut',
'lf_transfer_foil',
'roll_lamin_min',
'lf_roll_lamin',
'a4_roll_lamin',
'a4_roll_lamin_st',
'fold',
'staple',
'staple_binder',
'cut_min',
'cut',
'holes',
'rounded_corners',
'binding_metal',
'binding_plastic',
'binding_crystal']
",

  ]);



 }
}
