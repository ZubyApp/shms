<script setup>
import { vMaska } from "maska"
import { computed, onMounted } from "vue";

const modal = defineProps({
    id: String,
    title: String,
    isUpdate: Boolean
})

const buttonClasses = computed(() =>{
    return modal.isUpdate ? 'update-patient-btn' : 'register-patient-btn'
})

</script>

<template>
    <div class="container">
        <div class="modal fade modal-xl" :id="modal.id" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fs-4 text-primary">{{ modal.title }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <label class="form-label fs-5 fw-semibold">Patient's Overall Information</label>
                        <div class="mb-2">
                            <span class="fw-semibold">Hospital Links</span>
                            <!-- first row -->
                            <div class="row">
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="hospital-number">Hospital Number<span class="text-danger">*</span></span>
                                        <input type="text" v-maska data-maska="SH##/####@" name="hospitalNumber" class="form-control"
                                            placeholder="SH81/0000A" aria-label="hospitalNumber" aria-describedby="basic-addon1" :readonly="isUpdate">
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Pay Classification<span class="text-danger">*</span></span>
                                        <select class="form-select form-select-md" aria-label="payment-category" name="paymentCategory">
                                            <option value="">Select Classification</option>
                                            <option value="Cash">Cash</option>
                                            <option value="Credit">Credit</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Sponsor Category<span class="text-danger">*</span></span>
                                        <select class="form-select form-select-md" aria-label="sponsor-category" name="sponsorCategory">
                                            <option value="">Select Category</option>
                                            <option value="Self">Self</option>
                                            <option value="Family">Family</option>
                                            <option value="NHIS">NHIS</option>
                                            <option value="HMO">HMO</option>
                                            <option value="Organization">Organization</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Registration Bill<span class="text-danger">*</span></span>
                                        <select class="form-select form-select-md" aria-label="registration-bill" name="registrationBill">
                                            <option value="">Select Option</option>
                                            <option value="2000">2000</option>
                                            <option value="oldCard">Old Card</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Sponsor Name<span class="text-danger">*</span></span>
                                        <input type="search" name="sponsorName" id="sponsor-id" required
                                            class="form-control form-control-md" placeholder="Search..."
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
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Staff ID/No.</span>
                                        <input type="text" name="staffId" class="form-control" placeholder="" aria-label="Name"
                                            aria-describedby="basic-addon1">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <span class="fw-semibold">Bio</span>
                            <!-- first row -->
                            <div class="row">
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">First Name<span class="text-danger">*</span></span>
                                        <input type="text" name="firstName" class="form-control" placeholder="" aria-label="first-name"
                                            aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Middle Name</span>
                                        <input type="text" name="middleName" class="form-control" placeholder=""
                                            aria-label="middleName" aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Surname<span class="text-danger">*</span></span>
                                        <input type="text" name="surename" class="form-control" placeholder=""
                                            aria-label="Client name" aria-describedby="basic-addon1">
                                    </div>
                                </div>
                            </div>
                            <!-- second row -->
                            <div class="row">
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Date of Birth<span class="text-danger">*</span></span>
                                        <input type="date" name="dateOfBirth" class="form-control" placeholder="" aria-label="date-of-birth"
                                            aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Sex<span class="text-danger">*</span></span>
                                        <select class="form-select form-select-md" aria-label="sex" name="sex">
                                            <option value="">Select</option>
                                            <option value="Female">Female</option>
                                            <option value="Male">Male</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Marital Status<span class="text-danger">*</span></span>
                                        <select class="form-select form-select-md" aria-label="marital-status" name="maritalStatus">
                                            <option value="">Select</option>
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
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Phone Number<span class="text-danger">*</span></span>
                                        <input type="text" name="phoneNumber" class="form-control" placeholder=""
                                            aria-label="phone-number" aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">House Address</span>
                                        <textarea type="text" name="houseAddress" class="form-control" placeholder="" aria-label="house-address"
                                            aria-describedby="basic-addon1"></textarea>
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">State Residence</span>
                                        <select class="form-select form-select-md" aria-label="state-residence" name="stateResidence">
                                            <option value="">Select</option>
                                            <option value="Abia">Abia</option>
                                            <option value="Adamawa">Adamawa</option>
                                            <option value="Akwa Ibom">Akwa Ibom</option>
                                            <option value="Anambra">Anambra</option>
                                            <option value="Bauchi">Bauchi</option>
                                            <option value="Bayelsa">Bayelsa</option>
                                            <option value="Benue">Benue</option>
                                            <option value="Borno">Borno</option>
                                            <option value="Cross River">Cross River</option>
                                            <option value="Delta">Delta</option>
                                            <option value="Ebonyi">Ebonyi</option>
                                            <option value="Edo">Edo</option>
                                            <option value="Ekiti">Ekiti</option>
                                            <option value="Gombe">Gombe</option>
                                            <option value="Jigawa">Jigawa</option>
                                            <option value="Kaduna">Kaduna</option>
                                            <option value="Kano">Kano</option>
                                            <option value="Katsina">Katsina</option>
                                            <option value="Kebbi">Kebbi</option>
                                            <option value="Kogi">Kogi</option>
                                            <option value="Kwara">Kwara</option>
                                            <option value="Lagos">Lagos</option>
                                            <option value="Nasarawa">Nasarawa</option>
                                            <option value="Niger">Niger</option>
                                            <option value="Ogun">Ogun</option>
                                            <option value="Ondo">Ondo</option>
                                            <option value="Osun">Osun</option>
                                            <option value="Oyo">Oyo</option>
                                            <option value="Plateau">Plateau</option>
                                            <option value="Rivers">Rivers</option>
                                            <option value="Sokoto">Sokoto</option>
                                            <option value="Taraba">Taraba</option>
                                            <option value="Yobe">Yobe</option>
                                            <option value="Zamfara">Zamfara</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <span class="fw-semibold">Related Info</span>
                            <!-- first row -->
                            <div class="row">
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Email</span>
                                        <input type="text" name="email" class="form-control" placeholder=""
                                            aria-label="email" aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Nationality</span>
                                        <input type="text" name="nationality" class="form-control" placeholder="" aria-label="nationality"
                                            aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">State Origin</span>
                                        <select class="form-select form-select-md" aria-label="state-origin" name="stateOrigin">
                                            <option value="">Select</option>
                                            <option value="Abia">Abia</option>
                                            <option value="Adamawa">Adamawa</option>
                                            <option value="Akwa Ibom">Akwa Ibom</option>
                                            <option value="Anambra">Anambra</option>
                                            <option value="Bauchi">Bauchi</option>
                                            <option value="Bayelsa">Bayelsa</option>
                                            <option value="Benue">Benue</option>
                                            <option value="Borno">Borno</option>
                                            <option value="Cross River">Cross River</option>
                                            <option value="Delta">Delta</option>
                                            <option value="Ebonyi">Ebonyi</option>
                                            <option value="Edo">Edo</option>
                                            <option value="Ekiti">Ekiti</option>
                                            <option value="Gombe">Gombe</option>
                                            <option value="Jigawa">Jigawa</option>
                                            <option value="Kaduna">Kaduna</option>
                                            <option value="Kano">Kano</option>
                                            <option value="Katsina">Katsina</option>
                                            <option value="Kebbi">Kebbi</option>
                                            <option value="Kogi">Kogi</option>
                                            <option value="Kwara">Kwara</option>
                                            <option value="Lagos">Lagos</option>
                                            <option value="Nasarawa">Nasarawa</option>
                                            <option value="Niger">Niger</option>
                                            <option value="Ogun">Ogun</option>
                                            <option value="Ondo">Ondo</option>
                                            <option value="Osun">Osun</option>
                                            <option value="Oyo">Oyo</option>
                                            <option value="Plateau">Plateau</option>
                                            <option value="Rivers">Rivers</option>
                                            <option value="Sokoto">Sokoto</option>
                                            <option value="Taraba">Taraba</option>
                                            <option value="Yobe">Yobe</option>
                                            <option value="Zamfara">Zamfara</option>
                                        </select>
                                    </div>
                                </div>   
                            </div>
                            <!-- second row -->
                            <div class="row">
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Occupation</span>
                                        <input type="text" name="occupation" class="form-control" placeholder="" aria-label="occupation"
                                            aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Religion</span>
                                        <input type="text" name="religion" class="form-control" placeholder=""
                                            aria-label="religion" aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Ethnic Group</span>
                                        <input type="text" name="ethnicGroup" class="form-control" placeholder=""
                                            aria-label="ethnic-group" aria-describedby="basic-addon1">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <span class="fw-semibold">Next of Kin Info</span>
                            <!-- first row -->
                            <div class="row">
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Full Name<span class="text-danger">*</span></span>
                                        <input type="text" name="fullName" class="form-control" placeholder="" aria-label="full-name"
                                            aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Phone No.<span class="text-danger">*</span></span>
                                        <input type="text" name="phoneNo" class="form-control" placeholder=""
                                            aria-label="phone number" aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <div class="col-xl-4 themed-grid-col">
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon1">Relationship</span>
                                        <select class="form-select form-select-md" aria-label="relationship" name="relationship">
                                            <option value="">Select</option>
                                            <option value="Wife">Wife</option>
                                            <option value="Husband">Husband</option>
                                            <option value="Son">Son</option>
                                            <option value="Daughter">Daughter</option>
                                            <option value="Daughter">Sister</option>
                                            <option value="Daughter">Brother</option>
                                            <option value="Auntie">Auntie</option>
                                            <option value="Uncle">Uncle</option>
                                            <option value="Niece">Niece</option>
                                            <option value="Niece">Nephew</option>
                                            <option value="Niece">Cousin</option>
                                            <option value="Other">Other</option>
                                        </select>
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
                                        <select class="form-select form-select-md" aria-label="stomach-ulcer" name="stomachUlcer">
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
                                        <select class="form-select form-select-md" aria-label="hypertensive" name="hypertensive">
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
                    </div>
                    <div class="modal-footer px-5">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            <i class="bi bi-x-circle me-1"></i>
                            Close
                        </button>
                        <button type="button" class="btn bg-primary text-white" :class="buttonClasses">
                            <i class="bi bi-check-circle me-1"></i>
                            <span v-if="isUpdate">Update</span>
                            <span v-else>Register</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
