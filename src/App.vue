<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
    <BottomNav/>
  </v-app>
</template>

<script>
import BottomNav from "./components/BottomNav";

export default {
  name: "App",

  components: {
    BottomNav,
  },

  data: () => ({
    //
  })
};
</script>
