<template>
  <div class="card card-body">
    <form action="/action_page.php">
      Class 1: <input type="text" name="class1" /> Monday:
      <input type="checkbox" name="mon" /> Tuesday:
      <input type="checkbox" name="tue" /> Wednesday:
      <input type="checkbox" name="wed" /> Thursday:
      <input type="checkbox" name="th" /> Friday:
      <input type="checkbox" name="fri" />
      <br />
      Class 2: <input type="text" name="class2" /> Monday:
      <input type="checkbox" name="mon" /> Tuesday:
      <input type="checkbox" name="tue" /> Wednesday:
      <input type="checkbox" name="wed" /> Thursday:
      <input type="checkbox" name="th" /> Friday:
      <input type="checkbox" name="fri" />
      <br />

      Class 3: <input type="text" name="class3" /> Monday:
      <input type="checkbox" name="mon" /> Tuesday:
      <input type="checkbox" name="tue" /> Wednesday:
      <input type="checkbox" name="wed" /> Thursday:
      <input type="checkbox" name="th" /> Friday:
      <input type="checkbox" name="fri" />
      <br />

      Class 4: <input type="text" name="class4" /> Monday:
      <input type="checkbox" name="mon" /> Tuesday:
      <input type="checkbox" name="tue" /> Wednesday:
      <input type="checkbox" name="wed" /> Thursday:
      <input type="checkbox" name="th" /> Friday:
      <input type="checkbox" name="fri" />
      <br />
      <br />
      Fall Semester: <input type="checkbox" name="fsem" /> Spring Semester:
      <input type="checkbox" name="ssem" /><br /><br />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
h1 {
  color: #18b1ff;
}
</style>
