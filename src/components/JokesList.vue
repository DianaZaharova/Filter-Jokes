<template>
  <div class="wrap">
    <ul class="list">
      <JokesItem v-for="joke in jokes" :key="joke.id" :joke="joke" />
    </ul>
  </div>
</template>

<script>
import JokesItem from "./JokesItem.vue";

export default {
  name: "JokesList",
  props: ["jokes"],
  data() {
    return {};
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
}
</style>