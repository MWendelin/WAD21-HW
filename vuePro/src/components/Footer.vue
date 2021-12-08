<template>
  <footer id="footer">
    <router-link to="/contact" id="contact-us-text"> Contact Us</router-link>
    <div id="copyright">Copyright © PostIt</div>
  </footer>
</template>

<style lang="scss">
  #footer {
    position: fixed;
    bottom: 0;
    background-color: rgb(153, 151, 151);
    text-align: center;
    left: 0px;
    right: 0px;
    margin-bottom: 0px;
    padding: 2px;
  }
  #copyright {
    font-size: smaller;
  }
  #contact-us-text {
    color: white;
  }
</style>