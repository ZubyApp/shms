<script setup>
import DataTableVue3 from 'datatables.net-vue3'
import DataTablesBs5 from 'datatables.net-bs5'
import { onMounted, reactive, ref } from 'vue'
import PatientModal from '../components/PatientModals/PatientModal.vue'
import DetailsPatientsModal from '../components/PatientModals/DetailsPatientsModal.vue'
import SponsorsModal from '../components/SponsorsModal.vue'
import { Modal } from 'bootstrap'
import { clearValues } from '../helpers/formhelper'

DataTableVue3.use(DataTablesBs5)

let allPatientsDatatable
let ActivePatientsDatatable
let sponsorsDatatable
const allPatientsTable = ref()
const ActivePatientsTable = ref()
const sponsorsTable = ref()

const state = reactive({
    patientModal: {
        register: {
            data: [],
            btn: null,
            id: "registerPatientModal",
            title: "Register Patient"
        },
        update: {
            data: [],
            btn: null,
            id: "updatePatientModal",
            title: "Update Patient"
        },
        details: {
            data: [],
            btn: null,
            id: "detailsPatientModal",
            title: "Details"
        }
    },
    sponsorModal: {
        create: {
            data: [],
            btn: null,
            id: "createSponsorModal",
            title: "Create Sponsor"
        },
        update: {
            data: [],
            btn: null,
            id: "updateSponsorModal",
            title: "Update Sponsor"
        },
        details: {
            data: [],
            btn: null,
            id: "detailsSponsorModal",
            title: "Details"
        },
    }
})


const drawPatientsTables = () => {
    allPatientsDatatable = allPatientsTable.value.dt
    ActivePatientsDatatable = ActivePatientsTable.value.dt

    allPatientsDatatable.draw()
    ActivePatientsDatatable.draw()
    console.log('drawn patients')
}

const drawSponsorsTable = () => {
    sponsorsDatatable = sponsorsTable.value.dt
    sponsorsDatatable.draw()
    console.log('drawn sponsors')
}

onMounted(() => {
    state.patientModal.register = new Modal('#registerPatientModal', {

    })

    state.patientModal.update = new Modal('#updatePatientModal', {

    })

    state.patientModal.details = new Modal('#detailsPatientModal', {

    })

    state.sponsorModal.create = new Modal('#createSponsorModal', {

    })

    state.sponsorModal.update = new Modal('#updateSponsorModal', {

    })

    state.sponsorModal.details = new Modal('#detailsSponsorModal', {

    })

    state.patientModal.register.btn = state.patientModal.register._element.querySelector('.register-patient-btn')
    state.patientModal.update.btn = state.patientModal.update._element.querySelector('.update-patient-btn')
    state.sponsorModal.create.btn = state.sponsorModal.create._element.querySelector('.create-sponsor-btn')
    state.sponsorModal.update.btn = state.sponsorModal.update._element.querySelector('.update-sponsor-btn')

    state.patientModal.register.btn.addEventListener('click', function () {
        const data = getModalFormData(state.patientModal.register)
        console.log(data)
        state.patientModal.register.hide()
        clearValues(state.patientModal.register)
    })
    state.patientModal.update.btn.addEventListener('click', function () {
        const data = getModalFormData(state.patientModal.update)
        console.log(data)
        state.patientModal.update.hide()
    })

    state.sponsorModal.create.btn.addEventListener('click', function () {
        const data = getModalFormData(state.sponsorModal.create)
        state.sponsorModal.create.hide()
        console.log(data)
        clearValues(state.sponsorModal.create)

    })

    state.sponsorModal.update.btn.addEventListener('click', function () {
        const data = getModalFormData(state.sponsorModal.update)
        state.sponsorModal.update.hide()
        console.log(data)
    })

    setTimeout(() => {
        document.querySelector('#DataTables_Table_1').addEventListener('click', function (event) {
            const updatePatientBtn = event.target.closest('.edit-patient-btn')
            const deletePatientBtn = event.target.closest('.delete-patient-btn')
            const patientDetailsBtn = event.target.closest('.patient-details')

            if (updatePatientBtn) {
                state.patientModal.update.show()
            }

            if (deletePatientBtn) {
                confirm('Are you sure you want to delete this patient?')
            }

            if (patientDetailsBtn) {
                state.patientModal.details.show()
            }

        })

        document.querySelector('#DataTables_Table_2').addEventListener('click', function (event) {
            const editSponsorBtn = event.target.closest('.edit-sponsor-btn')
            const deleteSponsorBtn = event.target.closest('.delete-sponsor-btn')
            const sponsorDetailsBtn = event.target.closest('.sponsor-details')

            if (editSponsorBtn) {
                state.sponsorModal.update.show()
            }

            if (deleteSponsorBtn) {
                confirm('Are you sure you want to delete this sponsor?')
            }

            if (sponsorDetailsBtn) {
                state.sponsorModal.details.show()
            }

        })

        document.querySelector('#DataTables_Table_3').addEventListener('click', function (event) {
            const editPatientBtn = event.target.closest('.edit-patient-btn')
            const deletePatientBtn = event.target.closest('.delete-patient-btn')
            const patientDetailsBtn = event.target.closest('.patient-details')

            if (editPatientBtn) {
                state.patientModal.update.show()
            }

            if (deletePatientBtn) {
                confirm('Are you sure you want to delete this patient?')
            }

            if (patientDetailsBtn) {
                state.patientModal.details.show()
            }

        })


    }, 3000)
})

function openPatientModal() {
    state.patientModal.register.show()
}

function openSponsorModal() {
    state.sponsorModal.create.show()
}

function getModalFormData(modal) {
    let data = {}
    const fields = [
        ...modal._element.querySelectorAll('input,select,textarea')
    ]

    fields.forEach(select => {
        data[select.name] = select.value
    })

    return data
}

const data = [
    ['<a role="button" class="text-decoration-none patient-details" href="#">Chioma Jessica Okeke</a>', '08034241243', 'female', '13/sept/1991', 'Cash', 'Self', 'Inactive', `<div class="d-flex flex-"><button class="btn btn-outline-primary edit-patient-btn"><i class="bi bi-pencil-fill"></i></button><button class="ms-1 btn btn-outline-primary delete-patient-btn"><i class="fa fa-minus-circle" aria-hidden="true"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="bi bi-arrow-90deg-right"></i></i></button></div>`],
    ['David Ayuba Baba', '08054241298', 'male', '01/june/1996', 'Credit', 'HMO', 'Active', `<div class="d-flex flex-"><button class="btn btn-outline-primary"><i class="bi bi-pencil-fill"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="fa fa-minus-circle" aria-hidden="true"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="bi bi-arrow-90deg-right"></i></i></button></div>`],
    ['Mimidoo Monica Odue', '08034241243', 'female', '13/sept/1991', 'Cash', 'Self', 'Inactive', `<div class="d-flex flex-"><button class="btn btn-outline-primary"><i class="bi bi-pencil-fill"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="fa fa-minus-circle" aria-hidden="true"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="bi bi-arrow-90deg-right"></i></i></button></div>`],
    ['Precious Ori Odumu', '08054241298', 'female', '01/june/1996', 'Credit', 'HMO', 'Active', `<div class="d-flex flex-"><button class="btn btn-outline-primary"><i class="bi bi-pencil-fill"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="fa fa-minus-circle" aria-hidden="true"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="bi bi-arrow-90deg-right"></i></i></button></div>`],
    ['Olu Olamide Tayosi', '08034241243', 'female', '13/sept/1991', 'Cash', 'Self', 'Inactive', `<div class="d-flex flex-"><button class="btn btn-outline-primary"><i class="bi bi-pencil-fill"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="fa fa-minus-circle" aria-hidden="true"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="bi bi-arrow-90deg-right"></i></i></button></div>`],
    ['Collins Adeke Ujah', '08054241298', 'male', '01/june/1996', 'Credit', 'HMO', 'Active', `<div class="d-flex flex-"><button class="btn btn-outline-primary"><i class="bi bi-pencil-fill"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="fa fa-minus-circle" aria-hidden="true"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="bi bi-arrow-90deg-right"></i></i></button></div>`],
    ['Zakari Ahmed Musa', '08034241243', 'female', '13/sept/1991', 'Cash', 'Self', 'Inactive', `<div class="d-flex flex-"><button class="btn btn-outline-primary"><i class="bi bi-pencil-fill"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="fa fa-minus-circle" aria-hidden="true"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="bi bi-arrow-90deg-right"></i></i></button></div>`],
    ['Ogri Uba Ohimini', '08054241298', 'male', '01/june/1996', 'Credit', 'HMO', 'Active', `<div class="d-flex flex-"><button class="btn btn-outline-primary"><i class="bi bi-pencil-fill"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="fa fa-minus-circle" aria-hidden="true"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="bi bi-arrow-90deg-right"></i></i></button></div>`],
    ['Ifeanyi Peter Mba', '08034241243', 'male', '13/sept/1991', 'Cash', 'Self', 'Active', `<div class="d-flex flex-"><button class="btn btn-outline-primary"><i class="bi bi-pencil-fill"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="fa fa-minus-circle" aria-hidden="true"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="bi bi-arrow-90deg-right"></i></i></button></div>`],
    ['Ifeanyi John Okafor', '08034241243', 'male', '13/sept/1991', 'Cash', 'Self', 'Active', `<div class="d-flex flex-"><button class="btn btn-outline-primary"><i class="bi bi-pencil-fill"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="fa fa-minus-circle" aria-hidden="true"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="bi bi-arrow-90deg-right"></i></i></button></div>`],
    ['Ifeanyi Jonas Uche', '08034241243', 'male', '13/sept/1991', 'Cash', 'Self', 'Active', `<div class="d-flex flex-"><button class="btn btn-outline-primary"><i class="bi bi-pencil-fill"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="fa fa-minus-circle" aria-hidden="true"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="bi bi-arrow-90deg-right"></i></i></button></div>`],
    ['Ifeanyi James Ibe', '08034241243', 'male', '13/sept/1991', 'Cash', 'Self', 'Active', `<div class="d-flex flex-"><button class="btn btn-outline-primary"><i class="bi bi-pencil-fill"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="fa fa-minus-circle" aria-hidden="true"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="bi bi-arrow-90deg-right"></i></i></button></div>`],
    ['Terso Ayu Gbaso', '08054241298', 'male', '01/june/1996', 'Credit', 'HMO', 'Active', `<div class="d-flex flex-"><button class="btn btn-outline-primary"><i class="bi bi-pencil-fill"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="fa fa-minus-circle" aria-hidden="true"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="bi bi-arrow-90deg-right"></i></i></button></div>`],
    ['Patrick Arome', '08054241298', 'male', '01/june/1981', 'Credit', 'HMO', 'Active', `<div class="d-flex flex-"><button class="btn btn-outline-primary"><i class="bi bi-pencil-fill"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="fa fa-minus-circle" aria-hidden="true"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="bi bi-arrow-90deg-right"></i></i></button></div>`],
]

const data2 = [
    ['<a role="button" class="text-decoration-none patient-details" href="#">David Ayuba Baba</a>', '08054241298', 'male', '01/june/1996', 'Credit', 'HMO', 'Active', `<div class="d-flex flex-"><button  class="btn btn-outline-primary edit-patient-btn"><i class="bi bi-pencil-fill"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-patient-btn"><i class="fa fa-minus-circle" aria-hidden="true"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="bi bi-arrow-90deg-right"></i></i></button></div>`],
    ['Mimidoo Monica Odue', '08034241243', 'female', '13/sept/1991', 'Cash', 'Self', 'Inactive', `<div class="d-flex flex-"><button class="btn btn-outline-primary"><i class="bi bi-pencil-fill"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="fa fa-minus-circle" aria-hidden="true"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="bi bi-arrow-90deg-right"></i></i></button></div>`],
    ['Precious Ori Odumu', '08054241298', 'female', '01/june/1996', 'Credit', 'HMO', 'Active', `<div class="d-flex flex-"><button class="btn btn-outline-primary"><i class="bi bi-pencil-fill"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="fa fa-minus-circle" aria-hidden="true"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="bi bi-arrow-90deg-right"></i></i></button></div>`],
    ['<a role="button" class="text-decoration-none patient-details" href="#">Collins Adeke Ujah</a>', '08054241298', 'male', '01/june/1996', 'Credit', 'HMO', 'Active', `<div class="d-flex flex-"><button class="btn btn-outline-primary edit-patient-btn"><i class="bi bi-pencil-fill"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="fa fa-minus-circle" aria-hidden="true"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="bi bi-arrow-90deg-right"></i></i></button></div>`],
    ['Ogri Uba Ohimini', '08054241298', 'male', '01/june/1996', 'Credit', 'HMO', 'Active', `<div class="d-flex flex-"><button class="btn btn-outline-primary"><i class="bi bi-pencil-fill"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="fa fa-minus-circle" aria-hidden="true"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="bi bi-arrow-90deg-right"></i></i></button></div>`],
    ['Terso Ayu Gbaso', '08054241298', 'male', '01/june/1996', 'Credit', 'HMO', 'Aactive', `<div class="d-flex flex-"><button class="btn btn-outline-primary"><i class="bi bi-pencil-fill"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="fa fa-minus-circle" aria-hidden="true"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="bi bi-arrow-90deg-right"></i></i></button></div>`],
]

