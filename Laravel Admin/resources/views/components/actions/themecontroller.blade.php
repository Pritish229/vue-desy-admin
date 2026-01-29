@extends('layouts.app')
@section('content')
<div class="space-y-6">
    <h2 class="text-3xl font-bold">Theme Controller</h2>
    <div class="card bg-base-100 shadow-sm border border-base-200">
        <div class="card-body">
            <p class="mb-4">This radio list automatically updates the HTML data-theme.</p>
            <ul class="menu bg-base-200 rounded-box w-56">
                <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="default"/></li>
                <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Bumblebee" value="bumblebee"/></li>
                <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark" value="dark"/></li>
                <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyberpunk" value="cyberpunk"/></li>
            </ul>
        </div>
    </div>
</div>
@endsection