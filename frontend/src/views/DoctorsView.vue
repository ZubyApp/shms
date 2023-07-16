<script setup>
import DataTableVue3 from 'datatables.net-vue3'
import DataTablesBs5 from 'datatables.net-bs5'
import { onMounted, reactive, ref } from 'vue'
import { Modal } from 'bootstrap'
import { clearValues } from '../helpers/formhelper'
import newConsultationModal from '../components/DoctorModals/NewConsultationModal.vue';

DataTableVue3.use(DataTablesBs5)

const waitingListTable = ref()

const state = reactive({
    consultationModal: {
        new: {
            data: [],
            btn: null,
            id: "registerPatientModal",
            title: "Register Patient"
        }
    }
})

const options = {
        lengthChange: false,
        paging: false,
        searching: false,
        orderMulti: false,
        ordering: false,
        info: false,
    }

onMounted(() => {

    state.consultationModal.new = new Modal('#newConsultationModal', {

    })

    document.querySelector('#DataTables_Table_1').addEventListener('click', function (event) {
            const consultBtn = event.target.closest('.consult-btn')
            // const deletePatientBtn = event.target.closest('.delete-patient-btn')
            // const patientDetailsBtn = event.target.closest('.patient-details-btn')
            // const initiatePatientBtn = event.target.closest('.initiate-patient-btn')

            if (consultBtn) {
                state.consultationModal.new.show()
            }

            // if (deletePatientBtn) {
            //     confirm('Are you sure you want to delete this patient?')
            // }

            // if (patientDetailsBtn) {
            //     state.patientModal.details.show()
            // }

            // if (initiatePatientBtn) {
            //     state.initiatePatientModal.show()
            // }

        })
})

const waitingList = [
    ['James Adoga', '37', 'Avon', '<button class="btn btn-outline-primary consult-btn"><i class="bi bi-clipboard-plus"></i></button>'],
    ['Amah Williams', '17', 'Avon', '<button class="btn btn-outline-primary edit-patient-btn"><i class="bi bi-clipboard-plus"></i></button>'],
    ['Stephen Uche', '45', 'Avon', '<button class="btn btn-outline-primary edit-patient-btn"><i class="bi bi-clipboard-plus"></i></button>'],
    ['Jack Ocholi', '29', 'Avon', '<button class="btn btn-outline-primary edit-patient-btn"><i class="bi bi-clipboard-plus"></i></button>'],
    ['Terwase Adzega Terngu', '55', 'Terngu Family', '<button class="btn btn-outline-primary edit-patient-btn"><i class="bi bi-clipboard-plus"></i></button>']
]

</script>

<template>
    <newConsultationModal id="newConsultationModal" title="New Consultation" :isUpdate=false />
    <div class="container p-1 mt-5">
        <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">List of Waiting Patients</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="py-4 ">

                        <DataTableVue3 ref="waitingListTable"
                            :data="waitingList"
                            :options="options"
                            class="table table-hover align-middle table-sm bg-primary">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Sponsor</th>
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
                                </tr>
                            </tfoot>
                        </DataTableVue3>
                    </div>
            </div>
        </div>

        <div class="text-start mb-4">
            <button class="btn btn-primary text-white" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                <i class="bi bi-list-check"></i>
                Waiting List
            </button>
            <!-- <button type="button" @click="openPatientModal" class="btn btn-primary text-white mx-2">
                <i class="bi bi-plus-circle me-1"></i>
                New Patient
            </button>
            <button type="button" @click="openSponsorModal" class="btn btn-primary text-white">
                <i class="bi bi-plus-circle me-1"></i>
                New Sponsor
            </button> -->
        </div>

        <div>
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link active" @click="drawPatientsTables" id="nav-home-tab" data-bs-toggle="tab"
                        data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                        aria-selected="true">All Patients Consultations</button>
                    <button class="nav-link" @click="drawSponsorsTable" id="nav-profile-tab" data-bs-toggle="tab"
                        data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile"
                        aria-selected="false">Sponsors</button>
                    <button class="nav-link" @click="drawPatientsTables" id="nav-contact-tab" data-bs-toggle="tab"
                        data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact"
                        aria-selected="false">Your Patients Consultations</button>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <!-- patients table -->
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"
                    tabindex="0">
                    <div class="py-4">
                        <DataTableVue3  ref="allPatientsTable"
                            class="table table-hover align-middle table-sm">
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
                        <DataTableVue3  ref="sponsorsTable"
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
                        <DataTableVue3  ref="ActivePatientsTable" class="table table-hover table-sm">
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
    </div>
</template>

<style scoped>

</style>