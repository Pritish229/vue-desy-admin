@extends('layouts.app')

@section('content')
<div class="space-y-8">
    
    <div class="flex flex-col gap-2">
        <h2 class="text-3xl font-bold tracking-tight">Dropdown</h2>
        <p class="text-gray-500">Dropdowns can open a menu or any other element when the button is clicked.</p>
    </div>

    <div class="card bg-base-100 shadow-sm border border-base-200 overflow-visible">
        <div class="card-body">
            <h3 class="card-title text-sm font-bold text-gray-400 uppercase mb-4">Basic Usage</h3>
            <div class="h-40"> 
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn m-1">Click Me</div>
                    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="card bg-base-100 shadow-sm border border-base-200 overflow-visible">
        <div class="card-body">
            <h3 class="card-title text-sm font-bold text-gray-400 uppercase mb-4">Alignment</h3>
            <div class="flex flex-wrap gap-4 h-48">
                
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn m-1">Left (Default)</div>
                    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>

                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn m-1">Right Align</div>
                    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>

                <div class="dropdown dropdown-top">
                    <div tabindex="0" role="button" class="btn m-1">Top Align</div>
                    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="card bg-base-100 shadow-sm border border-base-200 overflow-visible">
        <div class="card-body">
            <h3 class="card-title text-sm font-bold text-gray-400 uppercase mb-4">Hover to Open</h3>
            <div class="h-40">
                <div class="dropdown dropdown-hover">
                    <div tabindex="0" role="button" class="btn m-1">Hover Me</div>
                    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection