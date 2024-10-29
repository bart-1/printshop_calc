<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\CalcBcController;
use App\Http\Controllers\CalcLatexSticersController;
use App\Http\Controllers\CalcSmallFormatController;
use App\Http\Controllers\WelcomeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::middleware([
//     'auth:sanctum',
//     config('jetstream.auth_session'),
//     'verified',
// ])->group(function () {
//     Route::get('/dashboard', function () {
//         return Inertia::render('Dashboard');
//     })->name('dashboard');
// });


Route::get('/', function () {
 return redirect('welcome');
});

Route::get('/welcome', [WelcomeController::class, 'index'])->name('welcome');

Route::post('/welcome', [AuthenticatedSessionController::class, 'destroy']
)->name('welcome.logout');
Route::post('/calcbc', [AuthenticatedSessionController::class, 'destroy']
)->name('calcbc.logout');

Route::get('/calcbc', [CalcBcController::class, 'index'])->name('calcbc');

Route::post('/sfcolorprint', [AuthenticatedSessionController::class, 'destroy']
)->name('sfcolorprint.logout');

Route::get('/sfcolorprint', [CalcSmallFormatController::class, 'index'])->name('sfcolorprint');

Route::post('/latexstickers', [AuthenticatedSessionController::class, 'destroy']
)->name('latexstickers.logout');

Route::get('/latexstickers', [CalcLatexSticersController::class, 'index'])->name('latexstickers');



Route::get('/dashboard', function () {
 return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';


