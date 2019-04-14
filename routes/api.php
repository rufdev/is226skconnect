<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {

    return $request->user();
});


Route::apiResources([
    'user' => 'API\UserController'
]);
Route::apiResources([
    'role' => 'API\RolesController'
]);

Route::apiResources([
    'post' => 'API\PostsController'
]);

Route::apiResources([
    'memo' => 'API\MemosController'
]);

Route::apiResources([
    'announcement' => 'API\AnnouncementsController'
]);


Route::get('profile','API\UserController@profile');
Route::put('profile','API\UserController@updateProfile');

Route::get('findUser','API\UserController@search');
Route::get('findRole','API\RolesController@search');
Route::get('findPost','API\PostsController@search');
Route::get('findMemo','API\MemosController@search');
Route::get('findAnnouncement','API\AnnouncementsController@search');

Route::get('countPost','API\PostsController@count');
Route::get('countMemo','API\MemosController@count');
Route::get('countUser','API\UserController@count');
Route::get('countAnnouncement','API\AnnouncementsController@count');




