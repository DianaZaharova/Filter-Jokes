<template>
  <div class="wrap">
    <ul class="list">
      <JokesItem v-for="joke in jokes" :key="joke.id" :joke="joke" :likedJokesId="likedJokesId" @likedJokes="likedJokes"/>
    </ul>
  </div>
</template>

<script>
import JokesItem from "./JokesItem.vue";

export default {
  name: "JokesList",
  props: ["jokes"],
  data() {
    return {
      likedJokesId: [],
    };
  },
  async mounted() {
    const data = await localStorage.getItem("likedJokes");

    if(data) {
      this.likedJokesId = JSON.parse(data);
    }
  },
  methods: {
    likedJokes(id) {
      (id.length !== 0 && !this.likedJokesId.includes(id)) ? this.likedJokesId.push(Number(id)) : this.likedJokesId.pop(id);

      localStorage.setItem("likedJokes", JSON.stringify(this.likedJokesId))
    }
  },
  components: { JokesItem },
};
</script>

<style scoped>
.wrap {
  padding: 30px;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 1100px;
  margin: 0 auto;
}
</style>