<template>
  <header id="header">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact Us</router-link>
  </header>
</template>

<style lang="scss">
#header {
  padding: 10px;
  width: 20%;
  margin-left: 40%;
  background-color: #c9c9c9;
  border-radius: 10px;

  a {
    font-weight: bold;
    color: #000000;

    &.router-link-exact-active {
      color: #fff;
    }
  }
}
</style>