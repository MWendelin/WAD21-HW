<template>
  <div class="posts">
    <contents> </contents>
  </div>
</template>

<script>
import Contents from "@/components/Contents.vue";

export default {
  name: "Posts",
  components: { Contents },
  props: ["PostList"],
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>