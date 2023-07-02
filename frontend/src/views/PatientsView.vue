<script setup>
import DataTable from 'datatables.net-dt'
import { Modal } from 'bootstrap';
import { onMounted } from 'vue'


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
    const table = new DataTable('#patientsTable', {
                    data: data
    })
})




</script>



<template>

    <div class="container mt-5">
                <table id="patientsTable" class="compact stripe row-border hover compact ">
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
                </table>
            </div>
</template>