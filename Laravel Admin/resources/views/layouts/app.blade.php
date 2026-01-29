<!DOCTYPE html>
<html lang="en" data-theme="bumblebee">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <style>
        /* Smooth transitions */
        #main-sidebar { transition: width 0.3s ease; }
        .sidebar-text { transition: opacity 0.2s ease; display: inline-block; white-space: nowrap; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        /* Collapsed specific styles */
        .collapsed .menu-title { display: none; }
        .collapsed .sidebar-text { display: none; }
        .collapsed .logo-text { display: none; }
    </style>
</head>
<body class="bg-base-200">

    <div class="drawer lg:drawer-open">
        <input id="my-drawer-sidebar" type="checkbox" class="drawer-toggle" checked />
        
        <div class="drawer-content flex flex-col transition-all duration-300">
            <nav class="navbar w-full bg-base-100 shadow-sm sticky top-0 z-30 px-4 h-16">
                <div class="flex-none flex items-center gap-2">
                    <label for="my-drawer-sidebar" class="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
                    </label>
                </div>
                <div class="flex-1 px-4">
                    <span class="font-bold text-lg">Admin Panel</span>
                </div>
                <div class="flex-none flex items-center gap-4">
                    <div class="dropdown dropdown-end">
                        <div tabindex="0" role="button" class="btn btn-ghost btn-sm m-1">Theme <svg width="12px" height="12px" class="inline-block h-2 w-2 fill-current opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg></div>
                        <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-50 w-40 p-2 shadow-2xl border border-base-200">
                            <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-ghost justify-start" aria-label="Bumblebee" value="bumblebee" /></li>
                            <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-ghost justify-start" aria-label="Light" value="light" /></li>
                            <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-ghost justify-start" aria-label="Dark" value="dark" /></li>
                        </ul>
                    </div>
                    <div class="dropdown dropdown-end">
                        <div tabindex="0" role="button" class="avatar">
                            <div class="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                                <div class="bg-neutral text-neutral-content grid place-items-center w-full h-full"><span class="text-xs font-bold">AD</span></div>
                            </div>
                        </div>
                        <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li><a>Profile</a></li><li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main class="p-6">
                @yield('content')
            </main>
        </div>

        <div class="drawer-side z-40">
            <label for="my-drawer-sidebar" aria-label="close sidebar" class="drawer-overlay"></label>
            <aside id="main-sidebar" class="bg-base-100 min-h-screen text-base-content border-r border-base-200 flex flex-col w-80 overflow-x-hidden no-scrollbar">
                
                <div class="h-20 flex items-center px-6 border-b border-base-200 sticky top-0 bg-base-100 z-10 gap-3">
                    <div class="bg-primary text-primary-content p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <div class="logo-text">
                        <div class="font-bold text-lg leading-tight">Admin Panel</div>
                        <div class="text-xs font-normal opacity-60">v1.0.0</div>
                    </div>
                </div>

                <ul class="menu p-4 w-full gap-1">
                    
                    <li class="menu-title text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">MAIN</li>
                    <li><a href="{{ route('dashboard') }}" class="{{ request()->routeIs('dashboard') ? 'active' : '' }}"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg><span class="sidebar-text">Dashboard</span></a></li>
                    <li><a href="{{ route('users') }}" class="{{ request()->routeIs('users') ? 'active' : '' }}"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg><span class="sidebar-text">Users</span></a></li>
                    <li><a href="{{ route('settings') }}" class="{{ request()->routeIs('settings') ? 'active' : '' }}"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg><span class="sidebar-text">Settings</span></a></li>

                    <li class="menu-title text-xs font-bold text-gray-400 uppercase tracking-wider mt-6 mb-1">COMPONENTS</li>
                    
                    <li>
                        <details {{ request()->routeIs('components.actions.*') ? 'open' : '' }}>
                            <summary class="group">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                <span class="sidebar-text">Actions & Interactions</span>
                            </summary>
                            <ul class="border-l border-base-300 ml-3 pl-2 mt-1 space-y-1">
                                <li><a href="{{ route('components.actions.button') }}" class="{{ request()->routeIs('components.actions.button') ? 'active' : '' }}">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="6" width="16" height="12" rx="2"/></svg> <span class="sidebar-text">Button</span>
                                </a></li>
                                <li><a href="{{ route('components.actions.dropdown') }}" class="{{ request()->routeIs('components.actions.dropdown') ? 'active' : '' }}">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"/></svg> <span class="sidebar-text">Dropdown</span>
                                </a></li>
                                <li><a href="{{ route('components.actions.modal') }}" class="{{ request()->routeIs('components.actions.modal') ? 'active' : '' }}">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/></svg> <span class="sidebar-text">Modal</span>
                                </a></li>
                                <li><a href="{{ route('components.actions.swap') }}" class="{{ request()->routeIs('components.actions.swap') ? 'active' : '' }}">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 17H4M4 17l4 4M4 17l4-4M4 7h16M20 7l-4-4M20 7l-4 4"/></svg> <span class="sidebar-text">Swap</span>
                                </a></li>
                                <li><a href="{{ route('components.actions.theme-controller') }}" class="{{ request()->routeIs('components.actions.theme-controller') ? 'active' : '' }}">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg> <span class="sidebar-text">Theme Controller</span>
                                </a></li>
                                <li><a href="{{ route('components.actions.fab') }}" class="{{ request()->routeIs('components.actions.fab') ? 'active' : '' }}">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg> <span class="sidebar-text">FAB / Speed Dial</span>
                                </a></li>
                                <li><a href="{{ route('components.actions.tooltip') }}" class="{{ request()->routeIs('components.actions.tooltip') ? 'active' : '' }}">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> <span class="sidebar-text">Tooltip</span>
                                </a></li>
                                <li><a href="{{ route('components.actions.validator') }}" class="{{ request()->routeIs('components.actions.validator') ? 'active' : '' }}">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> <span class="sidebar-text">Validator</span>
                                </a></li>
                            </ul>
                        </details>
                    </li>

                    <li>
                        <details {{ request()->routeIs('components.forms.*') ? 'open' : '' }}>
                            <summary class="group">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                <span class="sidebar-text">Forms</span>
                            </summary>
                            <ul class="border-l border-base-300 ml-3 pl-2 mt-1 space-y-1">
                                <li><a href="{{ route('components.forms.text-input') }}" class="{{ request()->routeIs('components.forms.text-input') ? 'active' : '' }}">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg> <span class="sidebar-text">Text Input</span>
                                </a></li>
                                <li><a href="{{ route('components.forms.textarea') }}" class="{{ request()->routeIs('components.forms.textarea') ? 'active' : '' }}">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg> <span class="sidebar-text">Textarea</span>
                                </a></li>
                                <li><a href="{{ route('components.forms.checkbox') }}" class="{{ request()->routeIs('components.forms.checkbox') ? 'active' : '' }}">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><polyline points="9 11 12 14 22 4"/></svg> <span class="sidebar-text">Checkbox</span>
                                </a></li>
                                <li><a href="{{ route('components.forms.radio') }}" class="{{ request()->routeIs('components.forms.radio') ? 'active' : '' }}">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg> <span class="sidebar-text">Radio</span>
                                </a></li>
                                <li><a href="{{ route('components.forms.toggle') }}" class="{{ request()->routeIs('components.forms.toggle') ? 'active' : '' }}">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="5" width="22" height="14" rx="7" ry="7"/><circle cx="16" cy="12" r="3"/></svg> <span class="sidebar-text">Toggle</span>
                                </a></li>
                                <li><a href="{{ route('components.forms.select') }}" class="{{ request()->routeIs('components.forms.select') ? 'active' : '' }}">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg> <span class="sidebar-text">Select</span>
                                </a></li>
                                <li><a href="{{ route('components.forms.file-input') }}" class="{{ request()->routeIs('components.forms.file-input') ? 'active' : '' }}">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg> <span class="sidebar-text">File Input</span>
                                </a></li>
                                <li><a href="{{ route('components.forms.range-slider') }}" class="{{ request()->routeIs('components.forms.range-slider') ? 'active' : '' }}">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg> <span class="sidebar-text">Range Slider</span>
                                </a></li>
                                <li><a href="{{ route('components.forms.rating') }}" class="{{ request()->routeIs('components.forms.rating') ? 'active' : '' }}">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> <span class="sidebar-text">Rating</span>
                                </a></li>
                                <li><a href="{{ route('components.forms.label') }}" class="{{ request()->routeIs('components.forms.label') ? 'active' : '' }}">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg> <span class="sidebar-text">Label</span>
                                </a></li>
                                <li><a href="{{ route('components.forms.fieldset') }}" class="{{ request()->routeIs('components.forms.fieldset') ? 'active' : '' }}">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="M3 9h18"/></svg> <span class="sidebar-text">Fieldset</span>
                                </a></li>
                                <li><a href="{{ route('components.forms.filter') }}" class="{{ request()->routeIs('components.forms.filter') ? 'active' : '' }}">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg> <span class="sidebar-text">Filter</span>
                                </a></li>
                            </ul>
                        </details>
                    </li>

                </ul>
            </aside>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            // Theme Logic
            const savedTheme = localStorage.getItem('admin-theme') || 'bumblebee';
            document.documentElement.setAttribute('data-theme', savedTheme);
            document.getElementsByName('theme-dropdown').forEach(radio => {
                if (radio.value === savedTheme) radio.checked = true;
                radio.addEventListener('change', function() {
                    if(this.checked) localStorage.setItem('admin-theme', this.value);
                });
            });

            // Sidebar Collapse Logic
            const toggle = document.getElementById('my-drawer-sidebar');
            const sidebar = document.getElementById('main-sidebar');
            
            function updateSidebar() {
                if (toggle.checked) {
                    sidebar.classList.remove('w-20', 'collapsed'); 
                    sidebar.classList.add('w-80');
                } else {
                    sidebar.classList.remove('w-80'); 
                    sidebar.classList.add('w-20', 'collapsed');
                }
            }
            updateSidebar();
            toggle.addEventListener('change', updateSidebar);
        });
    </script>
</body>
</html>