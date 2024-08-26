<script setup>

</script>

<template>
    <ol class="nav-list">
      <li class="border" style="text-decoration: none;">
        <router-link style="text-decoration: none;" to="/">
          <i class="bi  bi-house-fill">Week-1</i>
        </router-link>
      </li> <li class="border" style="text-decoration: none;">
        <router-link style="text-decoration: none;" to="/week-2">
          <i class="bi  bi-house-fill">Week-2</i>
        </router-link>
      </li> <li class="border" style="text-decoration: none;">
        <router-link style="text-decoration: none;" to="/week-3">
          <i class="bi  bi-house-fill">Week-3</i>
        </router-link>
      </li>
    </ol>
</template>

<style>
.nav-list{
  border: 1px solid green;
  padding: 4px;
  display: flex;
  list-style: none;
  gap: 7px;
  width: 100vw;
  //overflow: scroll;
}
.nav-list ol li{
  flex-grow: 1;
  flex-basis: 0;
  width: 100vw;
  padding: 3rem;
}
li:hover{
  background: red;
  color: white;
}
</style>