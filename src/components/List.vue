<template>
  <div class="list">
    <ul class="list__list">
      <li class="list__item" v-for="joke in jokes" :key="joke.id">
        <div>
          <p class="list__text">{{ joke.setup }}</p>
          <p class="list__text">{{ joke.delivery }}</p>
          <p class="list__text">{{ joke.joke }}</p>
        </div>
        <div class="list__like">
          <input
            class="list__input"
            type="checkbox"
            :id="joke.id"
            :name="joke.id"
            :checked="liked"
          />
          <label class="list__label" :for="joke.id">
            <svg
              class="list__icon-like"
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
    </ul>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      jokes: [],
      liked: false,
    };
  },
  components: {},
  async mounted() {
    const res = await fetch(
      "https://v2.jokeapi.dev/joke/Programming?amount=10"
    );
    const jokes = await res.json();
    this.jokes = jokes.jokes;

    console.log(this.jokes);
  },
};
</script>

<style>
.list {
  padding: 30px;
}

.list__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.list__item {
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

.list__item:hover {
  box-shadow: 0px 4px 20px rgba(23, 43, 77, 0.4);
}

.list__text {
  font-style: 14px;
  line-height: 20px;
  margin: 0;
}

.list__input {
  display: none;
}

.list__input:checked + .list__label .list__icon-like path {
  fill: #de350b;
}

.list__label {
  cursor: pointer;
}

.list__label:hover .list__icon-like path {
  fill: #ff5630;
}

.list__icon-like path {
  transition: fill 0.2s;
}
</style>