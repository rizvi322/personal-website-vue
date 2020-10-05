<template>
  <div class="education">
    <div class="degrees">
      <template v-for="(degree, index) in myInfo.education">
        <Degree v-bind:key="index" :info="degree" />
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Degree from "./Degree.vue";

export default {
  name: "Education",

  components: {
    Degree,
  },

  computed: mapGetters(["myInfo"]),
};
</script>

<style scoped>
.education {
  width: 100%;
  height: 90vh;
  margin: auto;
  padding: 50px;
  overflow: hidden;
}
.degrees {
  height: 100%;
  display: grid;
  grid-template-rows: repeat(auto-fit, 1fr);
  grid-template-columns: repeat(auto-fit, 1fr);
  grid-gap: 20px 20px;
}

.degrees > * {
  opacity: 0;
}

.degrees > *:nth-child(1) {
  grid-row: 1;
  grid-column: 1;
  animation: summary-animation 0.5s ease 1.5s forwards;
}

.degrees > *:nth-child(2) {
  grid-row: 2;
  grid-column: 2;
  animation: summary-animation 0.5s ease 1s forwards;
}

.degrees > *:nth-child(3) {
  grid-row: 3;
  grid-column: 3;
  animation: summary-animation 0.5s ease 0.5s forwards;
}

.degrees > *:nth-child(4) {
  grid-row: 4;
  grid-column: 4;
  animation: summary-animation 0.5s ease forwards;
}

@media screen and (max-width: 768px) {
  .degrees {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
