<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\FrontController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ProjectToolController;
use App\Http\Controllers\ProjectOrderController;
use App\Http\Controllers\ProjectScreenshotController;
use App\Http\Controllers\TestimonialController;
use App\Http\Controllers\ToolController;
use App\Models\Tool;
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

Route::get('/testimony',[TestimonialController::class, 'create'])->name('front.testimony');
 Route::post('/testimony/save', [TestimonialController::class, 'store'])->name('front.testimony.store');

Route::get('/book',[FrontController::class, 'book'])->name('front.book');
 Route::post('/book/save', [FrontController::class, 'store'])->name('front.book.store');

Route::get('/detail/{project:slug}', [FrontController::class, 'detail'])->name('front.detail');



Route::middleware('auth')->prefix('dashboard')->name('admin.dashboard.')->group(function(){
    Route::get('/',[DashboardController::class,'index'])->name('index');

    Route::resource('project', ProjectController::class);
    Route::put('project/{project}/restore', [ProjectController::class,'restore'])->name('project.restore');

    Route::resource('tool', ToolController::class);
    Route::put('tool/{tool}/restore', [ToolController::class,'restore'])->name('tool.restore');

    Route::resource('project_order', ProjectOrderController::class);
    Route::resource('testimony', TestimonialController::class);

  /*   Route::delete('/project-tools/{id}', [ProjectToolController::class, 'destroy'])->name('project-tools.destroy'); */
    Route::resource('projecttool', ProjectToolController::class);
    Route::get('/projecttool/create/{project}', [ProjectToolController::class, 'create'])->name('projecttol.assign.tool');
    Route::post('/projecttool/create/save/{project}', [ProjectToolController::class, 'store'])->name('projecttool.assign.tool.store');
    
    Route::resource('screenshoot', ProjectScreenshotController::class);
  


    Route::get('/screenshoot/create/{project}', [ProjectScreenshotController::class, 'create'])->name('projectscreenshot.create');
     Route::post('/screenshoot/create/save/{project}', [ProjectScreenshotController::class, 'store'])->name('projectscreenshot.create.store');

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
