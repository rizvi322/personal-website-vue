<template>
  <div class="job">
    <div class="header" @click="toggleResponsibility($event)">
      <h1 class="lobster">{{ info.name }}</h1>
      <h3>{{ info.designation }}</h3>
      <h4>{{ info.since }}</h4>
    </div>

    <VueShowdown class="responsibility" :markdown="markdown"></VueShowdown>
  </div>
</template>

<script>
import { VueShowdown } from "vue-showdown";

export default {
  name: "Job",

  components: {
    VueShowdown,
  },

  data() {
    return {
      markdown: "",
    };
  },

  methods: {
    toggleResponsibility(event) {
      const header = event.target;
      const headers = document.querySelectorAll(".header");
      const responsibility = header.parentElement.querySelector(
        ".responsibility"
      );
      const responsibilities = document.querySelectorAll(".responsibility");

      headers.forEach((h) => {
        if (h !== header) {
          h.classList.remove("active");
        }
      });

      responsibilities.forEach((resp) => {
        if (resp !== responsibility) {
          resp.classList.remove("open");
        }
      });

      responsibility.classList.toggle("open");
      header.classList.toggle("active");
    },
  },

  props: {
    info: Object,
    enabled: Boolean,
  },

  async mounted() {
    if (this.info.expFile) {
      const response = await fetch(`markdowns/${this.info.expFile}`);
      this.markdown = await response.text();
    } else if (this.info.responsibility) {
      this.markdown = this.info.responsibility;
    }

    if (this.enabled) {
      this.$el.querySelector(".responsibility").classList.toggle("open");
      this.$el.querySelector(".header").classList.toggle("active");
    }
  },
};
</script>

<style scoped>
.job {
  border: solid 2px #383838;
  margin-bottom: 40px;
  width: 70%;
  animation: summary-animation 1s ease;
}

.header {
  padding: 20px 30px;
  cursor: pointer;
}

.active {
  border-bottom: solid 2px #383838;
  margin-bottom: 10px;
}

.header > * {
  pointer-events: none;
}

h1 {
  font-size: 2rem;
  letter-spacing: 0.2rem;
}

h3 {
  letter-spacing: 0.15rem;
  color: red;
}

h4 {
  color: rgb(30, 136, 241);
}

.responsibility {
  max-height: 0;
  padding: 0 30px;
  overflow-y: auto;
  transition: all 0.3s ease-in-out;
}

.open {
  margin-bottom: 10px;
  padding: 20px 30px;
  max-height: 50vh;
}

@media screen and (max-width: 768px) {
  .job:first-child {
    margin-top: 80px;
  }
}
</style>

<style>
.job > .responsibility > p {
  margin: 10px 0px;
}

.job > .responsibility > ul {
  margin: 0px 50px;
}

.job > .responsibility > a {
  color: inherit;
  font-weight: bolder;
  text-decoration: none;
}

.job > .responsibility > p > strong {
  color: green;
}
</style>
