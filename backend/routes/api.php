<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\auth\AuthController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


//Rutas desprotegidas
Route::post('login', [AuthController::class, 'login']);

//Rutas protegidas por JWT
Route::middleware('jwt.verify')->group(function () {
    Route::get('clients', [ClientController::class, 'index']);
    Route::post('clients/register', [ClientController::class, 'store']);
    Route::get('clients/{id}/edit', [ClientController::class, 'show']);
    Route::put('clients/{id}/edit', [ClientController::class, 'update']);
    Route::delete('clients/{id}', [ClientController::class, 'destroy']);
});
