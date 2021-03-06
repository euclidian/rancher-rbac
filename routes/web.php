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

Route::get('/{url}', 'HomeController@index')->name("home");
Route::get('/', function () {
    return view("auth.login");
});

Auth::routes();
// Route::get('/home', 'HomeController@index')->name('home');
// Route::get('/usermanagement', 'HomeController@index')->name('home');
// Route::get('/rancherprojects', 'HomeController@index')->name('home');
// Route::get('/stack', 'HomeController@index')->name('home');
// Route::get('/stack_template', 'HomeController@index')->name('home');
// Route::get('/stack_config', 'HomeController@index')->name('home');
