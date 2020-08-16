export default {
  state: {
    incomes: []
  },
  mutations: {
    addIncome(state, payload) {
      state.incomes.push(payload);
    },
    setIncome(state, {index,income}) {
      state.incomes[index] = income;
    },
    delIncome(state,payload){
      state.incomes.splice(payload,1);
    }
  },
  getters: {
    getIncomes: state => state.incomes
  }
};
