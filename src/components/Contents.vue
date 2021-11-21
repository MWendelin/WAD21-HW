<template>
  <div id="contents">
    <p class="item" v-for="post in postList" :key="post.id">
      <span class="author"> {{ post.author }} </span> <br />
      <span class="image"> <img :src="post.image" /> </span> <br />
      <span class="subtext"> {{ post.subtext }} </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Contents",
  data: function () {
    return {};
  },
  computed: {
    postList() {
      return this.$store.state.postList;
    },
  },
};
</script>


<style scoped>
.item {
  background: rgb(128, 183, 235);
  margin-bottom: 5px;
  padding: 3px 5px;
  border-radius: 5px;
}

#contents {
  background: #1862c9;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
  border-radius: 10px;
  width: 50%;
  margin-left: 24%;
  margin-top: 1%;
  margin-bottom: 50px;
}
#contents ul {
  padding: 0;
  list-style-type: none;
}
#contents li {
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
img {
  /*Image box, so it doesn't overflow*/
  max-width: 70%;
  max-height: 70%;
  display: inline;
}
.author {
    text-align: left;
}
</style>