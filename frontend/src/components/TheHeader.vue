<script setup>
import DataTableVue3 from 'datatables.net-vue3'
import DataTablesBs5 from 'datatables.net-bs5'
import { RouterLink } from 'vue-router'
import { onMounted, reactive, ref } from 'vue';

DataTableVue3.use(DataTablesBs5)

let dt
const table = ref()
 
const drawNotification = () => {
    dt = table.value.dt;
    console.log("function drew", dt.draw)
   }
   
onMounted(function () {
    //drawNotification()
})

const data = reactive([
    ['Approve for Kemisola Avon'],
    ['Approve for Dickson Life Action'],
    ['Approve for Maria Axa Mansard'],
    ['Approve for Terfa Roding'],
])

const num = reactive({
    num: 0
})

const options = {
        lengthChange: false,
        paging: false,
        searching: false,
        orderMulti: false,
        ordering: false,
        info: false,
    }

const addNotification = () => {
    console.log('clicked')

      data.push([`<a type="submit" class="ms-1 text-decoration-none py-2">Approve for John Leadway ${num.num++}</a>`])
    }


</script>

<template>
        <div class="container">
            <header class="border-bottom lh-1 py-3">
                <div class="row flex-nowrap justify-content-between align-items-center">
                    <div class="col-6 text-start text-primary">
                        <RouterLink to="/" class="blog-header-logo text-decoration-none fs-1"><i class="bi bi-hospital"></i><span class="fw-bold pl-4"> S</span>andra <span class="fw-bold pl-4">H</span>ospital</RouterLink>
                    </div>
                    <div class="col-6 d-flex justify-content-end align-items-center">
                    <div class="btn-group mx-2">
                    <button type="button" @click="drawNotification" class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-bell-fill"></i>
                    </button>
                    <ul class="dropdown-menu p-0">
                        <div>
                            <DataTableVue3
                            :data="data" 
                            :options="options"
                            ref="table"
                            class="table table-striped table-hover table-responsive p-0">
                                <thead>
                                    <tr>
                                        <th>Notifications</th>
                                    </tr>
                                </thead>
                                <tbody></tbody>
                            </DataTableVue3>
                        </div>
                    </ul>
                    </div>
                        <a class="btn btn-outline-primary" @click="addNotification" href="#">Login</a>
                    </div>
                </div>
            </header>

            <div class="nav-scroller py-1 mb-3 border-bottom">
                <nav class="nav nav-underline justify-content-between fs-5 fw-semibold">
                    <RouterLink to="/patients" active-class="active" class="nav-item nav-link link-body-emphasis">Patients</RouterLink>
                    <RouterLink to="/doctors" class="nav-item nav-link link-body-emphasis">Doctors</RouterLink>
                    <a class="nav-item nav-link link-body-emphasis" href="#">Nurses</a>
                    <a class="nav-item nav-link link-body-emphasis" href="#">Laboratory</a>
                    <a class="nav-item nav-link link-body-emphasis" href="#">Pharmacy</a>
                    <a class="nav-item nav-link link-body-emphasis" href="#">HMO Desk</a>
                    <a class="nav-item nav-link link-body-emphasis" href="#">Reception</a>
                    <!-- <a class="nav-item nav-link link-body-emphasis" href="#">Resources</a>
                    <a class="nav-item nav-link link-body-emphasis" href="#">Admin</a>
                    <a class="nav-item nav-link link-body-emphasis" href="#">Reports</a> -->
                    <!-- <a class="nav-item nav-link link-body-emphasis" href="#">More</a> -->
                </nav>
        </div>
    </div>
</template>


<style scoped>
.blog-header-logo {
    font-family: "Playfair Display", Georgia, "Times New Roman", serif, sans-serif;
}
/* .nav-scroller {
    position: relative;
    z-index: 2;
    height: 3.75rem;
    overflow-y: hidden;
} */

/* .nav-scroller .nav {
    display: flex;
    flex-wrap: nowrap;
    padding-bottom: 1rem;
    margin-top: -1px;
    overflow-x: auto;
    text-align: center;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
} */

</style>
