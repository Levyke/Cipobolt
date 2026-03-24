<?php

use App\Http\Controllers\CipokController;
use App\Http\Controllers\MarkakController;
use Illuminate\Support\Facades\Route;

Route::get('/markak', [MarkakController::class, 'index']);
Route::get('/marka/{marka}', [MarkakController::class, 'show']);
Route::get('/cipok', [CipokController::class, 'index']);
Route::get('/cipo/{id}', [CipokController::class, 'show']);

Route::post('/cipo', [CipokController::class, 'store']);
Route::post('/marka', [MarkakController::class, 'store']);

Route::put('/cipo/{id}', [CipokController::class, 'update']);
Route::put('/marka/{id}', [MarkakController::class, 'update']);

Route::delete('/cipo/{id}', [CipokController::class, 'destroy']);