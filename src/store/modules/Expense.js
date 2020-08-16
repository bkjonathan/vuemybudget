export default {
  state: {
    expenses: []
  },
  mutations: {
    addExpense(state, payload) {
      state.expenses.push(payload);
    },
    setExpense(state, {index,expense}) {
      state.expenses[index] = expense;
    },
    delExpense(state,payload){
      state.expenses.splice(payload,1);
    }
  },
  getters: {
    getExpenses: state => state.expenses
  }
};
