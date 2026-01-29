@extends('layouts.app')

@section('content')
<div class="space-y-8">
    
    <div class="flex flex-col gap-2">
        <h2 class="text-3xl font-bold tracking-tight">Modal</h2>
        <p class="text-gray-500">Dialogs for alerts, confirmations, or custom content.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="card bg-base-100 shadow-sm border border-base-200">
            <div class="card-body">
                <h3 class="card-title text-sm font-bold text-gray-400 uppercase mb-4">Standard Modal</h3>
                <p>Closes when clicking the button.</p>
                
                <button class="btn btn-neutral w-fit" onclick="my_modal_1.showModal()">Open Modal</button>
                
                <dialog id="my_modal_1" class="modal">
                    <div class="modal-box">
                        <h3 class="font-bold text-lg">Hello!</h3>
                        <p class="py-4">Press ESC key or click the button below to close</p>
                        <div class="modal-action">
                            <form method="dialog">
                                <button class="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>

        <div class="card bg-base-100 shadow-sm border border-base-200">
            <div class="card-body">
                <h3 class="card-title text-sm font-bold text-gray-400 uppercase mb-4">Click Outside to Close</h3>
                <p>Closes when clicking the dark background.</p>
                
                <button class="btn w-fit" onclick="my_modal_2.showModal()">Open Modal</button>
                
                <dialog id="my_modal_2" class="modal">
                    <div class="modal-box">
                        <h3 class="font-bold text-lg">Click Outside!</h3>
                        <p class="py-4">You can click the backdrop (dark area) to close this modal.</p>
                    </div>
                    <form method="dialog" class="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>
        </div>

    </div>
</div>
@endsection