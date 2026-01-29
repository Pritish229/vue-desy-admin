@extends('layouts.app')

@section('content')
<div class="space-y-8">
    
    <div class="flex flex-col gap-2">
        <h2 class="text-3xl font-bold tracking-tight">Swap</h2>
        <p class="text-gray-500">Toggle the visibility of two elements (icons or text) using a checkbox.</p>
    </div>

    <div class="card bg-base-100 shadow-sm border border-base-200">
        <div class="card-body">
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
                
                <div class="flex flex-col items-center gap-2">
                    <span class="text-sm font-bold text-gray-400">VOLUME ICON</span>
                    <label class="swap swap-rotate">
                        <input type="checkbox" />
                        <svg class="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"/></svg>
                        <svg class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z"/></svg>
                    </label>
                </div>

                <div class="flex flex-col items-center gap-2">
                    <span class="text-sm font-bold text-gray-400">HAMBURGER MENU</span>
                    <label class="btn btn-circle swap swap-rotate">
                        <input type="checkbox" />
                        <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                        <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                    </label>
                </div>

                <div class="flex flex-col items-center gap-2">
                    <span class="text-sm font-bold text-gray-400">TEXT TOGGLE</span>
                    <label class="swap">
                        <input type="checkbox" />
                        <div class="swap-on text-2xl font-black">ON</div>
                        <div class="swap-off text-2xl font-black">OFF</div>
                    </label>
                </div>

            </div>
        </div>
    </div>
</div>
@endsection