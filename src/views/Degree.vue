<template>
  <div class="degree">
    <h1 class="lobster">{{ info.name }}</h1>
    <h2>{{ info.subject }}</h2>
    <h3>{{ info.institute }}</h3>
    <h4>{{ info.session }}</h4>
  </div>
</template>

<script>
export default {
  name: "Degree",

  props: {
    info: Object,
  },
};
</script>

<style scoped>
.degree {
  min-width: 400px;
  border: solid 2px #383838;
  padding: 20px 30px;
}

h1 {
  font-size: 2rem;
  letter-spacing: 0.2rem;
}

h2 {
  font-size: 1.2rem;
  color: red;
}

h3 {
  color: rgb(30, 136, 241);
}

h4 {
  color: green;
}

@media screen and (max-width: 768px) {
  .degree {
    width: 100%;
  }
}
</style>
