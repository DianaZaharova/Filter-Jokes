<template>
  <li class="item" :class="{ active: isLiked }">
    <div>
      <p class="text">{{ joke.setup }}</p>
      <p class="text">{{ joke.delivery }}</p>
      <p class="text">{{ joke.joke }}</p>
    </div>
    <div>
      <input class="input" type="checkbox" :id="joke.id" :value="joke.id" checked="isLiked" v-model="isLiked" v-on:change="likedJokes"/>
      <label class="label" :for="joke.id">
        <svg
          class="icon"
          height="25px"
          style="enable-background: new 0 0 512 512"
          version="1.1"
          viewBox="0 0 512 512"
          width="25px"
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271 C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1    C283.3,86.999,310.67,59.628,365.4,59.628z"
            fill="#ededf0"
          />
        </svg>
      </label>
    </div>
  </li>
</template>

<script>
export default {
  name: "JokesItem",
  props: ["joke", "likedJokesId"],
  data() {
    return {
      isLiked: false,
      likeId: [],
    };
  },
  async mounted() {
    if(this.likedJokesId?.includes(this.joke.id)) {
      this.isLiked = true;
    }
  },
  watch: {
  },
  methods: {
    likedJokes() {
      this.isLiked ? this.likeId.push(this.joke.id) : this.likeId.pop(this.joke.id);
      this.$emit("likedJokes", this.likeId);
    }
  }
};
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(23, 43, 77, 0.08);
  border-radius: 8px;
  padding: 24px;
  cursor: pointer;
  transition: box-shadow 0.2s;
}

.active {
  background-color: #F2F7FF;
  box-shadow: 0px 4px 20px rgba(23, 43, 77, 0.4);
}

.item:hover {
  box-shadow: 0px 4px 20px rgba(23, 43, 77, 0.4);
}

.text {
  font-style: 14px;
  line-height: 20px;
  margin: 0;
}

.input {
  display: none;
}

.input:checked + .label .icon path {
  fill: #de350b;
}

.label {
  cursor: pointer;
}

.label:hover .icon path {
  fill: #ff5630;
}

.icon path {
  transition: fill 0.2s;
}
</style>