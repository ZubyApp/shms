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
                            <span class="fw-semibold">Bio</span>
                            <!-- first row -->
                            <div class="row">
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Patient</span>
                                        <input type="text" name="firstName" class="p-0 form-control input-group-text"
                                            placeholder="" aria-label="first-name" aria-describedby="basic-addon1"
                                            value="SH21/0980 Selena Okoma Obaze" readonly>
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Age</span>
                                        <input type="text" name="middleName" class="form-control input-group-text"
                                            placeholder="" aria-label="middleName" aria-describedby="basic-addon1"
                                            value="31" readonly>
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Sex</span>
                                        <input type="text" name="surename" class="form-control input-group-text"
                                            placeholder="" aria-label="Client name" aria-describedby="basic-addon1"
                                            value="Female" readonly>
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Sponsor</span>
                                        <input type="text" name="surename" class="form-control input-group-text"
                                            placeholder="" aria-label="Client name" aria-describedby="basic-addon1"
                                            value="Axe Mansard" readonly>
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Marital Status</span>
                                        <input type="text" name="surename" class="form-control input-group-text"
                                            placeholder="" aria-label="Client name" aria-describedby="basic-addon1"
                                            value="Married" readonly>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                            <option value="O+" selected>O+</option>
                                            <option value="O-">O-</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Genotype</span>
                                        <select class="form-select form-select-md" aria-label="genotype" name="genotype">
                                            <option value="unknown">Select</option>
                                            <option value="AA" selected>AA</option>
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
                                            <option value="no" selected>No</option>
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
                                            <option value="no" selected>No</option>
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
                                            <option value="no" selected>No</option>
                                            <option value="no">Yes</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Atopy?</span>
                                        <textarea type="text" name="atopy" class="form-control" aria-label="atopy"
                                            aria-describedby="basic-addon1" value="Asthsma">Asthma</textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <span class="fw-semibold">Vital Signs</span>
                            <!-- first row -->
                            <div class="row">
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="blood-pressure">Blood Pressure</span>
                                        <input type="text" name="blood-pressure" class="form-control"
                                            aria-label="bloodPressure" aria-describedby="basic-addon1" value="120/80mmgh">
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="temperature">Temperature</span>
                                        <input type="text" name="temperature" class="form-control" aria-label="temperature"
                                            aria-describedby="basic-addon1" value="36.9°C">
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="sugar-level">Sugar Level</span>
                                        <input type="text" name="sugar-level" class="form-control" aria-label="sugar-level"
                                            aria-describedby="basic-addon1" value="5.5mgmmol/L">
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="pulse-rate">Pulse Rate</span>
                                        <input type="text" name="pulse-rate" class="form-control" aria-label="pulseRate"
                                            aria-describedby="basic-addon1" value="74">
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="respiratory-rate">Respiratory Rate</span>
                                        <input type="text" name="respiratory-rate" class="form-control"
                                            aria-label="respiratoryRate" aria-describedby="basic-addon1" value="32">
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="patient-height">Patient Height</span>
                                        <input type="text" name="patient-height" class="form-control"
                                            aria-label="patientHeight" aria-describedby="basic-addon1" value="1.6m">
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="">Patient weight</span>
                                        <input type="text" name="patient-weight" class="form-control"
                                            aria-label="patientWeight" aria-describedby="basic-addon1" value="86kg">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <span class="fw-semibold">Consultation</span>
                            <div class="row">
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Presenting <br> Complain</span>
                                        <textarea type="text" name="atopy" class="form-control" aria-label="atopy"
                                            aria-describedby="basic-addon1" value="Asthsma"></textarea>
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">History of Presenting <br>
                                            Complain</span>
                                        <textarea type="text" name="atopy" class="form-control" aria-label="atopy"
                                            aria-describedby="basic-addon1" value="Asthsma"></textarea>
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Past Medical/<br>Surgical
                                            History</span>
                                        <textarea type="text" name="atopy" class="form-control" aria-label="atopy"
                                            aria-describedby="basic-addon1" value="Asthsma"></textarea>
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Obstetrics/<br>Gynecological
                                            History</span>
                                        <textarea type="text" name="atopy" class="form-control" aria-label="atopy"
                                            aria-describedby="basic-addon1" value="Asthsma"></textarea>
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Examination<br>Findings</span>
                                        <textarea type="text" name="atopy" class="form-control" aria-label="atopy"
                                            aria-describedby="basic-addon1" value="Asthsma"></textarea>
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Diagnosis</span>
                                        <textarea type="text" name="atopy" class="form-control" aria-label="atopy"
                                            aria-describedby="basic-addon1" value="Asthsma"></textarea>
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Physician's Plan</span>
                                        <textarea type="text" name="atopy" class="form-control" aria-label="atopy"
                                            aria-describedby="basic-addon1" value="Asthsma"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Admit?</span>
                                        <select class="form-select form-select-md" aria-label="stomach-ulcer"
                                            name="stomachUlcer">
                                            <option value="unknown">Select</option>
                                            <option value="Outpatient">No</option>
                                            <option value="Inpatient">Yes</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="respiratory-rate">Ward</span>
                                        <select class="form-select form-select-md" aria-label="stomach-ulcer"
                                            name="stomachUlcer">
                                            <option value="unknown">Select</option>
                                            <option value="Outpatient" selected>Private Ward</option>
                                            <option value="Inpatient">General Ward</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="respiratory-rate">Bed No.</span>
                                        <select class="form-select form-select-md" aria-label="stomach-ulcer"
                                            name="stomachUlcer">
                                            <option value="unknown">Select</option>
                                            <option value="Bed 1" selected>Bed 1</option>
                                            <option value="Bed 2">Bed 2</option>
                                            <option value="Bed 3">Bed 3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <div class="row">
                                <span class="fw-semibold">Investigation and Management</span>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Product<br>/Service</span>
                                        <input type="text" name="surename" class="form-control" placeholder="Search"
                                            aria-label="Client name" aria-describedby="basic-addon1" value="">
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Prescription<br>Details</span>
                                        <input type="text" name="surename" class="form-control" placeholder="Search"
                                            aria-label="Client name" aria-describedby="basic-addon1" value="">
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
    </div>
</template>
