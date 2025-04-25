<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AdminController extends Controller
{
 public function index()
 {
  $substratePrices  = DB::table('a4_substrate_prices')->select('id', 'name', 'price')->get();
  $colorPrintPrices = DB::table('a4_color_print_prices')->get();
  $foldStaplePrices = DB::table('fold_staple_prices')->get();
  $minPrices        = DB::table('min_prices')->get();
  $laminationPrices = DB::table('lamination_prices')->get();
  $users            = DB::table('users')->select('id', 'name', 'email', 'discount')->get();

  return Inertia::render('Admin', [
   'substratePrices'  => $substratePrices,
   'colorPrintPrices' => $colorPrintPrices,
   'foldStaplePrices' => $foldStaplePrices,
   'minPrices'        => $minPrices,
   'laminationPrices' => $laminationPrices,
   'users'            => $users,
   'LaravelVersion'   => Application::VERSION,
   'phpVersion'       => PHP_VERSION,

  ]);

 }
}
