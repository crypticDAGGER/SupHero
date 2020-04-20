<template>
  <div id="app">
    <navigation />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
// import home from '@/views/home.vue'
// import compare from '@/views/compare.vue'
import navigation from '@/components/navigation.vue'

export default {
  name: 'App',
  components: { navigation }
}
</script>
<style scoped>
body {
  background-image: linear-gradient(
      to top right,
      rgba(0, 0, 0, 0) 0%,
      rgba(cadetblue, 0.9) 80%
    ),
    linear-gradient(to bottom right, salmon, darken(cornflowerblue, 10%));
  min-height: 100vh;
  min-width: 100vw;
  overflow: auto;
  font-family: "Lato", sans-serif;
  color: var(--black);
  padding: 1rem;
}
</style>
