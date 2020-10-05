<template>
  <div class="home">
    <div class="summary">
      <h1 class="lobster">{{ name }}</h1>
      <h3>
        <span>{{ designation }}</span> in <span>{{ company }}</span>
      </h3>
      <p>{{ aim }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",

  data() {
    return {
      name: "",
      designation: "",
      company: "",
      aim: "",
    };
  },

  computed: mapGetters(["myInfo"]),

  mounted() {
    const aboutMe = this.myInfo.aboutMe;
    const currentJob = this.myInfo.experience[0];

    this.name = aboutMe.name;
    this.designation = currentJob.designation;
    this.company = currentJob.name;
    this.aim = aboutMe.aim;
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.summary {
  width: 50%;
  border: solid 2px #383838;
  padding: 20px 30px;
  animation: summary-animation 1s ease;
}

.summary h1 {
  font-size: 4rem;
  letter-spacing: 0.2rem;
}

.summary h3 {
  word-spacing: 1rem;
}

.summary h3 span {
  font-size: 2rem;
  letter-spacing: 0.15rem;
  word-spacing: 0;
  color: red;
}

.summary p {
  font-size: 20px;
  margin-top: 40px;
}

@media screen and (max-width: 768px) {
  .home {
    align-items: flex-end;
  }
  .summary {
    width: 80%;
  }
}
</style>
