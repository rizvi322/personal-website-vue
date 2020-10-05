<template>
  <nav class="menu">
    <ul class="menu-items">
      <li class="menu-item">
        <router-link to="/" @click.native="menuItemClickHandler"
          >Home</router-link
        >
      </li>
      <li class="menu-item">
        <router-link to="/experience" @click.native="menuItemClickHandler"
          >Experience</router-link
        >
      </li>
      <li class="menu-item">
        <router-link to="/education" @click.native="menuItemClickHandler"
          >Education</router-link
        >
      </li>
      <li class="menu-item">
        <router-link to="/about" @click.native="menuItemClickHandler"
          >About</router-link
        >
      </li>
    </ul>
    <div class="burger" v-on:click="burgerMenuClickHandler($event)">
      <div class="line line1"></div>
      <div class="line line2"></div>
      <div class="line line3"></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  methods: {
    menuItemClickHandler() {
      const menuItems = document.querySelector(".menu-items");
      const burgerMenu = document.querySelector(".burger");

      menuItems.classList.toggle("active");
      burgerMenu.classList.toggle("active");
    },
    burgerMenuClickHandler(event) {
      const menuItems = document.querySelector(".menu-items");
      const burgerMenu = event.target;

      menuItems.classList.toggle("active");
      burgerMenu.classList.toggle("active");
    },
  },
};
</script>

<style scoped>
.menu {
  width: 80%;
  margin: auto;
  height: 10vh;

  display: flex;
  justify-content: space-around;
  align-items: center;
}

.menu-items {
  flex: 11;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.menu-item {
  list-style: none;
}

.menu-item > a {
  text-decoration: none;
  color: #383838;
  font-size: 20px;
  font-weight: bolder;
  font-family: "Lobster Two", cursive;
}

.menu-item > a:hover {
  color: red;
}

a.active {
  color: rgb(30, 136, 241);
}

.burger {
  flex: 1;
  cursor: pointer;
  z-index: 100;

  display: none;
}

.line {
  width: 25px;
  height: 3px;
  margin: 5px;

  background-color: #383838;
  pointer-events: none;
  transition: all 0.5s ease 0.5s;
}

@media screen and (max-width: 768px) {
  .menu {
    height: 100%;
    width: 50%;

    position: fixed;
    top: 0;
    right: 0;
    z-index: 50;
  }

  .menu-items {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;

    background-color: rgb(243, 243, 236);
    box-shadow: 0px 0px 10px 0px #383838;

    transform: translateX(100%);
  }

  .active {
    transform: translateX(0%);
    transition: transform 0.5s ease;
  }

  a.active {
    color: rgb(30, 136, 241);
  }

  .burger {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .active > .line1 {
    transform: rotate(-45deg) translate(-5px, 6px);
  }

  .active > .line2 {
    opacity: 0;
  }

  .active > .line3 {
    transform: rotate(45deg) translate(-5px, -6px);
  }
}
</style>
