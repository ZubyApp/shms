<script setup>
import { computed, ref } from 'vue';

const modal = defineProps({
    id: String,
    title: String,
    isUpdate: Boolean
})

const buttonClasses = computed(() => {
    return modal.isUpdate ? 'update-sponsor-btn' : 'create-sponsor-btn'
})

</script>

<template>
    <div class="modal fade modal-md" :id="modal.id" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title fs-4 text-primary">{{ modal.title }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form-outline form-white mb-2">
                        <label for="sponsorName" class="form-label fs-5">Sponsor Name<span class="text-danger">*</span></label>
                        <input type="text" name="sponsorName" id="sponsorName" class="form-control form-control-md"  />
                    </div>
                    <div class="form-outline form-white mb-2">
                        <label for="sponsorNumber" class="form-label fs-5">Sponsor Phone</label>
                        <input type="email" name="sponsorNumber" class="form-control form-control-md"  />
                    </div>
                    <div class="form-outline form-white mb-2">
                        <label for="sponsorNumber" class="form-label fs-5">Sponsor Email</label>
                        <input type="email" name="sponsorEmail" class="form-control form-control-md" required  />
                    </div>
                    <div class="form-outline form-white mb-2">
                        <label for="basic-url" class="form-label fs-5">Pay Classification<span class="text-danger">*</span></label>
                        <select class="form-select form-select-md" aria-label="payment-category" name="paymentCategory">
                                    <option value="">Select Category</option>
                                    <option value="Cash">Cash</option>
                                    <option value="Cash">Credit</option>
                        </select>
                    </div>
                    <div class="form-outline form-white mb-2">
                        <label for="basic-url" class="form-label fs-5">Sponsor Category<span class="text-danger">*</span></label>
                        <select class="form-select form-select-md" aria-label="sponsor-category" name="sponsorCategory">
                                    <option value="">Select Category</option>
                                    <option value="family">Family</option>
                                    <option value="nhis">NHIS</option>
                                    <option value="hmo">HMO</option>
                                    <option value="Company/Org">Company/Org</option>
                        </select>
                    </div>
                    <div class="form-outline form-white mb-2">
                        <label for="basic-url" class="form-label fs-5">Registration Bill<span class="text-danger">*</span></label>
                        <input type="number" name="sponsorbill" class="form-control form-control-md"  />
                    </div>
                    <div class="form-outline form-white mb-2">
                        <label for="basic-url" class="form-label fs-5">Payment Matrix %<span class="text-danger">*</span></label>
                        <select class="form-select form-select-md" aria-label="payment-matrix" name="paymentMatrix">
                                    <option value="">Select Value</option>
                                    <option value="100">100%</option>
                                    <option value="40">40%</option>
                                    <option value="10%">10%</option>
                                    <option value="0">0%</option>
                        </select>
                    </div>
                    <div class="form-outline form-white mb-2">
                        <label for="basic-url" class="form-label fs-5">Balance Required?<span class="text-danger">*</span></label>
                        <select class="form-select form-select-md" aria-label="balance-required" name="balanceRequired">
                                    <option value="">Select Category</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        <i class="bi bi-x-circle me-1"></i>
                        Close
                    </button>
                    <button type="button" class="btn bg-primary text-white" :class="buttonClasses">
                        <i class="bi bi-check-circle me-1"></i>
                        <span v-if="isUpdate">Update</span>
                        <span v-else>Create</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>