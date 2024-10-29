<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Foundation\Application as Application;

class CalcBcController extends Controller
{

 public $printSides;
 public $quantity;
 public $laminate;
 public $bcPrintPrice;
 public $bcLaminatePrice;

//  public function init(Request $request)
//  {
// $this->printSides = $request->input('printSides');
// $this->quantity = $request->input('quantity');
// $this->laminate = $request->input('laminate');

// $this->bcPrintPrice = DB::table('price_list')->select('bc_print_price')->where('bc_tresholds', '>=', $this->quantity)->first();
// $this->bcLaminatePrice = DB::table('price_list')->select('bc_laminate_price')->where(function (Builder $query) {$query->where('bc_tresholds', '>=', $this->quantity)->where('bc_laminate')})->first();

//  }

 public function index()
 {
  $prices = DB::table('bc_prices')->get();

  return Inertia::render('BcCalculator', [
   'prices'         => $prices,
   'LaravelVersion' => Application::VERSION,
   'phpVersion'     => PHP_VERSION,

  ]);

 }

}

// $request->validate([
//  // ...

//  'role_id' => ['required', Rule::in(Role::ROLE_OPERATOR, Role::ROLE_USER)],
// ]);
