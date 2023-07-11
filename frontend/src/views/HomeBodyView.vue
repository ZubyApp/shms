<script setup>
import { RouterLink } from 'vue-router'


</script>
<template>
  <div class="container">

    <main class="container px-0">
      <div class="vh-50 p-5 mb-4 cover-image">
        <div class="col-lg-6 px-0 display-4">
          <h1 class="fst-italic ">Welcome To <span class="fw-bold ">SHMS</span> </h1>
          <p class="fs-5"><span class="fw-bold">S</span>andra <span class="fw-bold">H</span>ospital <span class="fw-bold">M</span>anagement <span class="fw-bold">S</span>ystem</p>
          <div class="">
            <RouterLink to="/patients" class="btn btn-outline-primary mx-1"><i class="bi bi-people"> Patients</i></RouterLink>
            <RouterLink to="/doctors" class="btn btn-outline-primary mx-1"><i class="fa fa-user-md" aria-hidden="true"> Doctors</i></RouterLink>
            <RouterLink to="/nurses" class="btn btn-outline-primary fw- mx-1"><i class="bi bi-thermometer-low">Nurses</i></RouterLink>
            <br>
            <RouterLink to="/laboratory" class="btn btn-outline-primary fw-bold mx-1"><i class="fa fa-flask" aria-hidden="true"> Laboratory</i></RouterLink>
            <RouterLink to="/pharmacy" class="btn btn-outline-primary fw- mx-1"><i class="bi bi-capsule"> Pharmacy</i></RouterLink>
            <RouterLink to="/hmodesk" class="btn btn-outline-primary fw- mx-1"><i class="bi bi-calendar2-plus"> HMO Desk</i></RouterLink>
            <br>
            <RouterLink to="/reception" class="btn btn-outline-primary fw- mx-1"><i class="bi bi-receipt"> Reception</i></RouterLink>
          </div>
          <br>
          <p class="fs-5 mb-0"><a href="#" class="text-decoration-none text-black">We treat, God heals...</a></p>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
h1, h2, h3, h4, h5, h6, p {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif/*rtl:Amiri, Georgia, "Times New Roman", serif*/;
}

.cover-image {
  background-image: url("../assets/img/doctor-long.png");
  background-position-x: right;
  background-size: cover;
  background-repeat: repeat-y; 
}
/* .img-fluid{
  height: auto;
} */

/* .cover-container {
  max-width: 42em;
} */
</style>