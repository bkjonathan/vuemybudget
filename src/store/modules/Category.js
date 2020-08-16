export default {
  state: {
    categories: []
  },
  mutations: {
    addCategory(state, payload) {
      state.categories.push(payload);
    },
    setCategory(state, {index,category}) {
      state.categories[index] = category;
    },
    delCategory(state,payload){
      state.categories.splice(payload,1);
    }
  },
  getters: {
    getCategories: state => state.categories
  }
};
