<script setup>
import { Modal } from 'bootstrap'
import { onMounted, ref } from 'vue';
import { vMaska } from "maska"





// const modal = defineProps({
//     id: String,
//     title: String,

// })

// onMounted(() => {
//     modal.id = "newClientModal"
//     modal.title = "Create Client"
// })
</script>

<template>
    <div class="container">
        <div class="modal fade modal-xl" id="newPatientModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fs-4">Register Patient</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <label for="basic-url" class="form-label fs-5 fw-semibold">Patient's Overall Information</label>
                        <div>
                            <span class="fw-semibold">Hospital Links</span>
                            <!-- first row -->
                            <div class="row">
                                <div class="col-lg-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Hospital Number</span>
                                        <input type="text" v-maska data-maska="SH##/####@" name="name" class="form-control"
                                            placeholder="" aria-label="Name" aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <div class="col-lg-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Payment Catgetory</span>
                                        <select class="form-select form-select-md" aria-label="JobType" name="jobType">
                                            <option value="">Select Category</option>
                                            <option value="Cash">Cash</option>
                                            <option value="Credit">Credit</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Sponsor Category</span>
                                        <select class="form-select form-select-md" aria-label="JobType" name="jobType">
                                            <option value="">Select Category</option>
                                            <option value="Self">Self</option>
                                            <option value="Family">Family</option>
                                            <option value="NHIS">NHIS</option>
                                            <option value="HMO">HMO</option>
                                            <option value="Organization">Organization</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Sponsor Name</span>
                                        <input type="search" name="sponsor" id="sponsor-id" required
                                            class="form-control form-control-md" placeholder="Search Sponsor Name"
                                            list="clientList">
                                        <datalist name="sponsor" type="text" class="decoration-none bg-white"
                                            id="clientList">
                                            <option id="clientOption" value="Police NHIS" data-id="13" name="Police NHIS">
                                            </option>
                                            <option id="clientOption" value="Avon HMO" data-id="13" name="Avon HMO">
                                            </option>
                                            <option id="clientOption" value="Okeke Family" data-id="72" name="Okeke Family">
                                            </option>
                                            <option id="clientOption" value="Okeke Family" data-id="72"
                                                name="Tyvenda Family"></option>
                                            <option id="clientOption" value="Okeke Family" data-id="72" name="Odeh Family">
                                            </option>
                                        </datalist>
                                    </div>
                                </div>
                                <div class="col-lg-4 themed-grid-col">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">Staff ID/No.</span>
                                        <input type="text" name="name" class="form-control" placeholder="" aria-label="Name"
                                            aria-describedby="basic-addon1">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span class="fw-semibold">Bio</span>
                            <!-- first row -->
                            <div class="row">
                                <div class="col-lg-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">First Name</span>
                                        <input type="text" name="name" class="form-control" placeholder="" aria-label="Name"
                                            aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <div class="col-lg-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Middle Name</span>
                                        <input type="text" name="number" class="form-control" placeholder=""
                                            aria-label="phone number" aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <div class="col-lg-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Last Name</span>
                                        <input type="text" name="email" class="form-control" placeholder=""
                                            aria-label="Client name" aria-describedby="basic-addon1">
                                    </div>
                                </div>
                            </div>
                            <!-- second row -->
                            <div class="row">
                                <div class="col-lg-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Date of Birth</span>
                                        <input type="text" name="city" class="form-control" placeholder="" aria-label="City"
                                            aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <div class="col-lg-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Sex/Gender</span>
                                        <select class="form-select form-select-md" aria-label="JobType" name="jobType">
                                            <option value="">Select Category</option>
                                            <option value="Female">Female</option>
                                            <option value="Male">Male</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Marital Status</span>
                                        <select class="form-select form-select-md" aria-label="JobType" name="jobType">
                                            <option value="">Select Category</option>
                                            <option value="Single">Single</option>
                                            <option value="Married">Married</option>
                                            <option value="Widow">Widow</option>
                                            <option value="Widower">Widower</option>
                                            <option value="Divorced">Divorced</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <!-- Third row -->
                            <div class="row">
                                <div class="col-lg-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Address</span>
                                        <input type="text" name="city" class="form-control" placeholder="" aria-label="City"
                                            aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <div class="col-lg-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Phone Number</span>
                                        <input type="text" name="state" class="form-control" placeholder=""
                                            aria-label="State" aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <div class="col-lg-4 themed-grid-col">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">Email</span>
                                        <input type="text" name="country" class="form-control" placeholder=""
                                            aria-label="Country" aria-describedby="basic-addon1">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span class="fw-semibold">Related Info</span>
                            <!-- first row -->
                            <div class="row">
                                <div class="col-lg-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Nationality</span>
                                        <input type="text" name="name" class="form-control" placeholder="" aria-label="Name"
                                            aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <div class="col-lg-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">State Origin</span>
                                        <input type="text" name="number" class="form-control" placeholder=""
                                            aria-label="phone number" aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <div class="col-lg-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Ethnic Group</span>
                                        <input type="text" name="email" class="form-control" placeholder=""
                                            aria-label="Client name" aria-describedby="basic-addon1">
                                    </div>
                                </div>
                            </div>
                            <!-- second row -->
                            <div class="row">
                                <div class="col-lg-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Occupation</span>
                                        <input type="text" name="city" class="form-control" placeholder="" aria-label="City"
                                            aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <div class="col-lg-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Religion</span>
                                        <input type="text" name="state" class="form-control" placeholder=""
                                            aria-label="State" aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <div class="col-lg-4 themed-grid-col">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">Language</span>
                                        <input type="text" name="country" class="form-control" placeholder=""
                                            aria-label="Country" aria-describedby="basic-addon1">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span class="fw-semibold">Next of Kin Info</span>
                            <!-- first row -->
                            <div class="row">
                                <div class="col-lg-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Full Name</span>
                                        <input type="text" name="name" class="form-control" placeholder="" aria-label="Name"
                                            aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <div class="col-lg-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Phone No.</span>
                                        <input type="text" name="number" class="form-control" placeholder=""
                                            aria-label="phone number" aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <div class="col-lg-4 themed-grid-col">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">Relationship</span>
                                        <input type="text" name="email" class="form-control" placeholder=""
                                            aria-label="Client name" aria-describedby="basic-addon1">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span class="fw-semibold">Previously Known Clinical Info</span>
                            <!-- first row -->
                            <div class="row">
                                <div class="col-lg-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Bloodgroup</span>
                                        <input type="text" name="name" class="form-control" placeholder="" aria-label="Name"
                                            aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <div class="col-lg-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Genotype</span>
                                        <input type="text" name="number" class="form-control" placeholder=""
                                            aria-label="phone number" aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <div class="col-lg-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Ethopy?</span>
                                        <input type="text" name="email" class="form-control" placeholder=""
                                            aria-label="Client name" aria-describedby="basic-addon1">
                                    </div>
                                </div>
                            </div>
                            <!-- second row -->
                            <div class="row">
                                <div class="col-lg-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Diabetic?</span>
                                        <input type="text" name="city" class="form-control" placeholder="" aria-label="City"
                                            aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <div class="col-lg-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Hypertension</span>
                                        <input type="text" name="state" class="form-control" placeholder=""
                                            aria-label="State" aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <div class="col-lg-4 themed-grid-col">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">Ulcer?</span>
                                        <input type="text" name="country" class="form-control" placeholder=""
                                            aria-label="Country" aria-describedby="basic-addon1">
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
                        <button type="button" class="btn bg-primary text-white client-details-btn">
                            <i class="bi bi-check-circle me-1"></i>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>