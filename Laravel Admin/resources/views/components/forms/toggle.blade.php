@extends('layouts.app')
@section('content')
<div class="space-y-6">
    <h2 class="text-3xl font-bold">Toggle</h2>
    <div class="card bg-base-100 shadow-sm border border-base-200">
        <div class="card-body">
            <input type="checkbox" class="toggle" checked />
            <input type="checkbox" class="toggle toggle-primary" checked />
            <input type="checkbox" class="toggle toggle-secondary" checked />
        </div>
    </div>
</div>
@endsection