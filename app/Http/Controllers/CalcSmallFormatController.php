<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Application as Application;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CalcSmallFormatController extends Controller
{
 public function index()
 {
  $substratePrices  = DB::table('a4_substrate_prices')->get();
  $colorPrintPrices = DB::table('a4_color_print_prices')->get();
  $foldStaplePrices = DB::table('fold_staple_prices')->get();
  $minPrices        = DB::table('min_prices')->get();
  $laminationPrices = DB::table('lamination_prices')->get();

  return Inertia::render('SmallFormatCalculator', [
   'substratePrices'  => $substratePrices,
   'colorPrintPrices' => $colorPrintPrices,
   'foldStaplePrices' => $foldStaplePrices,
   'minPrices'        => $minPrices,
   'laminationPrices' => $laminationPrices,
   'LaravelVersion'   => Application::VERSION,
   'phpVersion'       => PHP_VERSION,

  ]);

 }
}
