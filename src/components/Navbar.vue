<script setup>

</script>

<template>
  <div class="d-flex p-3 justify-content-around align-items-center">
    <h4 class="text-uppercase">Freeman three Months Coding Challenge</h4>
    <i style="color: red; font-size: 23px" class="bi bi-heart-fill"></i>

  </div>
    <ol class="d-flex list-unstyled">
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

    </ol>

</template>

<style scoped>
li:hover{
  background: red;
  color: white;
}
</style>