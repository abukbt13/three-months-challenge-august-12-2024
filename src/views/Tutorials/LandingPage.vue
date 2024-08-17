<script setup>
import Navbar from "@/components/Navbar.vue";
import {onMounted} from "vue";

// onMounted( () => {
  function changeBg  (img) {
  // alert('')
  document.getElementById('img').src = img;
}
// }
//
// )

</script>

<template>
  <Navbar />
  <div class="circle"></div>
  <div class="d-flex flex-row main">
    <div class="main-content d-flex justify-content-center flex-column">
      <div style="margin-left: 4rem">
        <h2>Young Developers</h2>
        <h5>Future of best developers</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eligendi eos et facilis odit possimus reprehenderit. Accusantium doloremque incidunt iste iure perspiciatis, quaerat quos ratione reiciendis rem saepe, similique tempora.
        </p>
        <button style="border: none; padding: 10px; color: white; background: cornflowerblue; border-radius: 2px">Join Us Now</button>
      </div>
    </div>
    <div class="main-picture d-flex justify-content-center ">
      <img id="img" width="120" height="120" src="/kale2.png" alt="Background Image">
    </div>
    <div class="icons d-flex justify-content-center align-items-center">
      <ul>
        <li><i class="bi bi-facebook"></i></li>
        <li><i class="bi bi-instagram"></i></li>
        <li><i class="bi bi-twitter"></i></li>
      </ul>
    </div>
  </div>
  <div class="links d-flex justify-content-center align-items-center">
    <ul class="d-flex">
      <li @click="changeBg('bg.png')"><i  class="bi icon bi-facebook"></i></li>
      <li @click="changeBg('kale2.png')"><i class="bi icon bi-instagram"></i></li>
      <li @click="changeBg('cabbages.jpeg')"><i class="bi icon bi-twitter"></i></li>
    </ul>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  height: 82vh;
  position: relative;
}

.main-content,
.main-picture {
  min-width: 600px;
  width: 50%;
}

.circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: red;
  clip-path: circle(400px at 90% 80%);
  z-index: -1; /* Make sure it's behind the content */
}

.main-picture img { /* Adjust image position relative to clip-path */
}

.icons ul{
  margin-right: 4rem;
}

.icons ul li{
  list-style: none;
  font-size: 30px;
  padding: 10px;
  margin-top: 1rem;
  transition: 0.9s ease-in-out;
}
.links ul li{
  position: relative;
  top: -5rem;
  list-style: none;
  font-size: 30px;
  padding: 10px;
  margin-left: 2rem;
  transition: 0.5s ease;
}
.links ul li:hover{
  transform: translateY(-50%);
  border: 2px solid grey;
  color: white;
  background: #333;
}

.icons ul li:hover{
 transform: translateX(-50%);
  background: blue;
}

</style>
