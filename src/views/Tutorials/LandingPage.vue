<script setup>

import Navbar from "@/components/Navbar.vue";
</script>

<template>
<Navbar />
<div class="circle"></div>
  <div class="d-flex flex-row main">
      <div class="main-content d-flex justify-content-center flex-column">
       <div style="margin-left: 4rem" class="">
         <h2>Young Developers</h2>
         <h5>Future of best developers</h5>
         <p>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eligendi eos et facilis odit possimus reprehenderit. Accusantium doloremque incidunt iste iure perspiciatis, quaerat quos ratione reiciendis rem saepe, similique tempora.
         </p>
         <button style="border: none;padding:10px; color: white;background: cornflowerblue;border-radius: 2px">Join Us Now</button>
       </div>
      </div>
      <div class="main-picture  d-flex justify-content-around flex-column">


          <img src="/bg.jpeg" alt="">
<!--        <div class="icons d-flex justify-content-center align-items-center ">-->
<!--          <ul>-->
<!--            <li><i class="bi bi-facebook"></i></li>-->
<!--            <li><i class="bi bi-instagram"></i></li>-->
<!--            <li><i class="bi bi-twitter"></i></li>-->
<!--          </ul>-->
<!--        </div>-->

       </div>
  </div>


</template>

<style scoped>
.main{
  width: 100%;
  height: 82vh;
}
.main-content{
  height: 80vh;
  width: 50%;
  z-index: 1;
}
.icons{
  position: relative;
  right: 0rem;
  top: 0rem;
}
.circle{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: peru;
  clip-path: circle(600px at right 800px);


}
</style>