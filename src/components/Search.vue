<template>
  <div class="wrap">
    <form class="form">
      <input
        class="input"
        type="text"
        name="search"
        placeholder="Введите слово для поиска среди анекдотов"
        id="search"
        v-model="value"
      />
      <button class="button" type="button" @click="search">Поиск</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    search() {
      this.$emit("search", this.value);
    },
  },
};
</script>

<style scoped>
.wrap {
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(23, 43, 77, 0.08);
  border-radius: 8px;
  padding: 20px 40px;
}

.form {
  display: flex;
  gap: 20px;
  height: 34px;
  justify-content: center;
}

.input {
  width: 340px;
  height: 32px;
  background: #fafbfc;
  border: 1px solid #dfe1e6;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  padding: 12px 6px;
  transition: border 0.2s;
  font-size: 14px;
  line-height: 20px;
  height: 100%;
}

.input::placeholder {
  color: #5e6c84;
}

.input:hover {
  border: 1px solid #4c9aff;
}

.input:focus {
  outline: none;
  box-shadow: 0px 0px 4px rgba(0, 101, 255, 0.24),
    inset 0px 0px 4px rgba(23, 43, 77, 0.5);
  border: 1px solid #0065ff;
}

.input:focus::placeholder {
  font-size: 0;
}

.button {
  border: 1px solid #0065ff;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: transparent;
  color: #0065ff;
  cursor: pointer;
  padding: 6px 12px;
  transition: background-color 0.2s, color 0.2s;
  font-size: 14px;
  line-height: 20px;
  height: 100%;
}

.button:hover {
  background-color: #0065ff;
  color: #ffffff;
}

.button:active {
  background-color: #0052cc;
}
</style>