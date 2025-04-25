<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Illuminate\Support\Facades\Route;





Route::get('/admin', [AdminController::class, 'index'])->middleware('admin')->name('admin');
Route::post('/admin', [AuthenticatedSessionController::class, 'destroy']
)->name('admin.logout');
Route::post('/admin/submit/prices', [AdminController::class, 'submitPrices']
)->name('admin.submit.prices');
Route::post('/admin/submit/user', [AdminController::class, 'submitUser']
)->name('admin.submit.user');



