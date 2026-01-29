@extends('layouts.app')
@section('content')
<div class="space-y-6">
    <h2 class="text-3xl font-bold">Select</h2>
    <div class="card bg-base-100 shadow-sm border border-base-200">
        <div class="card-body">
            <select class="select select-bordered w-full max-w-xs">
                <option disabled selected>Pick your favorite Simpson</option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
            </select>
        </div>
    </div>
</div>
@endsection