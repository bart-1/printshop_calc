<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FoldStapleLaminBinderyMinPricesSeeder extends Seeder
{
 /**
  * Run the database seeds.
  */
 public function run(): void
 {
  DB::table('fold_staple_prices')->insert([
   'created_at'     => now(),
   'updated_at'     => now(),
   'threshold_from' => 1,
   'threshold_to'   => 100,
   'fold'           => 0.3,
   'staple'         => 0.7,
   'binder_staple'  => 0.9,
  ]);
  DB::table('fold_staple_prices')->insert([
   'created_at'     => now(),
   'updated_at'     => now(),
   'threshold_from' => 101,
   'threshold_to'   => 200,
   'fold'           => 0.25,
   'staple'         => 0.65,
   'binder_staple'  => 0.8,
  ]);
  DB::table('fold_staple_prices')->insert([
   'created_at'     => now(),
   'updated_at'     => now(),
   'threshold_from' => 201,
   'threshold_to'   => 400,
   'fold'           => 0.2,
   'staple'         => 0.5,
   'binder_staple'  => 0.75,
  ]);
  DB::table('fold_staple_prices')->insert([
   'created_at'     => now(),
   'updated_at'     => now(),
   'threshold_from' => 401,
   'threshold_to'   => 1000000,
   'fold'           => 0.15,
   'staple'         => 0.35,
   'binder_staple'  => 0.65,
  ]);

  DB::table('lamination_prices')->insert([
   'created_at'     => now(),
   'updated_at'     => now(),
   'threshold_from' => 1,
   'threshold_to'   => 10,
   'a4_roll_mat'    => 3.5,
   'a4_roll_gloss'  => 3.5,
   'a4_roll_soft'   => 7,
   'a3_100mic'      => 5.5,
   'a3_250mic'      => 8.5,
   'a4_100mic'      => 3,
   'a4_250mic'      => 4.5,
   'a5_100mic'      => 2.5,
   'a5_250mic'      => 4,
   'a6_100mic'      => 2.5,
   'a6_250mic'      => 3.5,
   'bc_200mic'      => 3.5,
  ]);
  DB::table('lamination_prices')->insert([
   'created_at'     => now(),
   'updated_at'     => now(),
   'threshold_from' => 11,
   'threshold_to'   => 50,
   'a4_roll_mat'    => 3,
   'a4_roll_gloss'  => 3,
   'a4_roll_soft'   => 6,
   'a3_100mic'      => 4.5,
   'a3_250mic'      => 7.5,
   'a4_100mic'      => 2.5,
   'a4_250mic'      => 4,
   'a5_100mic'      => 2,
   'a5_250mic'      => 3.5,
   'a6_100mic'      => 2,
   'a6_250mic'      => 3,
   'bc_200mic'      => 3,
  ]);
  DB::table('lamination_prices')->insert([
   'created_at'     => now(),
   'updated_at'     => now(),
   'threshold_from' => 51,
   'threshold_to'   => 100,
   'a4_roll_mat'    => 2.5,
   'a4_roll_gloss'  => 2.5,
   'a4_roll_soft'   => 5,
   'a3_100mic'      => 4,
   'a3_250mic'      => 6.5,
   'a4_100mic'      => 2,
   'a4_250mic'      => 3.5,
   'a5_100mic'      => 1.5,
   'a5_250mic'      => 3,
   'a6_100mic'      => 1.5,
   'a6_250mic'      => 2.5,
   'bc_200mic'      => 2.5,
  ]);
  DB::table('lamination_prices')->insert([
   'created_at'     => now(),
   'updated_at'     => now(),
   'threshold_from' => 101,
   'threshold_to'   => 1000000,
   'a4_roll_mat'    => 1.7,
   'a4_roll_gloss'  => 1.7,
   'a4_roll_soft'   => 3.4,
   'a3_100mic'      => 3.5,
   'a3_250mic'      => 5.5,
   'a4_100mic'      => 1.5,
   'a4_250mic'      => 3,
   'a5_100mic'      => 1.5,
   'a5_250mic'      => 2.5,
   'a6_100mic'      => 1.5,
   'a6_250mic'      => 2,
   'bc_200mic'      => 2,
  ]);
  DB::table('min_prices')->insert([
   'created_at'                   => now(),
   'updated_at'                   => now(),
   'small_cut_min'                => 5,
   'cut_min'                      => 15,
   'cut_boards_min'               => 30,
   'cut_stickers_from_roll_min'   => 15,
   'cut_stickers_min'             => 30,
   'cut_over_a7_min'              => 30,
   'roll_lamin_min'               => 36.9,
   'plotter_cut_min'              => 39,
   'laser_cut_min'                => 60,
   'large_format_color_print_min' => 50,

  ]);
  DB::table('bindery_cut_prices')->insert([
   'created_at'                   => now(),
   'updated_at'                   => now(),
   'cut_1h'                       => 50,
   'cut_boards_5pcs'                => 100,
   'cut_stickers_from_roll_10pcs' => 15,
   'cut_stickers_set'             => 30,

  ]);

 }
}
