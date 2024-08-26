<script setup>

import Navbar from "@/components/Navbar.vue";
</script>

<template>
<Navbar />
  <div class="body">
      <div class="navigation">
        <div class="userBox">
          <div class="imgBox">
            hknjk
            <img src="/bg.jpeg" alt="">
          </div>
        </div>

        <div class="menuToggle">
            hbjhbjh
        </div>
      </div>
  </div>
</template>

<style scoped>
.body{
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(45deg, #ddd,#333);
}
.navigation{
  position: fixed;
  right: 0;
  width: 120px;
  height: 60px;
  background: #fff;
  display: flex;
  border: 1px solid;
}
.userBox{
  position: relative;
  min-width: 60px;
  height: 60px;
  background: red;
}

.imgBox img{
  min-width: 60px;
  position: absolute;
}
.menuToggle{
  min-width: 60px;
  height: 60px;
}

</style>