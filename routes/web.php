<?php

use App\Http\Controllers\StudentController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect('/students');
});

Route::resource('students', StudentController::class);

Route::get('/test', function () {
    return inertia('Test/test');
});
