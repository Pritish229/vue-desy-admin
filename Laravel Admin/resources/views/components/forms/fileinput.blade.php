@extends('layouts.app')
@section('content')
<div class="space-y-6">
    <h2 class="text-3xl font-bold">File Input</h2>
    <div class="card bg-base-100 shadow-sm border border-base-200">
        <div class="card-body">
            <input type="file" class="file-input file-input-bordered w-full max-w-xs" />
            <input type="file" class="file-input file-input-bordered file-input-primary w-full max-w-xs mt-4" />
        </div>
    </div>
</div>
@endsection