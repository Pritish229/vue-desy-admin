@extends('layouts.app')
@section('content')
<div class="space-y-6">
    <h2 class="text-3xl font-bold">Tooltip</h2>
    <div class="card bg-base-100 shadow-sm border border-base-200">
        <div class="card-body flex flex-wrap gap-4 justify-center">
            <div class="tooltip" data-tip="hello"><button class="btn">Hover me</button></div>
            <div class="tooltip tooltip-open tooltip-primary" data-tip="I'm open"><button class="btn btn-primary">Force Open</button></div>
            <div class="tooltip tooltip-bottom" data-tip="Bottom"><button class="btn">Bottom</button></div>
            <div class="tooltip tooltip-left" data-tip="Left"><button class="btn">Left</button></div>
        </div>
    </div>
</div>
@endsection