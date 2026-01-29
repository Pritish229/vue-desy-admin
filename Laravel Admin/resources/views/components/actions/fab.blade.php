@extends('layouts.app')
@section('content')
<div class="space-y-6">
    <h2 class="text-3xl font-bold">FAB (Floating Action Button)</h2>
    <div class="card bg-base-100 shadow-sm border border-base-200 h-64 relative">
        <div class="card-body">
            <p>Buttons positioned absolutely in the corner.</p>
            <button class="btn btn-circle btn-primary absolute bottom-4 right-4 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
            </button>
            <button class="btn btn-primary absolute bottom-4 right-20 shadow-lg gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Compose
            </button>
        </div>
    </div>
</div>
@endsection