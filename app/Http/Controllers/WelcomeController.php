<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Application as Application;
use Inertia\Inertia;

class WelcomeController extends Controller
{

 public function index()
 {
  return Inertia::render('Welcome', [
   'LaravelVersion' => Application::VERSION,
   'phpVersion'     => PHP_VERSION,

  ]);
 }
}
