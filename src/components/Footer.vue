<template>
  <footer>
    <p>{{ footerText }}</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerText: "Copyright 2021",
    };
  },
};
</script>

<style scoped>
    footer {
        background-color: aliceblue;
        padding: 10px;
    }
</style>