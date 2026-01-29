@extends('layouts.app')
@section('content')
<div class="space-y-6">
    <h2 class="text-3xl font-bold">Range Slider</h2>
    <div class="card bg-base-100 shadow-sm border border-base-200">
        <div class="card-body">
            <input type="range" min="0" max="100" value="40" class="range" />
            <input type="range" min="0" max="100" value="70" class="range range-primary mt-4" />
            <input type="range" min="0" max="100" value="20" class="range range-xs mt-4" />
        </div>
    </div>
</div>
@endsection