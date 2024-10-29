<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Application as Application;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CalcLatexSticersController extends Controller
{
 public function index()
 {
  $largeFormatPrintPrices = DB::table('large_format_color_print_prices')->get();
  $ploterCutPrices        = DB::table('plotter_cut_prices')->get();
  $minPrices              = DB::table('min_prices')->get();
  $formats                = DB::table('dimensions_with_multipliers')->get();
  $bindery                = DB::table('bindery_cut_prices')->get();

  return Inertia::render('LatexStickersCalculator', [
   'largeFormatPrintPrices' => $largeFormatPrintPrices,
   'plotterCutPrices'       => $ploterCutPrices,
   'minPrices'              => $minPrices,
   'formats'                => $formats,
   'bindery'                => $bindery,
   'LaravelVersion'         => Application::VERSION,
   'phpVersion'             => PHP_VERSION,

  ]);

 }
}
