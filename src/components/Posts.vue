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
    return{
    }}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>