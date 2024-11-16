<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Illuminate\Support\Facades\Route;





Route::get('/admin', [AdminController::class, 'index'])->middleware('admin')->name('admin');
Route::post('/admin', [AuthenticatedSessionController::class, 'destroy']
)->name('admin.logout');



