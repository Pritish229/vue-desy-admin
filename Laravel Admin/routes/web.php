<?php

use Illuminate\Support\Facades\Route;

// Main App Pages
Route::get('/', function () { return view('dashboard'); })->name('dashboard');
Route::get('/users', function () { return view('users'); })->name('users');
Route::get('/settings', function () { return view('settings'); })->name('settings');

// Component Routes
// Component Showcase Routes
// Component Showcase Routes
Route::prefix('components')->name('components.')->group(function () {
    
    // 1. Actions & Interactions
    Route::prefix('actions')->name('actions.')->group(function () {
        Route::get('/button', function () { return view('components.actions.button'); })->name('button');
        Route::get('/dropdown', function () { return view('components.actions.dropdown'); })->name('dropdown');
        Route::get('/modal', function () { return view('components.actions.modal'); })->name('modal');
        Route::get('/swap', function () { return view('components.actions.swap'); })->name('swap');
        Route::get('/theme-controller', function () { return view('components.actions.themecontroller'); })->name('theme-controller');
        Route::get('/fab', function () { return view('components.actions.fab'); })->name('fab');
        Route::get('/tooltip', function () { return view('components.actions.tooltip'); })->name('tooltip');
        Route::get('/validator', function () { return view('components.actions.validator'); })->name('validator');
    });

    // 2. Forms
    Route::prefix('forms')->name('forms.')->group(function () {
        Route::get('/text-input', function () { return view('components.forms.textinput'); })->name('text-input');
        Route::get('/textarea', function () { return view('components.forms.textarea'); })->name('textarea');
        Route::get('/checkbox', function () { return view('components.forms.checkbox'); })->name('checkbox');
        Route::get('/radio', function () { return view('components.forms.radio'); })->name('radio');
        Route::get('/toggle', function () { return view('components.forms.toggle'); })->name('toggle');
        Route::get('/select', function () { return view('components.forms.select'); })->name('select');
        Route::get('/file-input', function () { return view('components.forms.fileinput'); })->name('file-input');
        Route::get('/range-slider', function () { return view('components.forms.rangeslider'); })->name('range-slider');
        Route::get('/rating', function () { return view('components.forms.rating'); })->name('rating');
        Route::get('/label', function () { return view('components.forms.label'); })->name('label');
        Route::get('/fieldset', function () { return view('components.forms.fieldset'); })->name('fieldset');
        Route::get('/filter', function () { return view('components.forms.filter'); })->name('filter');
    });

});