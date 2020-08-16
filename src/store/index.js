import Vue from "vue";
import Vuex from "vuex";
import Category from "./modules/Category";
import Income from "./modules/Income";
import Expense from "./modules/Expense";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      key: 'mybudget',
    }),
  ],
  modules: {
    Category,
    Income,
    Expense
  }
});
