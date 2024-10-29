<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class A4PrintAndPapersPricesSeeder extends Seeder
{
 /**
  * Run the database seeds.
  */
 public function run(): void
 {
  DB::table('a4_substrate_prices')->insert([
   'created_at' => now(),
   'updated_at' => now(),
   'name'       => "80",
   'price'      => 0,
  ]);
  DB::table('a4_substrate_prices')->insert([
   'created_at' => now(),
   'updated_at' => now(),
   'name'       => "100",
   'price'      => 0.25,
  ]);
  DB::table('a4_substrate_prices')->insert([
   'created_at' => now(),
   'updated_at' => now(),
   'name'       => "120",
   'price'      => 0.45,
  ]);
  DB::table('a4_substrate_prices')->insert([
   'created_at' => now(),
   'updated_at' => now(),
   'name'       => "160",
   'price'      => 0.51,
  ]);
  DB::table('a4_substrate_prices')->insert([
   'created_at' => now(),
   'updated_at' => now(),
   'name'       => "200",
   'price'      => 0.57,
  ]);
  DB::table('a4_substrate_prices')->insert([
   'created_at' => now(),
   'updated_at' => now(),
   'name'       => "250",
   'price'      => 0.69,
  ]);
  DB::table('a4_substrate_prices')->insert([
   'created_at' => now(),
   'updated_at' => now(),
   'name'       => "300",
   'price'      => 0.82,
  ]);
  DB::table('a4_substrate_prices')->insert([
   'created_at' => now(),
   'updated_at' => now(),
   'name'       => "350",
   'price'      => 0.94,
  ]);
  DB::table('a4_substrate_prices')->insert([
   'created_at' => now(),
   'updated_at' => now(),
   'name'       => "400",
   'price'      => 1.04,
  ]);
  DB::table('a4_substrate_prices')->insert([
   'created_at' => now(),
   'updated_at' => now(),
   'name'       => "foto",
   'price'      => 1.9,
  ]);
  DB::table('a4_substrate_prices')->insert([
   'created_at' => now(),
   'updated_at' => now(),
   'name'       => "250n",
   'price'      => 1,
  ]);
  DB::table('a4_substrate_prices')->insert([
   'created_at' => now(),
   'updated_at' => now(),
   'name'       => "decorative",
   'price'      => 1.8,
  ]);
  DB::table('a4_substrate_prices')->insert([
   'created_at' => now(),
   'updated_at' => now(),
   'name'       => "self_adhesive_paper",
   'price'      => 1.9,
  ]);
  DB::table('a4_substrate_prices')->insert([
   'created_at' => now(),
   'updated_at' => now(),
   'name'       => "self_adhesive_foil",
   'price'      => 3.9,
  ]);

  DB::table('a4_color_print_prices')->insert([
   'created_at'     => now(),
   'updated_at'     => now(),
   'threshold_from' => 1,
   'threshold_to'   => 19,
   'price'          => 2.95,
  ]);
  DB::table('a4_color_print_prices')->insert([
   'created_at'     => now(),
   'updated_at'     => now(),
   'threshold_from' => 20,
   'threshold_to'   => 49,
   'price'          => 2.46,
  ]);
  DB::table('a4_color_print_prices')->insert([
   'created_at'     => now(),
   'updated_at'     => now(),
   'threshold_from' => 50,
   'threshold_to'   => 149,
   'price'          => 1.95,
  ]);
  DB::table('a4_color_print_prices')->insert([
   'created_at'     => now(),
   'updated_at'     => now(),
   'threshold_from' => 150,
   'threshold_to'   => 249,
   'price'          => 1.75,
  ]);
  DB::table('a4_color_print_prices')->insert([
   'created_at'     => now(),
   'updated_at'     => now(),
   'threshold_from' => 250,
   'threshold_to'   => 499,
   'price'          => 1.42,
  ]);
  DB::table('a4_color_print_prices')->insert([
   'created_at'     => now(),
   'updated_at'     => now(),
   'threshold_from' => 500,
   'threshold_to'   => 999,
   'price'          => 1.11,
  ]);
  DB::table('a4_color_print_prices')->insert([
   'created_at'     => now(),
   'updated_at'     => now(),
   'threshold_from' => 1000,
   'threshold_to'   => 1499,
   'price'          => 0.92,
  ]);
  DB::table('a4_color_print_prices')->insert([
   'created_at'     => now(),
   'updated_at'     => now(),
   'threshold_from' => 1500,
   'threshold_to'   => 0,
   'price'          => 0.8,
  ]);

 }
}
