<script setup>
import { ref } from 'vue';



</script>

<template>
    <div class="modal fade modal-md" id="newSponsorModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Create Sponsor</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form-outline form-white mb-2">
                        <label for="basic-url" class="form-label fs-5">Payment Category<span class="text-danger">*</span></label>
                        <select class="form-select form-select-md" aria-label="JobType" name="payment-category">
                                    <option value="">Select Category</option>
                                    <option value="Cash">Cash</option>
                                    <option value="Cash">Credit</option>
                        </select>
                    </div>
                    <div class="form-outline form-white mb-2">
                        <label for="basic-url" class="form-label fs-5">Sponsor Category<span class="text-danger">*</span></label>
                        <select class="form-select form-select-md" aria-label="JobType" name="payment-category">
                                    <option value="">Select Category</option>
                                    <option value="self">Self</option>
                                    <option value="family">Family</option>
                                    <option value="nhis">NHIS</option>
                                    <option value="hmo">HMO</option>
                                    <option value="Company/Org">Company/Org</option>
                        </select>
                    </div>
                    <div class="form-outline form-white mb-2">
                        <label for="basic-url" class="form-label fs-5">Sponsor Name<span class="text-danger">*</span></label>
                        <input type="email" name="email" class="form-control form-control-md"  />
                    </div>
                    <div class="form-outline form-white mb-2">
                        <label for="basic-url" class="form-label fs-5">Sponsor Email</label>
                        <input type="text" name="city" class="form-control form-control-md"  />
                    </div>
                    <div class="form-outline form-white mb-2">
                        <label for="basic-url" class="form-label fs-5">Payment Matrix %<span class="text-danger">*</span></label>
                        <select class="form-select form-select-md" aria-label="JobType" name="payment-category">
                                    <option value="">Select Value</option>
                                    <option value="Cash">100%</option>
                                    <option value="Cash">40%</option>
                                    <option value="10%">10%</option>
                                    <option value="Cash">0%</option>
                        </select>
                    </div>
                    <div class="form-outline form-white mb-2">
                        <label for="basic-url" class="form-label fs-5">Balance Required?<span class="text-danger">*</span></label>
                        <select class="form-select form-select-md" aria-label="JobType" name="payment-category">
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
                    <button type="button" class="btn bg-primary text-white create-client-btn">
                        <i class="bi bi-check-circle me-1"></i>
                        Create
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>