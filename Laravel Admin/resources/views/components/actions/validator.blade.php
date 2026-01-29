@extends('layouts.app')
@section('content')
<div class="space-y-6">
    <h2 class="text-3xl font-bold">Form Validation States</h2>
    <div class="card bg-base-100 shadow-sm border border-base-200">
        <div class="card-body space-y-4">
            <label class="form-control w-full max-w-xs">
                <div class="label"><span class="label-text">Error State</span></div>
                <input type="text" placeholder="Type here" class="input input-bordered input-error w-full max-w-xs" />
                <div class="label"><span class="label-text-alt text-error">Email is required</span></div>
            </label>
            <label class="form-control w-full max-w-xs">
                <div class="label"><span class="label-text">Success State</span></div>
                <input type="text" value="Valid Input" class="input input-bordered input-success w-full max-w-xs" />
                <div class="label"><span class="label-text-alt text-success">Username available!</span></div>
            </label>
        </div>
    </div>
</div>
@endsection