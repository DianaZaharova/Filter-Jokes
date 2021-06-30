<template>
  <div id="app">
    <Search />
    <List />
  </div>
</template>

<script>
import List from "./components/List.vue";
import Search from "./components/Search.vue";

export default {
  name: "App",
  components: {
    List,
    Search,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
