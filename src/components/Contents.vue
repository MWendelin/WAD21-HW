<template>
  <div id="contents">
    <p class="item" v-for="post in postList" :key="post.id">
      <span class="postHeader">
        <span class="author"> {{ post.author }} </span>
        <span class="time"> {{ post.time }} </span> <br />
      </span>
      <span class="image"> <img :src="post.image" /> </span> <br />
      <span class="postFooter">
        <span class="subtext"> {{ post.subtext }} </span> <br />
        <button id="like-button" type="button" @click="post.like++"></button>
        <span id="post-like">This post has {{ post.like }} likes </span>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Contents",
  data: function () {
    return {

    };
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
  background: white;
  margin-bottom: 5px;
  border-radius: 4px;
  padding: 3px 0px;
  box-shadow: 10px 2px 30px rgba(0, 0, 0, 0.2);
}

#contents {
  background: #c9c9c9;
  box-shadow: 1px 2px 30px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 70px;
  border-radius: 10px;
  width: 50%;
  margin: auto;
  margin-top: 1%;
  margin-bottom: 50px;
}

img {
  /*Image box, so it doesn't overflow*/
  max-width: 100%;
  display: inline;
  float: center;
}
.author {
  float: left;
  margin-left: 23px;
  margin-top: 0px;
  font-size: 14px;
}
.time {
  float: right;
  font-size: 70%;
  font-size: 14px;
  margin-top: 0px;
}
/*Every post's header:  time and user icon*/
.postHeader {
  height: 20px;
  background: url(../assets/usericon.png);
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: left;
  margin: 2px;
  color: gray;
  display: block;
  font-size: 14px;
  font-weight: bold;
  padding: 5px;
}
.postFooter {
  height: inherit;
  margin: 2px;
  background-color: white;
  text-decoration-color: black;
  text-align: left;
  display: block;
  font-size: 14px;
  font-weight: bold;
  padding: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.subtext {
  font-weight: bold;
}
#like-button {
    padding: 12px 12px;
    margin: 4px 2px;
    border-color: #c9c9c9;
    border-width: 3px;
    border-radius: 8px;
    cursor: pointer;
    background: url(../assets/like.png) no-repeat;
    background-size: 100%;
    background-position: center;
}
#like-button:hover {
  background-color: #04AA6D;
}
#post-like {
    margin-bottom: 2px;
    padding: 20px;
}
</style>