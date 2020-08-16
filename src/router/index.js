import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: ()=>import('./../views/Dashboard')
  },
  {
    path: "/Expense",
    name: "expense",
    component: ()=>import('./../views/Expense')
  },
  {
    path: "/Income",
    name: "income",
    component: ()=>import('./../views/Income')
  },
  {
    path: "/Category",
    name: "category",
    component: ()=>import('./../views/Cateogry')
  },
];

const router = new VueRouter({
  routes
});

export default router;
