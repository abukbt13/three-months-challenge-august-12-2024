<script setup>
import { onMounted } from 'vue';
import Navbar from "@/components/Navbar.vue";

onMounted(() => {
  const accordion = document.getElementsByClassName('contentBx');

  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
      this.classList.toggle('active');
    });
  }
});
</script>

<template>
<div class="body">
  <Navbar />
  <h2>My Accordion</h2>

  <div class="accordion">
    <div class="contentBx">
      <div class="label" for="">List One</div>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam autem commodi consequuntur doloribus earum error magni, minima nulla officiis omnis repellendus!</p>
      </div>
    </div>
  </div> <div class="accordion">
    <div class="contentBx">
      <div class="label" for="">List One</div>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam autem commodi consequuntur doloribus earum error magni, minima nulla officiis omnis repellendus!</p>
      </div>
    </div>
  </div> <div class="accordion">
    <div class="contentBx">
      <div class="label" for="">List One</div>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam autem commodi consequuntur doloribus earum error magni, minima nulla officiis omnis repellendus!</p>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

.body{
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: #bedfe8;
}
.accordion{
  width: 800px
}
.accordion .contentBx{
  position: relative;
  margin: 10px 20px;
}
.accordion .contentBx .label{
  position: relative;
  padding: 10px;
  background: #2694af;
  color: #fff;
  cursor: pointer;
}
.accordion .contentBx .label::before{
  content: '+';
  position: absolute;
  top:50%;
  right: 20px;
  transform: translateY(-50%);
  font-size: 1.5em;
}
.accordion .contentBx .content{
  position: relative;
  padding: 10px;
  background: #fff;
  height: 0;
  overflow: hidden;
  transition: 0.5s;

}
.accordion .contentBx.active .content  {
  height: 150px;
  padding: 10px;
}
</style>