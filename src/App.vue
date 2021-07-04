<template>
  <div id="app">
    <Search @search="search" />
    <p class="error" v-if="error">Произошла ошибка &#128546;</p>
    <p class="error" v-if="searchError">Ничего не найдено, попробуйте ввести другое слово</p>
    <JokesList :jokes="jokes"  v-if="!error"/>
  </div>
</template>

<script>
import JokesList from "./components/JokesList.vue";
import Search from "./components/Search.vue";
import api from "./api/index"

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
      error: false,
      isSearching: false,
      searchError: false,
    };
  },
  async mounted() {
      try {
        const res = await api.jokes.getAll();
        this.jokes = res.data.jokes;
      } catch (error) {
        console.log(error);
        this.error = true;
      }
  },  
  methods: {
    search(value) {
      this.inputValue = value;
      this.isSearching = true;
      this.searchJokes(value);
    },
    async searchJokes(value) {
      try {
        const res = await api.search.getAll(value);
        console.log(res)
        this.jokes = res.data.jokes;

        if(res.data.error === true) {
          this.searchError = res.data.error
        }
      } catch (error) {
        console.log(error);
        this.error = true;
      }
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.error {
  text-align: center;
  font-size: 30px;
  padding-top: 70px;
  margin: 0;
}
</style>