<template>
    <div class="card bg-base-100 shadow p-4">


        <div class="flex justify-between mb-4">
            <h2 class="text-lg font-bold">Users</h2>
            <button class="btn btn-primary btn-sm">Add User</button>
        </div>


        <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Admin</td>
                        <td>admin@example.com</td>
                        <td>Super Admin</td>
                        <td>
                            <button class="btn btn-xs btn-outline">Edit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


    </div>
</template>


<script setup>
</script>