@extends('layouts.app')

@section('content')
<div class="space-y-8">
    
    <div class="flex flex-col gap-2">
        <h2 class="text-3xl font-bold tracking-tight">Buttons</h2>
        <p class="text-gray-500">Buttons allow users to take actions, and make choices, with a single tap.</p>
    </div>

    <div class="card bg-base-100 shadow-sm border border-base-200">
        <div class="card-body">
            <h3 class="card-title text-sm font-bold text-gray-400 uppercase mb-4">Brand Variants</h3>
            <div class="flex flex-wrap gap-2">
                <button class="btn">Default</button>
                <button class="btn btn-neutral">Neutral</button>
                <button class="btn btn-primary">Primary</button>
                <button class="btn btn-secondary">Secondary</button>
                <button class="btn btn-accent">Accent</button>
                <button class="btn btn-ghost">Ghost</button>
                <button class="btn btn-link">Link</button>
            </div>
        </div>
    </div>

    <div class="card bg-base-100 shadow-sm border border-base-200">
        <div class="card-body">
            <h3 class="card-title text-sm font-bold text-gray-400 uppercase mb-4">States & Colors</h3>
            <div class="flex flex-wrap gap-2">
                <button class="btn btn-info">Info</button>
                <button class="btn btn-success">Success</button>
                <button class="btn btn-warning">Warning</button>
                <button class="btn btn-error">Error</button>
                <button class="btn btn-outline">Outline</button>
                <button class="btn" disabled>Disabled</button>
                <button class="btn">
                    <span class="loading loading-spinner"></span>
                    Loading
                </button>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="card bg-base-100 shadow-sm border border-base-200">
            <div class="card-body">
                <h3 class="card-title text-sm font-bold text-gray-400 uppercase mb-4">Sizes</h3>
                <div class="flex items-center gap-2 flex-wrap">
                    <button class="btn btn-lg">Large</button>
                    <button class="btn">Normal</button>
                    <button class="btn btn-sm">Small</button>
                    <button class="btn btn-xs">Tiny</button>
                </div>
            </div>
        </div>

        <div class="card bg-base-100 shadow-sm border border-base-200">
            <div class="card-body">
                <h3 class="card-title text-sm font-bold text-gray-400 uppercase mb-4">Shapes</h3>
                <div class="flex items-center gap-2 flex-wrap">
                    <button class="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <button class="btn btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <button class="btn btn-wide">Wide</button>
                    <button class="btn btn-block">Block (Full Width)</button>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection