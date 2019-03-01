<!-- <template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome" />
  </div>
</template>
-->

<template>
  <div id="app" class="container">
    <!-- <HelloWorld/> -->
    <!-- <TestVueComponent/> -->
    <Welcome/>
    <InputFields/>
  </div>
</template>

<script>

import Welcome from "./components/Welcome.vue";
import InputFields from "./components/InputFields.vue";

export default {
  name: "app",
  components: {
    Welcome,
    InputFields
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
