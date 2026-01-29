@extends('layouts.app')
@section('content')
<div class="space-y-6">
    <h2 class="text-3xl font-bold">Rating</h2>
    <div class="card bg-base-100 shadow-sm border border-base-200">
        <div class="card-body">
            <div class="rating">
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" checked />
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" />
            </div>
            <div class="rating mt-4">
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            </div>
        </div>
    </div>
</div>
@endsection