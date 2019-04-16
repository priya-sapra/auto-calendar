<template>
  <div id="app" class="container">
    <Welcome />
    <!-- <InputFields /> -->
    <UserForm />
  </div>
</template>

<script>
import Welcome from "./components/Welcome.vue";
import UserForm from "./components/UserForm.vue";
//import InputFields from "./components/InputFields.vue";

export default {
  name: "app",
  components: {
    Welcome,
    UserForm
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
