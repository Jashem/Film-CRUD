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

Route::prefix('/films')->group(function () {
    Route::get('/images/{fileName}', 'Api\FilmController@getImage');
    Route::get('/', 'Api\FilmController@getFilms');
    Route::get('/name/{name}', 'Api\FilmController@getFilmByName');
});

Route::group(['middleware' => 'auth:api'], function () {
    Route::prefix('/films')->group(function () {
        Route::post('/', 'Api\FilmController@store');
        Route::post('/id/{id}/comments', 'Api\CommentController@store')->where('id', '[0-9]+');;
    });
});
