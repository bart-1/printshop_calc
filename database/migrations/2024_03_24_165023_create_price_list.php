<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
 /**
  * Run the migrations.
  */
 public function up(): void
 {
  Schema::create('price_list', function (Blueprint $table) {
   $table->id();
   $table->timestamps();

   //DTP
   $table->integer('dtp_h_price');

   //A4 printing
   $table->integer('a4_black_print_thresholds');
   $table->integer('a4_black_print_prices');
   $table->integer('a4_color_print_thresholds');
   $table->integer('a4_color_print_prices');
   $table->integer('a4_color_gray_print_prices');
   $table->integer('a4_color_plot_cut_price');

   //color copy
   $table->integer('a4_color_copy_thresholds');
   $table->integer('a4_color_copy_prices');

   //CAD
   $table->integer('cad_black_print_thresholds');
   $table->integer('cad_black_print_prices');
   $table->integer('cad_color_print_thresholds');
   $table->integer('cad_color_print_prices');
   $table->integer('cad_fold_prices');

   //scan

   $table->integer('cad_scan_thresholds');
   $table->integer('cad_scan_price');
   $table->integer('a4_scan_thresholds');
   $table->integer('a4_scan_price');
   $table->integer('a4_scan_hand_price');
   $table->integer('cd_archive_price');

   //boards

   //binding
   $table->integer('binding_discount_thresholds');
   $table->integer('binding_a3_conv_factor');
   $table->integer('binding_cad_conv_factor');
   $table->integer('binding_size_thresholds');
   $table->integer('binding_metal_prices');
   $table->integer('binding_plastic_prices');
   $table->integer('binding_crystal_prices');
   $table->integer('binding_glued_min_price');
   $table->integer('binding_glued_prices');
   $table->integer('binding_diploma_prices');
   $table->integer('binding_diploma_text_prices');
   $table->integer('binding_calendar_price');

   //mugs
   $table->integer('mug_thresholds');
   $table->integer('mug_prices');
   $table->integer('mug_xl_prices');
   $table->integer('mug_magic_prices');
   $table->integer('mug_color_prices');
   $table->integer('mug_latte_prices');
   $table->integer('mug_mini_prices');
   $table->integer('mug_latte_xl_prices');

   //rollups
   $table->integer('stand_thresholds');
   $table->integer('rollup_pst_85_prices');
   $table->integer('rollup_ps_85_prices');
   $table->integer('rollup_pst_100_prices');
   $table->integer('rollup_ps_100_prices');
   $table->integer('rollup_pst_120_prices');
   $table->integer('rollup_ps_120_prices');
   $table->integer('stand_spider_prices');

  });
  Schema::create('bc_prices', function (Blueprint $table) {
   $table->id();
   $table->timestamps();
   $table->integer('threshold');
   $table->integer('bc_40_print');
   $table->integer('bc_44_print');
   $table->integer('bc_lamin_mat');
   $table->integer('bc_lamin_gloss');
   $table->integer('bc_lamin_mix');
   $table->integer('bc_lamin_soft');
   $table->integer('bc_lamin_none');

  });
  Schema::create('a4_substrate_prices', function (Blueprint $table) {
   $table->id();
   $table->timestamps();
   $table->string('name');
   $table->integer('price');

  });
  Schema::create('a4_color_print_prices', function (Blueprint $table) {
   $table->id();
   $table->timestamps();
   $table->integer('threshold_from');
   $table->integer('threshold_to');
   $table->integer('price');

  });
  Schema::create('fold_staple_prices', function (Blueprint $table) {
   $table->id();
   $table->timestamps();
   $table->integer('threshold_from');
   $table->integer('threshold_to');
   $table->integer('fold');
   $table->integer('staple');
   $table->integer('binder_staple');

  });
  Schema::create('plotter_cut_prices', function (Blueprint $table) {
   $table->id();
   $table->timestamps();
   $table->integer('plotter_cut');
   $table->integer('plotter_A3_cut');
   $table->integer('plotter_A3_max_cut');
   $table->integer('removal_foil');
   $table->integer('transfer_foil_m2');

  });
  Schema::create('bindery_cut_prices', function (Blueprint $table) {
   $table->id();
   $table->timestamps();
   $table->integer('cut_1h');
   $table->integer('cut_boards_5pcs');
   $table->integer('cut_stickers_from_roll_10pcs');
   $table->integer('cut_stickers_set');

  });
  Schema::create('min_prices', function (Blueprint $table) {
   $table->id();
   $table->timestamps();
   $table->integer('small_cut_min');
   $table->integer('cut_min');
   $table->integer('cut_boards_min');
   $table->integer('cut_stickers_from_roll_min');
   $table->integer('cut_stickers_min');
   $table->integer('cut_over_a7_min');
   $table->integer('roll_lamin_min');
   $table->integer('plotter_cut_min');
   $table->integer('laser_cut_min');
   $table->integer('large_format_color_print_min');

  });
  Schema::create('lamination_prices', function (Blueprint $table) {
   $table->id();
   $table->timestamps();
   $table->integer('threshold_from');
   $table->integer('threshold_to');

   $table->integer('a4_roll_mat');
   $table->integer('a4_roll_gloss');
   $table->integer('a4_roll_soft');
   $table->integer('a3_100mic');
   $table->integer('a3_250mic');
   $table->integer('a4_100mic');
   $table->integer('a4_250mic');
   $table->integer('a5_100mic');
   $table->integer('a5_250mic');
   $table->integer('a6_100mic');
   $table->integer('a6_250mic');
   $table->integer('bc_200mic');

  });
  Schema::create('large_format_color_print_prices', function (Blueprint $table) {
   $table->id();
   $table->timestamps();
   $table->integer('threshold_from');
   $table->integer('threshold_to');
   $table->integer('paper');
   $table->integer('sticker_foil');
   $table->integer('sticker_foil_easy_dot');
   $table->integer('blockout');
   $table->integer('canvas');

  });
  Schema::create('boards_prices', function (Blueprint $table) {
   $table->id();
   $table->timestamps();
   $table->integer('pcv3');
   $table->integer('pcv5');
   $table->integer('magnetic');
   $table->integer('kappa5');
   $table->integer('dibond');
   $table->integer('second_side');

  });
 }

 /**
  * Reverse the migrations.
  */
 public function down(): void
 {
  Schema::dropIfExists('price_list');
  Schema::dropIfExists('bc_prices');
  Schema::dropIfExists('a4_color_print_prices');
  Schema::dropIfExists('a4_print_prices');
  Schema::dropIfExists('a4_substrate_prices');
  Schema::dropIfExists('min_prices');
  Schema::dropIfExists('plotter_cut_prices');
  Schema::dropIfExists('bindery_cut_prices');
  Schema::dropIfExists('fold_staple_prices');
  Schema::dropIfExists('lamination_prices');
  Schema::dropIfExists('large_format_color_print_prices');
  Schema::dropIfExists('boards_prices');
 }
};
