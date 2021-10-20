<template>
    <AppLayout>
        <div class="row justify-content-center">
            <div class="col-8">
                <div class="card mt-3">
                    <div class="card-header">
                        <div class="d-flex justify-content-between">
                            <h3>Student List</h3>
                            <Link :href="route('students.create')" class="btn btn-primary">Create</Link>
                        </div>
                    </div>
                    <div class="card-body">
                        <table class="table ">
                            <thead class="thead-light">
                                <tr>
                                    <th>SL</th>
                                    <th>Avatar</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-if="students && students.length">
                                    <tr v-for="(student,index) in students" :key="student.id">
                                        <td>{{ index+1 }}</td>
                                        <td>
                                            <img v-if="student.avatar" height="60px" width="60px" class="rounded img-fluid" :src="student.avatar" alt="">
                                            <img v-else height="60px" width="60px" class="rounded img-fluid" src="images/default.png" alt="">
                                        </td>
                                        <td>{{ student.name }}</td>
                                        <td>{{ student.email }}</td>
                                        <td>
                                            <Link :href="route('students.edit',student.id)" class="btn btn-primary">Edit</Link>
                                            <a @click="deleteStudent(student.id)" href="#" class="btn btn-danger">Delete</a>
                                        </td>
                                    </tr>
                                </template>
                                <tr v-else>
                                    <td colspan="5" class="text-center">
                                        <h3>No Student Found</h3>
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
                this.$inertia.delete(`/students/${id}`, {
                    onBefore: () => confirm('Are you sure you want to delete?'),
                    onSuccess: (page) => {alert('Student Deleted')},
                })
            }
        }
    }
</script>