const sponsorData = [
    ['<a role="button" class="text-decoration-none sponsor-details" href="#">Avon</a>', 'Credit', 'HMO', '100%', 'Yes', 'N/A', `<div class="d-flex flex-"><button class="btn btn-outline-primary edit-sponsor-btn"><i class="bi bi-pencil-fill"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-sponsor-btn"><i class="fa fa-minus-circle" aria-hidden="true"></i></button></div>`],
    ['Police', 'Cash', 'NHIS', '10%', 'No', 'N/A', `<div class="d-flex flex-"><button class="btn btn-outline-primary"><i class="bi bi-pencil-fill"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="fa fa-minus-circle" aria-hidden="true"></i></button></div>`],
    ['Roding', 'Credit', 'HMO', '100%', 'Yes', 'N/A', `<div class="d-flex flex-"><button class="btn btn-outline-primary"><i class="bi bi-pencil-fill"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="fa fa-minus-circle" aria-hidden="true"></i></button></div>`],
    ['Oketa', 'Cash', 'Family', '40%', 'Yes', '3500', `<div class="d-flex flex-"><button class="btn btn-outline-primary"><i class="bi bi-pencil-fill"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="fa fa-minus-circle" aria-hidden="true"></i></button></div>`],
    ['Fidelity Pensions', 'Credit', 'Company/Org', '100%', 'Yes', 'N/A', `<div class="d-flex flex-"><button class="btn btn-outline-primary"><i class="bi bi-pencil-fill"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="fa fa-minus-circle" aria-hidden="true"></i></button></div>`],
    ['Musa Aziz', 'Cash', 'Family', '40%', 'Yes', '3500', `<div class="d-flex flex-"><button class="btn btn-outline-primary"><i class="bi bi-pencil-fill"></i></button><button type="submit" class="ms-1 btn btn-outline-primary delete-jobtype-btn"><i class="fa fa-minus-circle" aria-hidden="true"></i></button></div>`],
]
</script>



<template>
    <PatientModal :id="state.patientModal.register.id" title="Register Patient" :isUpdate=false />
    <PatientModal :id="state.patientModal.update.id" title="Update Patient" :isUpdate=true />
    <DetailsPatientsModal :id="state.patientModal.details.id" title="Details" />
    <SponsorsModal :id="state.sponsorModal.create.id" title="Create Sponsor" :isUpdate=false />
    <SponsorsModal :id="state.sponsorModal.update.id" title="Update Sponsor" :isUpdate=true />
    <SponsorsModal :id="state.sponsorModal.details.id" title="Details" :isUpdate=true />

    <div class="container p-1 mt-5">
        <div class="text-start mb-4">
            <button type="button" @click="openPatientModal" class="btn btn-primary text-white">
                <i class="bi bi-plus-circle me-1"></i>
                New Patient
            </button>
            <button type="button" @click="openSponsorModal" class="btn btn-primary text-white mx-2">
                <i class="bi bi-plus-circle me-1"></i>
                New Sponsor
            </button>
        </div>

        <div>
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link active" @click="drawPatientsTables" id="nav-home-tab" data-bs-toggle="tab"
                        data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                        aria-selected="true">Patients</button>
                    <button class="nav-link" @click="drawSponsorsTable" id="nav-profile-tab" data-bs-toggle="tab"
                        data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile"
                        aria-selected="false">Sponsors</button>
                    <button class="nav-link" @click="drawPatientsTables" id="nav-contact-tab" data-bs-toggle="tab"
                        data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact"
                        aria-selected="false">Active</button>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <!-- patients table -->
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"
                    tabindex="0">
                    <div class="py-4">
                        <DataTableVue3 :data="data" ref="allPatientsTable"
                            class="table table-hover table-striped align-middle table-lg">
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
                </div>
                <!-- sponsors table -->
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                    <div class="py-4 ">
                        <DataTableVue3 :data="sponsorData" ref="sponsorsTable"
                            class="table table-hover align-middle table-sm">
                            <thead>
                                <tr>
                                    <th>Sponsor Name</th>
                                    <th>Payment Category</th>
                                    <th>Sponsor Category</th>
                                    <th>Payment Matrix</th>
                                    <th>Balance Required?</th>
                                    <th>Registration Bill</th>
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
                                </tr>
                            </tfoot>
                        </DataTableVue3>
                    </div>
                </div>
                <!-- active table -->
                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                    <div class="py-4">
                        <DataTableVue3 :data="data2" ref="ActivePatientsTable" class="table table-hover table-sm">
                            <thead>
                                <tr>
                                    <th style="width: 100px;rem">Name</th>
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
                </div>
            </div>
    </div>
</div></template>