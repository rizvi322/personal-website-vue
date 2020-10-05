<template>
  <div class="experience">
    <div class="jobs">
      <template v-for="(job, index) in myInfo.experience">
        <Job :key="index" :info="job" :enabled="index === 0" />
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Job from "./Job.vue";

export default {
  name: "Experience",

  components: {
    Job,
  },

  computed: mapGetters(["myInfo"]),
};
</script>

<style scoped>
.experience {
  overflow: hidden;
}
.jobs {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>
