<template>
  <footer id="footer">
    <router-link to="/contact" id="contact-text"> Contact Us</router-link>
    <div id="copyright">Copyright © PostIt</div>
  </footer>
</template>

<style lang="scss">
  #footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: rgb(153, 151, 151);
    text-align: center;
    padding: 2px;
    color: white;
  }
  #copyright {
    font-size: smaller;
  }
  #contact-text {
    color: white;
  }
</style>