<template>
  <div id="app">
    <div class="content">
      <header class="header">
        <Nav />
      </header>
      <div class="main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./views/Nav";

export default {
  name: "App",

  components: {
    Nav,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content {
  width: 100%;
  min-height: 100vh;
  height: 100%;

  background: rgba(255, 255, 255, 0.8);
  position: relative;
}

.content::after {
  content: "";
  width: 100%;
  height: 100%;

  background: url("../public/background.jpg") no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

body {
  font-family: "Poppins", sans-serif;
}

.lobster {
  font-family: "Lobster Two", cursive;
}

@keyframes summary-animation {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  80% {
    transform: translateX(20%);
  }

  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}
</style>
