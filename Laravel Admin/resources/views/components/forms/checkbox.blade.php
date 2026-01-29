@extends('layouts.app')
@section('content')
<div class="space-y-6">
    <h2 class="text-3xl font-bold">Checkbox</h2>
    <div class="card bg-base-100 shadow-sm border border-base-200">
        <div class="card-body flex gap-4">
            <input type="checkbox" checked="checked" class="checkbox" />
            <input type="checkbox" checked="checked" class="checkbox checkbox-primary" />
            <input type="checkbox" checked="checked" class="checkbox checkbox-secondary" />
            <input type="checkbox" checked="checked" class="checkbox checkbox-accent" />
        </div>
    </div>
</div>
@endsection