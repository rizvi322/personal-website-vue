<template>
  <div class="about">
    <div class="summary">
      <h1 class="lobster">About Me</h1>
      <p>
        <strong>Full name:</strong>
        {{ info.name }}
      </p>
      <p>
        <strong>Date of birth:</strong>
        {{ info.dob }}
      </p>
      <p>
        <strong>Github:</strong>
        <a target="_blank" :href="info.github">{{ info.github }}</a>
      </p>
      <p>
        <strong>Resume:</strong>
        <a target="_blank" :href="info.linkedin">{{ info.linkedin }}</a>
      </p>
      <p>
        <strong>Email:</strong>
        <a target="_blank" :href="`mailto:${info.email}`">{{ info.email }}</a>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "About",

  data() {
    return {
      info: {},
    };
  },

  computed: mapGetters(["myInfo"]),

  mounted() {
    this.info = this.myInfo.aboutMe;
  },
};
</script>

<style scoped>
.about {
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
  overflow: auto;
}

h1 {
  font-size: 4rem;
  letter-spacing: 0.2rem;
  margin-bottom: 30px;
}

p {
  font-size: 1.5rem;
  line-height: 3rem;
}

a {
  text-decoration: none;
  color: rgb(30, 146, 231);
}

strong {
  margin-right: 5px;
  font-weight: 800;
  color: green;
}

@media screen and (max-width: 768px) {
  .about {
    align-items: flex-end;
  }

  .summary {
    width: 80%;
  }

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.2rem;
  }

  a {
  }
}
</style>
