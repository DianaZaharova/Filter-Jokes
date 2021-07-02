<template>
  <div id="app">
    <Search @search="search" v-model="inputValue" />
    <JokesList :jokes="jokes" />
  </div>
</template>

<script>
import JokesList from "./components/JokesList.vue";
import Search from "./components/Search.vue";

export default {
  name: "App",
  components: {
    JokesList,
    Search,
  },
  data() {
    return {
      inputValue: "color",
      jokes: [],
      searchResult: false,
    };
  },
  async mounted() {
    const res = await fetch(
      `https://v2.jokeapi.dev/joke/Any?&amount=10`
    );

    const jokes = await res.json();
    this.jokes = jokes.jokes;
  },  
  methods: {
  },
  watch: {
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>