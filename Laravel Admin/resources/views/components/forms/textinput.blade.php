@extends('layouts.app')
@section('content')
<div class="space-y-6">
    <h2 class="text-3xl font-bold">Text Input</h2>
    <div class="card bg-base-100 shadow-sm border border-base-200">
        <div class="card-body space-y-4">
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Ghost input" class="input input-ghost w-full max-w-xs" />
            <input type="text" placeholder="Primary input" class="input input-bordered input-primary w-full max-w-xs" />
            <label class="input input-bordered flex items-center gap-2">
                Email <input type="text" class="grow" placeholder="daisy@site.com" />
            </label>
        </div>
    </div>
</div>
@endsection