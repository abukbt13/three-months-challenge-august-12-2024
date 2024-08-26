<script setup>

import Navbar from "@/components/Navbar.vue";
</script>

<template>
<Navbar />
<div class="content">
  <div  class="box">
    <form class="grocery">
      <input style="" type="text">
      <button type="submit">send</button>
    </form>
    <ol>
      <li>Grapes</li>
      <li>Grapes</li>
      <li>Grapes</li>
      <li>Grapes</li>
      <li>Grapes</li> <li>Grapes</li>
      <li>Grapes</li>
      <li>Grapes</li>
      <li>Grapes</li>
      <li>Grapes</li> <li>Grapes</li> <li>Grapes</li>
      <li>Grapes</li>
      <li>Grapes</li>
      <li>Grapes</li>
      <li>Grapes</li> <li>Grapes</li> <li>Grapes</li>
      <li>Grapes</li>
      <li>Grapes</li>
      <li>Grapes</li>
      <li>Grapes</li>
    </ol>
  </div>

</div>
</template>

<style scoped>
.content{
  width: 100vw;
  height: 100vh;
  background: linear-gradient(45deg,#ddd ,grey);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.box{
  position: relative;
  justify-content: center;
  width: 400px;
  padding: 1rem;
  background: white;
  box-shadow: 15px 15px 15px rgba(0,0,0,0.1);
}
.grocery{
  width: 100%;
  display: flex;
  margin: 0 auto;
}

.box input{
  width: 100%;
  padding: 10px;
  border: 1px solid#333;
  outline: none;
}
.box button{
  background: #4bae4f;
  font-weight: 1000;
  outline: none;
  width: 100px;
}
.box ol {
  position: relative;
  width: 100%;
  padding: 10px 20px 20px 40px;
  min-height: 400px;
  max-height: 400px;
  background:
      repeating-linear-gradient(transparent, transparent 49px, #000 49px, #000 50px);
  background-size: 50px 50px;
  box-shadow: 15px 15px 15px rgb(22,34,45);
  overflow: scroll;
}
.box ol li{
  height: 50px;
}

</style>