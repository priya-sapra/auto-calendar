<template>
  <div class="card card-body">
    <h1>{{ msg }}</h1>
    <p>Auto Calendar will help you organize your weekly schedule!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Auto Calendar"
    };
  }
};
</script>

<style scoped>
h1 {
  color: #18b1ff;
}
</style>
