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
      inputValue: "",
      jokes: [],
    };
  },
  async mounted() {
    const res = await fetch(
      `https://v2.jokeapi.dev/joke/Programming?idRange=0-10&amount=10`
    );

    const result = await res.json();
    const jokes = result.jokes

    localStorage.setItem("jokes", JSON.stringify(jokes));
    const data = await localStorage.getItem("jokes");
    this.jokes = JSON.parse(data);
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