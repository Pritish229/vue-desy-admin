@extends('layouts.app')

@section('content')
<div class="space-y-6">
    
    <div class="flex justify-between items-end">
        <div>
            <h2 class="text-3xl font-bold tracking-tight">Dashboard</h2>
            <p class="text-gray-500 mt-1">Overview of your system's performance and recent activity.</p>
        </div>
        <div class="flex gap-2">
            <button class="btn btn-sm btn-ghost">Export</button>
            <button class="btn btn-sm btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" /></svg>
                New Report
            </button>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div class="stats shadow border border-base-200">
            <div class="stat">
                <div class="stat-figure text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                </div>
                <div class="stat-title">Total Users</div>
                <div class="stat-value text-primary">25.6K</div>
                <div class="stat-desc">↗︎ 14% more than last month</div>
            </div>
        </div>
        
        <div class="stats shadow border border-base-200">
            <div class="stat">
                <div class="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div class="stat-title">Page Views</div>
                <div class="stat-value text-secondary">2.6M</div>
                <div class="stat-desc">↘︎ 5% less than last month</div>
            </div>
        </div>

        <div class="stats shadow border border-base-200">
            <div class="stat">
                <div class="stat-figure text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                </div>
                <div class="stat-title">New Registers</div>
                <div class="stat-value">1,200</div>
                <div class="stat-desc">↗︎ 90 (14%)</div>
            </div>
        </div>

        <div class="stats shadow border border-base-200">
            <div class="stat">
                <div class="stat-figure text-success">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div class="stat-title">Server Uptime</div>
                <div class="stat-value text-success">99.9%</div>
                <div class="stat-desc">Stable</div>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div class="card bg-base-100 shadow-sm border border-base-200 lg:col-span-2">
            <div class="card-body">
                <h3 class="card-title text-sm font-bold text-gray-400 uppercase mb-4">Traffic Overview</h3>
                <div class="flex items-end justify-between gap-2 h-40 mt-4 w-full px-2">
                    <div class="w-full bg-primary/20 hover:bg-primary/40 transition-colors rounded-t" style="height: 40%"></div>
                    <div class="w-full bg-primary/20 hover:bg-primary/40 transition-colors rounded-t" style="height: 70%"></div>
                    <div class="w-full bg-primary/20 hover:bg-primary/40 transition-colors rounded-t" style="height: 50%"></div>
                    <div class="w-full bg-primary/20 hover:bg-primary/40 transition-colors rounded-t" style="height: 85%"></div>
                    <div class="w-full bg-primary/20 hover:bg-primary/40 transition-colors rounded-t" style="height: 60%"></div>
                    <div class="w-full bg-primary hover:bg-primary-focus transition-colors rounded-t shadow-lg" style="height: 95%"></div> <div class="w-full bg-primary/20 hover:bg-primary/40 transition-colors rounded-t" style="height: 55%"></div>
                </div>
                <div class="flex justify-between text-xs text-gray-400 mt-2 px-2">
                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span class="font-bold text-primary">Sat</span><span>Sun</span>
                </div>
            </div>
        </div>

        <div class="card bg-base-100 shadow-sm border border-base-200">
            <div class="card-body">
                <h3 class="card-title text-sm font-bold text-gray-400 uppercase mb-4">System Health</h3>
                <div class="flex flex-col gap-4">
                    <div>
                        <div class="flex justify-between text-xs mb-1">
                            <span>CPU Usage</span>
                            <span class="font-bold">45%</span>
                        </div>
                        <progress class="progress progress-primary w-full" value="45" max="100"></progress>
                    </div>
                    <div>
                        <div class="flex justify-between text-xs mb-1">
                            <span>Memory</span>
                            <span class="font-bold">70%</span>
                        </div>
                        <progress class="progress progress-warning w-full" value="70" max="100"></progress>
                    </div>
                    <div>
                        <div class="flex justify-between text-xs mb-1">
                            <span>Disk Space</span>
                            <span class="font-bold">20%</span>
                        </div>
                        <progress class="progress progress-success w-full" value="20" max="100"></progress>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="card bg-base-100 shadow-sm border border-base-200">
        <div class="card-body">
            <div class="flex justify-between items-center mb-4">
                <h3 class="card-title text-lg">Recent Users</h3>
                <button class="btn btn-xs btn-ghost">View All</button>
            </div>
            
            <div class="overflow-x-auto">
                <table class="table">
                    <thead>
                        <tr>
                            <th>
                                <label><input type="checkbox" class="checkbox" /></label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover">
                            <th><label><input type="checkbox" class="checkbox" /></label></th>
                            <td>
                                <div class="flex items-center gap-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-10 h-10">
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
                            <td>Purple</td>
                            <td><div class="badge badge-success gap-2">Active</div></td>
                            <th>
                                <button class="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                        <tr class="hover">
                            <th><label><input type="checkbox" class="checkbox" /></label></th>
                            <td>
                                <div class="flex items-center gap-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-10 h-10">
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
                                <span class="badge badge-ghost badge-sm">Finance</span>
                            </td>
                            <td>Red</td>
                            <td><div class="badge badge-warning gap-2">Pending</div></td>
                            <th>
                                <button class="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                        <tr class="hover">
                            <th><label><input type="checkbox" class="checkbox" /></label></th>
                            <td>
                                <div class="flex items-center gap-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-10 h-10">
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
                                Office Assistant
                                <br/>
                                <span class="badge badge-ghost badge-sm">Admin</span>
                            </td>
                            <td>Crimson</td>
                            <td><div class="badge badge-error gap-2">Inactive</div></td>
                            <th>
                                <button class="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</div>
@endsection