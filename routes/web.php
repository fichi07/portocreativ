<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\FrontController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/',[FrontController::class,'index'])->name('front.index');
Route::get('/detail',[FrontController::class, 'detail'])->name('front.detail');
Route::get('/book',[FrontController::class, 'book'])->name('front.book');


Route::middleware('auth')->prefix('dashboard')->name('admin.dashboard.')->group(function(){
    Route::get('/',[DashboardController::class,'index'])->name('index');
    Route::get('project',[ProjectController::class,'index'])->name('project.index');
    Route::get('project/create',[ProjectController::class,'create'])->name('project.create');
});

/*     Route::get('/dashboard', function () {
        return view('dashboard');
    })->middleware(['auth', 'verified'])->name('dashboard');
 */
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
