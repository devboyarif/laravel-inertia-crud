<template>
    <AppLayout>
        <div class="row justify-content-center">
            <div class="col-6">
                <div class="card mt-3">
                    <div class="card-header">
                        <div class="d-flex justify-content-between">
                            <h3>Student Create</h3>
                            <Link href="/students" class="btn btn-primary">Back</Link>
                        </div>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="createData">
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input v-model="form.name" type="text" class="form-control" :class="{'is-invalid':form.errors.name}" id="name">
                                <span v-if="form.errors.name" class="invalid-feedback">{{ form.errors.name }}</span>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input v-model="form.email" type="email" class="form-control" :class="{'is-invalid':form.errors.email}" id="email">
                                <span v-if="form.errors.email" class="invalid-feedback">{{ form.errors.email }}</span>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
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
        components: {
            AppLayout,
            Link
        },
        data() {
            return {
                form: this.$inertia.form({
                    name: null,
                    email: null,
                })
            }
        },
        methods:{
            createData(){
                this.form.post('/students')
                this.form.reset()

                console.log(this.form);
            }
        }
    }
</script>
