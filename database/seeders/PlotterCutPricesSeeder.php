<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PlotterCutPricesSeeder extends Seeder
{
 /**
  * Run the database seeds.
  */
 public function run(): void
 {
  DB::table('plotter_cut_prices')->insert([
   'created_at'         => now(),
   'updated_at'         => now(),
   'plotter_cut'        => 15,
   'plotter_A3_cut'     => 8,
   'plotter_A3_max_cut' => 16,
   'removal_foil'       => 50,
   'transfer_foil_m2'   => 15,

  ]);

 }
}
