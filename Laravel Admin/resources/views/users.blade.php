@extends('layouts.app')

@section('content')
    <div class="flex justify-between items-center mb-6">
        <div>
            <h2 class="text-3xl font-bold tracking-tight">Users</h2>
            <p class="text-gray-500 mt-1">Manage your team members and their account permissions.</p>
        </div>
        <button class="btn btn-primary btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Add User
        </button>
    </div>

    <div class="card bg-base-100 shadow-sm border border-base-200">
        <div class="card-body p-0">
            <div class="overflow-x-auto">
                <table class="table">
                    <thead class="bg-base-200/50">
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox checkbox-xs" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job & Role</th>
                            <th>Status</th>
                            <th>Last Login</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox checkbox-xs" />
                                </label>
                            </th>
                            <td>
                                <div class="flex items-center gap-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src="https://img.daisyui.com/images/profile/demo/2@94.webp" alt="Avatar" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Hart Hagerty</div>
                                        <div class="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Desktop Support Technician
                                <br/>
                                <span class="badge badge-ghost badge-sm">Support</span>
                            </td>
                            <td>
                                <div class="badge badge-success gap-2">
                                    Active
                                </div>
                            </td>
                            <td class="text-sm">Oct 24, 2025</td>
                            <th>
                                <button class="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>

                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox checkbox-xs" />
                                </label>
                            </th>
                            <td>
                                <div class="flex items-center gap-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src="https://img.daisyui.com/images/profile/demo/3@94.webp" alt="Avatar" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Brice Swyre</div>
                                        <div class="text-sm opacity-50">China</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Tax Accountant
                                <br/>
                                <span class="badge badge-ghost badge-sm">Accounting</span>
                            </td>
                            <td>
                                <div class="badge badge-error gap-2 text-white">
                                    Offline
                                </div>
                            </td>
                            <td class="text-sm">Jan 12, 2026</td>
                            <th>
                                <button class="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>

                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox checkbox-xs" />
                                </label>
                            </th>
                            <td>
                                <div class="flex items-center gap-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src="https://img.daisyui.com/images/profile/demo/4@94.webp" alt="Avatar" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Marjy Ferencz</div>
                                        <div class="text-sm opacity-50">Russia</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Office Assistant I
                                <br/>
                                <span class="badge badge-ghost badge-sm">Admin</span>
                            </td>
                            <td>
                                <div class="badge badge-success gap-2">
                                    Active
                                </div>
                            </td>
                            <td class="text-sm">Dec 19, 2025</td>
                            <th>
                                <button class="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="card-actions justify-end p-4 border-t border-base-200">
            <div class="join">
                <button class="join-item btn btn-sm">«</button>
                <button class="join-item btn btn-sm btn-active">1</button>
                <button class="join-item btn btn-sm">2</button>
                <button class="join-item btn btn-sm">3</button>
                <button class="join-item btn btn-sm">»</button>
            </div>
        </div>
    </div>
@endsection