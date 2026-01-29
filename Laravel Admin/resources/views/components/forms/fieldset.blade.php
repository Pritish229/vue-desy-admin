@extends('layouts.app')
@section('content')
<div class="space-y-6">
    <h2 class="text-3xl font-bold">Fieldset</h2>
    <div class="card bg-base-100 shadow-sm border border-base-200">
        <div class="card-body">
            <fieldset class="fieldset p-4 bg-base-200 rounded-box border border-base-300">
                <legend class="fieldset-legend px-2 font-bold">Login</legend>
                <div class="space-y-2">
                    <label class="input input-bordered flex items-center gap-2">
                        User <input type="text" class="grow" />
                    </label>
                    <label class="input input-bordered flex items-center gap-2">
                        Pass <input type="password" class="grow" />
                    </label>
                    <button class="btn btn-primary w-full">Login</button>
                </div>
            </fieldset>
        </div>
    </div>
</div>
@endsection