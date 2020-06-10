<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */
Route::post('/login', 'Api\UserController@login');
Route::post('/register', 'Api\UserController@register');

Route::get('/films/images/{fileName}', 'Api\FilmController@getImage');

Route::group(['middleware' => 'auth:api'], function () {
    Route::get('/films', 'Api\FilmController@getFilms');
    Route::get('/films/{name}', 'Api\FilmController@getFilmByName');
    Route::post('/films', 'Api\FilmController@store');
});
