<template>
  <div class="home">
    <posts msg="Welcome to our Posts view" />
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from "@/components/Posts.vue";

export default {
  name: "Home",
  components: {
    'Posts': Posts,
  },
};
</script>
