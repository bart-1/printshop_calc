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
  Schema::create('dimensions_with_multipliers', function (Blueprint $table) {
   $table->id();
   $table->timestamps();
   $table->string('name');
   $table->integer('width');
   $table->integer('height');
   $table->integer('small_format_sheet_width');
   $table->integer('small_format_sheet_height');
   $table->integer('small_format_multiplier');
   $table->integer('small_format_sheet_set');
   $table->integer('large_format_sheet_width');
   $table->integer('large_format_sheet_height');
   $table->integer('large_format_sheet_area');
   $table->integer('large_format_multiplier');
   $table->integer('large_format_cut_to_sheet_width');
   $table->integer('large_format_cut_to_sheet_height');
   $table->integer('large_format_cut_to_sheet_area');
   $table->integer('large_format_cut_to_multiplier');
   $table->integer('large_format_sheet_set');

  });

 }

 /**
  * Reverse the migrations.
  */
 public function down(): void
 {
  Schema::dropIfExists('dimensions_with_multipliers');

 }
};
