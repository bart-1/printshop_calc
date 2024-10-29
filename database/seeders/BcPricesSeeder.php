<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BcPricesSeeder extends Seeder
{
 /**
  * Run the database seeds.
  */
 public function run(): void
 {
  DB::table('bc_prices')->insert([
   'created_at'=> now(),
   'updated_at'=>now(),
    'threshold' => 100,
   'bc_40_print'        => 59,
   'bc_44_print'        => 79,
   'bc_lamin_none' => 0,
   'bc_lamin_mat'       => 30,
   'bc_lamin_gloss'     => 30,
   'bc_lamin_mix'       => 45,
   'bc_lamin_soft'      => 50]);
  DB::table('bc_prices')->insert([
   'created_at'=> now(),
   'updated_at'=>now(),
    'threshold' => 200,
   'bc_40_print'        => 98,
   'bc_44_print'        => 138,
   'bc_lamin_none' => 0,
   'bc_lamin_mat'       => 44,
   'bc_lamin_gloss'     => 44,
   'bc_lamin_mix'       => 55,
   'bc_lamin_soft'      => 86]);
  DB::table('bc_prices')->insert([
   'created_at'=> now(),
   'updated_at'=>now(),
    'threshold' => 300,
   'bc_40_print'        => 135,
   'bc_44_print'        => 192,
   'bc_lamin_none' => 0,
   'bc_lamin_mat'       => 53,
   'bc_lamin_gloss'     => 53,
   'bc_lamin_mix'       => 67,
   'bc_lamin_soft'      => 122]);
  DB::table('bc_prices')->insert([
   'created_at'=> now(),
   'updated_at'=>now(),
    'threshold' => 400,
   'bc_40_print'        => 164,
   'bc_44_print'        => 236,
   'bc_lamin_none' => 0,
   'bc_lamin_mat'       => 70,
   'bc_lamin_gloss'     => 70,
   'bc_lamin_mix'       => 89,
   'bc_lamin_soft'      => 158]);
  DB::table('bc_prices')->insert([
   'created_at'=> now(),
   'updated_at'=>now(),
    'threshold' => 500,
   'bc_40_print'        => 185,
   'bc_44_print'        => 270,
   'bc_lamin_none' => 0,
   'bc_lamin_mat'       => 85,
   'bc_lamin_gloss'     => 85,
   'bc_lamin_mix'       => 109,
   'bc_lamin_soft'      => 194]);
  DB::table('bc_prices')->insert([
   'created_at'=> now(),
   'updated_at'=>now(),
    'threshold' => 600,
   'bc_40_print'        => 204,
   'bc_44_print'        => 294,
   'bc_lamin_none' => 0,
   'bc_lamin_mat'       => 93,
   'bc_lamin_gloss'     => 93,
   'bc_lamin_mix'       => 119,
   'bc_lamin_soft'      => 205]);
  DB::table('bc_prices')->insert([
   'created_at'=> now(),
   'updated_at'=>now(),
    'threshold' => 700,
   'bc_40_print'        => 231,
   'bc_44_print'        => 328,
   'bc_lamin_none' => 0,
   'bc_lamin_mat'       => 102,
   'bc_lamin_gloss'     => 102,
   'bc_lamin_mix'       => 131,
   'bc_lamin_soft'      => 215]);
  DB::table('bc_prices')->insert([
   'created_at'=> now(),
   'updated_at'=>now(),
    'threshold' => 800,
   'bc_40_print'        => 264,
   'bc_44_print'        => 360,
   'bc_lamin_none' => 0,
   'bc_lamin_mat'       => 106,
   'bc_lamin_gloss'     => 106,
   'bc_lamin_mix'       => 136,
   'bc_lamin_soft'      => 238]);
  DB::table('bc_prices')->insert([
   'created_at'=> now(),
   'updated_at'=>now(),
    'threshold' => 900,
   'bc_40_print'        => 288,
   'bc_44_print'        => 387,
   'bc_lamin_none' => 0,
   'bc_lamin_mat'       => 109,
   'bc_lamin_gloss'     => 109,
   'bc_lamin_mix'       => 140,
   'bc_lamin_soft'      => 271]);
  DB::table('bc_prices')->insert([
   'created_at'=> now(),
   'updated_at'=>now(),
    'threshold' => 1000,
   'bc_40_print'        => 320,
   'bc_44_print'        => 420,
   'bc_lamin_none' => 0,
   'bc_lamin_mat'       => 111,
   'bc_lamin_gloss'     => 111,
   'bc_lamin_mix'       => 143,
   'bc_lamin_soft'      => 299]);
 }
}
