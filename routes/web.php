<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', 'IndexController@index');
Route::get('/post/{id}', 'IndexController@post');
Route::get('/announcement/{id}', 'IndexController@announcement');
Route::get('/memo/{id}', 'IndexController@memo');
Route::get('/events', 'IndexController@events');
Route::get('/about', 'IndexController@about');
Route::get('/blog', 'IndexController@blog');
Route::get('/memos', 'IndexController@memos');
Route::get('/404', 'IndexController@error');


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('{path}','HomeController@index')->where('path','([A-z\d\-\/_.]+)?');
