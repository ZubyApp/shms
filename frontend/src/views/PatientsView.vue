<script setup>
import DataTableVue3 from 'datatables.net-vue3'
import DataTablesBs5 from 'datatables.net-bs5'
import { onMounted, ref } from 'vue'
import PatientsModal from '../components/PatientsModal.vue'
import SponsorsModal from '../components/SponsorsModal.vue'


DataTableVue3.use(DataTablesBs5)

let datatable
const table = ref()

const drawNotification = () => {
    datatable = table.value.dt;
    console.log("function drew", datatable.draw)
}

const data = [
    ['Chioma Jessica Okeke', '08034241243', 'female', '13/sept/1991', 'Cash', 'Self', 'Inactive', '<a href="#">Edit Delete</a>'],
    ['David Ayuba Baba', '08054241298', 'male', '01/june/1996', 'Credit', 'HMO', 'Active', '<a href="#">Edit Delete</a>'],
    ['Chioma Jessica Okeke', '08034241243', 'female', '13/sept/1991', 'Cash', 'Self', 'Inactive', '<a href="#">Edit Delete</a>'],
    ['David Ayuba Baba', '08054241298', 'male', '01/june/1996', 'Credit', 'HMO', 'Active', '<a href="#">Edit Delete</a>'],
    ['Chioma Jessica Okeke', '08034241243', 'female', '13/sept/1991', 'Cash', 'Self', 'Inactive', '<a href="#">Edit Delete</a>'],
    ['David Ayuba Baba', '08054241298', 'male', '01/june/1996', 'Credit', 'HMO', 'Active', '<a href="#">Edit Delete</a>'],
    ['Chioma Jessica Okeke', '08034241243', 'female', '13/sept/1991', 'Cash', 'Self', 'Inactive', '<a href="#">Edit Delete</a>'],
    ['David Ayuba Baba', '08054241298', 'male', '01/june/1996', 'Credit', 'HMO', 'Active', '<a href="#">Edit Delete</a>'],
    ['Chioma Jessica Okeke', '08034241243', 'female', '13/sept/1991', 'Cash', 'Self', 'Inactive', '<a href="#">Edit Delete</a>'],
    ['David Ayuba Baba', '08054241298', 'male', '01/june/1996', 'Credit', 'HMO', 'Active', '<a href="#">Edit Delete</a>'],
]

onMounted(() => {

})




</script>



<template>
    

    <PatientsModal /> 
    <SponsorsModal id="newSponsorModal" title="Create Sponsor" />

    <div class="container mt-5">
        <div class="text-start my-4">
            <button type="button" class="btn btn-primary text-white" data-bs-toggle="modal"
                data-bs-target="#newPatientModal">
                <i class="bi bi-plus-circle me-1"></i>
                New Patient
            </button>
            <button type="button" class="btn btn-primary text-white mx-2" data-bs-toggle="modal"
                data-bs-target="#newSponsorModal">
                <i class="bi bi-plus-circle me-1"></i>
                New Sponsor
            </button>
        </div>
        
        <DataTableVue3 :data="data" ref="table" class="table table-striped display">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Sex</th>
                    <th>DOB</th>
                    <th>Sponsor Cat</th>
                    <th>Sponsor</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody></tbody>
            <tfoot class="fw-bolder text-primary">
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tfoot>
        </DataTableVue3>
    </div>
</template>