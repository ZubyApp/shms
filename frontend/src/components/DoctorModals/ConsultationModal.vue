<script setup>
import { vMaska } from "maska"
import { computed, onMounted, ref } from "vue";

const modal = defineProps({
    id: String,
    title: String
})



onMounted(() => {
    // console.log(modal.id)
})

const consultationDetails = {
    "data": [
        {
            "id": 120,
            "date": "10-Jul-2023",
            "name": "Naomi",
            "bloodPressure": "120/80mmgh",
            "temperature": "37.6",
            "sugarLevel": "5.0mmlo",
            "respiratoryRate": "30",
            "pulseRate": 95,
            "height": "1.6m",
            "weight": "102kg",
            "activeUser": "Admin"
        },
        {
            "id": 119,
            "date": "08-Jul-2023",
            "client": "Helen",
            "bloodPressure": "145/90mmgh",
            "temperature": "36.5",
            "sugarLevel": "4.5mmlo",
            "respiratoryRate": "25",
            "pulseRate": 82,
            "height": "1.42m",
            "weight": "88kg",
            "activeUser": "Admin"
        },
        {
            "id": 118,
            "date": "08-Jul-2023",
            "client": "Tabitha",
            "bloodPressure": "90/60mmgh",
            "temperature": "39.0",
            "sugarLevel": "7.4mmlo",
            "respiratoryRate": "42",
            "pulseRate": 67,
            "height": "1.2m",
            "weight": "56kg",
            "activeUser": "Admin"
        },
        {
            "id": 117,
            "date": "08-Jul-2023",
            "client": "Adorable Event",
            "bloodPressure": "160/110mmgh",
            "temperature": "37.2",
            "sugarLevel": "5.0mmlo",
            "respiratoryRate": "32",
            "pulseRate": 80,
            "height": "1.45m",
            "weight": "96kg",
            "activeUser": "Admin"
        },
        {
            "id": 116,
            "date": "08-Jul-2023",
            "client": "Mrs Grace",
            "bloodPressure": "110/70mmgh",
            "temperature": "38.5",
            "sugarLevel": "3.8mmlo",
            "respiratoryRate": "30",
            "pulseRate": 75,
            "height": "1.32m",
            "weight": "77kg",
            "activeUser": "Admin"
        },
        {
            "id": 115,
            "date": "08-Jul-2023",
            "client": "CONESAM NG",
            "bloodPressure": "120/90mmgh",
            "temperature": "38.1",
            "sugarLevel": "5.6mmlo",
            "respiratoryRate": "27",
            "pulseRate": 88,
            "height": "1.5m",
            "weight": "103",
            "activeUser": "Admin"
        },
        {
            "id": 114,
            "date": "08-Jul-2023",
            "client": "ORENDA",
            "bloodPressure": "140/100mmgh",
            "temperature": "37.5",
            "sugarLevel": "9.0mmlo",
            "respiratoryRate": "29",
            "pulseRate": 90,
            "height": "1.3m",
            "weight": "65kg",
            "activeUser": "Admin"
        },
        {
            "id": 113,
            "date": "08-Jul-2023",
            "client": "Naomi",
            "bloodPressure": "125/70mmgh",
            "temperature": "39.2",
            "sugarLevel": "8.4mmlo",
            "respiratoryRate": "15Studio pictures",
            "pulseRate": 74,
            "height": "1.2m",
            "weight": "70kg",
            "activeUser": "Admin"
        },
        {
            "id": 112,
            "date": "07-Jul-2023",
            "client": "Casandra",
            "bloodPressure": "130/90mmgh",
            "temperature": "37.8",
            "sugarLevel": "3.4mmlo",
            "respiratoryRate": "32",
            "pulseRate": 80,
            "height": "1.35m",
            "weight": "67kg",
            "activeUser": "Admin"
        },
        {
            "id": 111,
            "date": "07-Jul-2023",
            "client": "Daniel",
            "bloodPressure": "150/100mmgh",
            "temperature": "36.9",
            "sugarLevel": "9.6mmlo",
            "respiratoryRate": "28",
            "pulseRate": 100,
            "height": "1.4m",
            "weight": "89kg",
            "activeUser": "Admin"
        }
    ],
}

const hash = '#'
const numbering = 1


</script>

