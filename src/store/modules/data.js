import dataJSON from "../../assets/data.json";

const state = {
  data: dataJSON,
};
const getters = {
  myInfo: (state) => state.data,
};
const actions = {};
const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
