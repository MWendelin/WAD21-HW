<template>
  <div class="home">
    <button @click="resetLikes" id="reset-button">Reset Likes</button>
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
  computed: {
      posts() {
        return this.$store.state.postList
      }
    },
    methods: {
      resetLikes(){
        for (let i = 0; i < (this.$store.state.postList).length; i++) {
          this.$store.state.postList[i].like = 0
        }
      }
    }
};
</script>

<style scoped>
#reset-button {
  color: black;
  margin-left: 52%;
  padding: 4px 20px;
  border: none;
  border-radius: 8px;
  background-color: #c9c9c9;
  white-space: nowrap;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}

#reset-button:hover {
  background-color: #808080;
}
</style>