<template>
    <div class="container">
        <div class="modal fade" :id="modal.id" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fs-4 text-primary">{{ modal.title }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <div class="mb-2">
                            <span class="fw-semibold">Previously Known Clinical Info</span>
                            <!-- first row -->
                            <div class="row">
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Bloodgroup</span>
                                        <select class="form-select form-select-md" aria-label="genotype" name="genotype">
                                            <option value="">Select</option>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Genotype</span>
                                        <select class="form-select form-select-md" aria-label="genotype" name="genotype">
                                            <option value="unknown">Select</option>
                                            <option value="AA">AA</option>
                                            <option value="AS">AS</option>
                                            <option value="SS">SS</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Stomach Ulcer?</span>
                                        <select class="form-select form-select-md" aria-label="stomach-ulcer"
                                            name="stomachUlcer">
                                            <option value="unknown">Select</option>
                                            <option value="no">No</option>
                                            <option value="no">Yes</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <!-- second row -->
                            <div class="row">
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Diabetic?</span>
                                        <select class="form-select form-select-md" aria-label="diabetic" name="diabetic">
                                            <option value="unknown">Select</option>
                                            <option value="no">No</option>
                                            <option value="no">Yes</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Hypertensive?</span>
                                        <select class="form-select form-select-md" aria-label="hypertensive"
                                            name="hypertensive">
                                            <option value="unknown">Select</option>
                                            <option value="no">No</option>
                                            <option value="no">Yes</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Atopy?</span>
                                        <textarea type="text" name="atopy" class="form-control" placeholder="list allergies"
                                            aria-label="atopy" aria-describedby="basic-addon1"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-for="detail in consultationDetails.data" :key="detail.id">
                            <div class="d-flex justify-content-center mb-1 text-outline-primary input-group-text text-center"
                                data-bs-toggle="collapse"  :href="hash+'collapseExample'+detail.id" role="button" aria-expanded="false"
                                aria-controls="collapseExample">
                                <span class="mx-2">Consultation {{ numbering++ }}</span>
                                <i class="bi bi-chevron-double-down text-primary"> </i>
                            </div>
                            <div class="collapse"  :id="'collapseExample'+ detail.id" >
                                <div class="card card-body">
                                    <div class="mb-2">
                                        <span class="fw-semibold">Vital Signs</span>
                                        <!-- first row -->
                                        <div class="row">
                                            <div class="col-xl-4 themed-grid-col">
                                                <div class="input-group mb-1">
                                                    <span class="input-group-text" id="blood-pressure">Blood Pressure</span>
                                                    <input type="text" name="blood-pressure"
                                                        class="form-control" 
                                                        aria-label="bloodPressure" aria-describedby="basic-addon1"
                                                        :value="detail.bloodPressure"> 
                                                </div>
                                            </div>
                                            <div class="col-xl-4 themed-grid-col">
                                                <div class="input-group mb-1">
                                                    <span class="input-group-text" id="temperature">Temperature</span>
                                                    <input type="text" name="temperature"
                                                        class="form-control" 
                                                        aria-label="temperature" aria-describedby="basic-addon1"
                                                        :value="detail.temperature"> 
                                                </div>
                                            </div>
                                            <div class="col-xl-4 themed-grid-col">
                                                <div class="input-group mb-1">
                                                    <span class="input-group-text" id="sugar-level">Sugar Level</span>
                                                    <input type="text" name="sugar-level"
                                                        class="form-control" 
                                                        aria-label="sugar-level" aria-describedby="basic-addon1"
                                                        :value="detail.sugarLevel"> 
                                                </div>
                                            </div>
                                            <div class="col-xl-4 themed-grid-col">
                                                <div class="input-group mb-1">
                                                    <span class="input-group-text" id="pulse-rate">Pulse Rate</span>
                                                    <input type="text" name="pulse-rate"
                                                        class="form-control" 
                                                        aria-label="pulseRate" aria-describedby="basic-addon1"
                                                        :value="detail.pulseRate"> 
                                                </div>
                                            </div>
                                            <div class="col-xl-4 themed-grid-col">
                                                <div class="input-group mb-1">
                                                    <span class="input-group-text" id="respiratory-rate">Respiratory Rate</span>
                                                    <input type="text" name="respiratory-rate"
                                                        class="form-control" 
                                                        aria-label="respiratoryRate" aria-describedby="basic-addon1"
                                                        :value="detail.respiratoryRate"> 
                                                </div>
                                            </div>
                                            <div class="col-xl-4 themed-grid-col">
                                                <div class="input-group mb-1">
                                                    <span class="input-group-text" id="patient-height">Patient Height</span>
                                                    <input type="text" name="patient-height"
                                                        class="form-control" 
                                                        aria-label="patientHeight" aria-describedby="basic-addon1"
                                                        :value="detail.height"> 
                                                </div>
                                            </div>
                                            <div class="col-xl-4 themed-grid-col">
                                                <div class="input-group mb-1">
                                                    <span class="input-group-text" id="">Patient weight</span>
                                                    <input type="text" name="patient-weight"
                                                        class="form-control" 
                                                        aria-label="patientWeight" aria-describedby="basic-addon1"
                                                        :value="detail.weight"> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer px-5">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            <i class="bi bi-x-circle me-1"></i>
                        Close
                    </button>
                    <button type="button" class="btn bg-primary text-white register-patient-btn">
                        <i class="bi bi-check-circle me-1"></i>
                        Register
                    </button>
                </div>
            </div>
        </div>
    </div>
</div></template>
