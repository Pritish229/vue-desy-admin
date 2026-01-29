@extends('layouts.app')
@section('content')
<div class="space-y-6">
    <h2 class="text-3xl font-bold">Radio</h2>
    <div class="card bg-base-100 shadow-sm border border-base-200">
        <div class="card-body">
            <div class="flex gap-4">
                <input type="radio" name="radio-1" class="radio" checked />
                <input type="radio" name="radio-1" class="radio radio-primary" />
                <input type="radio" name="radio-1" class="radio radio-secondary" />
            </div>
        </div>
    </div>
</div>
@endsection