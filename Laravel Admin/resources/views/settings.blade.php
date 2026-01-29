@extends('layouts.app')

@section('content')
    <div class="mb-8">
        <h2 class="text-3xl font-bold tracking-tight">Settings</h2>
        <p class="text-gray-500 mt-2">Customize the admin panel theme and basic interface preferences.</p>
        
        <div class="text-sm breadcrumbs mt-2 text-gray-400">
            <ul>
                <li><a>Dashboard</a></li> 
                <li>Settings</li>
            </ul>
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div class="lg:col-span-2">
            <div class="card bg-base-100 shadow-sm border border-base-200">
                <div class="card-body">
                    <h3 class="card-title text-lg">Appearance</h3>
                    <p class="text-gray-500 text-sm mb-6">Choose between light, dark and custom admin themes. This updates the data-theme attribute for DaisyUI.</p>
                    
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text font-semibold">Select Theme</span>
                        </label>
                        <select class="select select-bordered" data-choose-theme>
                            <option value="bumblebee">Bumblebee (Yellow)</option>
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </div>

                    <div class="mt-6 flex gap-2">
                        <div class="badge badge-warning gap-2">
                            Active
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="lg:col-span-1">
            <div class="card bg-base-100 shadow-sm border border-base-200">
                <div class="card-body">
                    <h3 class="card-title text-lg mb-4">UI Preferences</h3>
                    
                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <span class="label-text">Compact table density</span> 
                            <input type="checkbox" class="toggle toggle-sm" checked />
                        </label>
                    </div>

                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <span class="label-text">Show advanced filters</span> 
                            <input type="checkbox" class="toggle toggle-sm" />
                        </label>
                    </div>

                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <span class="label-text">Enable notifications</span> 
                            <input type="checkbox" class="toggle toggle-sm" checked />
                        </label>
                    </div>

                </div>
            </div>
        </div>

    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const themeSelect = document.querySelector('[data-choose-theme]');
            const html = document.querySelector('html');

            // Set initial value
            themeSelect.value = html.getAttribute('data-theme');

            themeSelect.addEventListener('change', function () {
                html.setAttribute('data-theme', this.value);
                // Optional: Save to localStorage so it persists on reload
                localStorage.setItem('admin-theme', this.value);
            });

            // Check for saved theme on load
            const savedTheme = localStorage.getItem('admin-theme');
            if (savedTheme) {
                html.setAttribute('data-theme', savedTheme);
                themeSelect.value = savedTheme;
            }
        });
    </script>
@endsection