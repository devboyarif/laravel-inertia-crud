<template>
    <AppLayout>
        <div class="row justify-content-center">
            <div class="col-8">
                <div class="card mt-3">
                    <div class="card-header">
                        <div class="d-flex justify-content-between">
                            <h3>Student List</h3>
                            <Link href="/students/create" class="btn btn-primary">Create</Link>
                        </div>
                    </div>
                    <div class="card-body">
                        <table class="table ">
                            <thead class="thead-light">
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="student in students" :key="student.id">
                                    <td>{{ student.id }}</td>
                                    <td>{{ student.name }}</td>
                                    <td>{{ student.email }}</td>
                                    <td>
                                        <Link :href="'/students/'+student.id+'/edit'" class="btn btn-primary">Edit</Link>
                                        <a @click="deleteStudent(student.id)" href="#" class="btn btn-danger">Delete</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<script>
    import AppLayout from "../../Layout/App.vue";
    import {
        Link
    } from '@inertiajs/inertia-vue'

    export default {
        props: {
            students: {
                type: Array,
                required: false
            }
        },
        components: {
            AppLayout,
            Link
        },
        methods:{
            deleteStudent(id){
                if(confirm('Are you sure to delete?')){
                    this.$inertia.post(`/students/${id}`, {
                        _method: 'delete'
                    })
                }
            }
        }
    }
</script>
