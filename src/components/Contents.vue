<template>
  <div id="contents">
    <p class="item" v-for="post in postList" :key="post.id">
        <span class="postHeader">
            <span class="author"> {{ post.author }} </span>
            <span class="time"> {{post.time}} </span> <br />
        </span>
        <span class="image"> <img :src="post.image" /> </span> <br />
        <span class="postFooter">
            <span class="subtext"> {{ post.subtext }} </span> <br />
            <span class="like"> {{post.like}} </span>
        </span>
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
  background: white;
  margin-bottom: 5px;
  padding: 3px 0px;
  border-radius: 0px;
  box-shadow: 10px 2px 30px rgba(0, 0, 0, 0.2);
}

#contents {
  background: #c9c9c9;
  box-shadow: 1px 2px 30px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 70px;
  border-radius: 0px;
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
.postFooter{
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
</style>