<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LargeFormatPricesSeeder extends Seeder
{
 /**
  * Run the database seeds.
  */
 public function run(): void
 {
  DB::table('large_format_color_print_prices')->insert([
   'created_at'     => now(),
   'updated_at'     => now(),
   'threshold_from' => 0.01,
   'threshold_to'   => 5,
   'paper'    => 75,
   'sticker_foil'  => 75,
   'sticker_foil_easy_dot'   => 89,
   'blockout'      => 97,
   'canvas'      => 130,

  ]);
  DB::table('large_format_color_print_prices')->insert([
   'created_at'     => now(),
   'updated_at'     => now(),
   'threshold_from' => 5.01,
   'threshold_to'   => 20,
   'paper'    => 67,
   'sticker_foil'  => 64,
   'sticker_foil_easy_dot'   => 75,
   'blockout'      => 73,
   'canvas'      => 110,

  ]);
  DB::table('large_format_color_print_prices')->insert([
   'created_at'     => now(),
   'updated_at'     => now(),
   'threshold_from' => 20.01,
   'threshold_to'   => 1000,
   'paper'    => 54,
   'sticker_foil'  => 52,
   'sticker_foil_easy_dot'   => 63,
   'blockout'      => 60,
   'canvas'      => 80,

  ]);

 }
}
