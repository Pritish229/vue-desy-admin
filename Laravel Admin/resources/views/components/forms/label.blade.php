@extends('layouts.app')
@section('content')
<div class="space-y-6">
    <h2 class="text-3xl font-bold">Label</h2>
    <div class="card bg-base-100 shadow-sm border border-base-200">
        <div class="card-body">
            <label class="label">
                <span class="label-text">Top Left Label</span>
                <span class="label-text-alt">Top Right Label</span>
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            <label class="label">
                <span class="label-text-alt">Bottom Left Label</span>
                <span class="label-text-alt">Bottom Right Label</span>
            </label>
        </div>
    </div>
</div>
@endsection