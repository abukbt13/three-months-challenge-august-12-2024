<script setup>

</script>

<template>
  <div class="d-flex p-3 justify-content-center align-items-center">
    <h4 style="" class="text-uppercase">MY three Months Coding Challenge <i style="color: red;margin-left: 2rem;" class="bi bi-heart-fill"></i> </h4>

  </div>
    <ol class="d-flex list-unstyled justify-content-center">
      <li class="border px-2 mx-1 " style="font-size: 2rem;text-decoration: none;">
        <router-link style="text-decoration: none;" to="accordion">
          Accordion
        </router-link>
      </li>

      <li class="border px-2" style="font-size: 2rem;text-decoration: none;">
        <router-link style="text-decoration: none;" to="/contact-us">
          Contact Us
        </router-link>
      </li>

      <li class="border px-2" style="font-size: 2rem;text-decoration: none;">
        <router-link style="text-decoration: none;" to="/landing-page">
          Landing Page
        </router-link>
      </li>

    </ol>
  <hr class="">
</template>

<style scoped>
li:hover{
  background: red;
  font-size: 12px;
  color: white;
}
</style>