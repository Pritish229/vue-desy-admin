@extends('layouts.app')
@section('content')
<div class="space-y-6">
    <h2 class="text-3xl font-bold">Filter Pattern</h2>
    <div class="card bg-base-100 shadow-sm border border-base-200">
        <div class="card-body">
            <p class="mb-4">Common filter layout using join.</p>
            <div class="join">
                <div>
                    <div>
                        <input class="input input-bordered join-item" placeholder="Search..." />
                    </div>
                </div>
                <select class="select select-bordered join-item">
                    <option disabled selected>Filter</option>
                    <option>Sci-fi</option>
                    <option>Drama</option>
                    <option>Action</option>
                </select>
                <div class="indicator">
                    <button class="btn join-item">Search</button>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection