<template>
    <AppLayout>
        <div class="row justify-content-center">
            <div class="col-8">
                <div class="card mt-3">
           <div class="card-header">
              <div class="d-flex justify-content-between">
                   <h3>Student List</h3>
                   <button class="btn btn-primary">Create</button>
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
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>
                                <a href="#" class="btn btn-primary">Edit</a>
                                <a href="#" class="btn btn-danger">Delete</a>
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

export default {
    components: {
        AppLayout
    }
}
</script>
