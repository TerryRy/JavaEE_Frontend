<template>
  <div id="app">
    <HeadBar v-if="showHeadBar"/>
    <div id="mainBody">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import HeadBar from "@/components/HeadBar.vue";
import router from "@/router";

export default {
  name: 'App',
  components: {
    HeadBar,
  },
  setup() {
    const route = ref(useRoute());
    const showHeadBar = ref(!['/login', '/register'].includes(route.value.path));
    console.log(route.value.path);
    router.beforeEach((to, from, next) => {
      showHeadBar.value = !['/login', '/register'].includes(to.path);
      next();
    })
    return {
      showHeadBar
    };
  },
};
</script>

<style>

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

#mainBody {
  margin: 5px;
  padding: 5px;
}
</style>
