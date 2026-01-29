@extends('layouts.app')
@section('content')
<div class="space-y-6">
    <h2 class="text-3xl font-bold">Textarea</h2>
    <div class="card bg-base-100 shadow-sm border border-base-200">
        <div class="card-body">
            <textarea class="textarea textarea-bordered" placeholder="Bio"></textarea>
            <textarea class="textarea textarea-primary mt-4" placeholder="Primary Bio"></textarea>
        </div>
    </div>
</div>
@endsection