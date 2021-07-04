export default function(instance) {
  return {
    getAll(value) {
      return instance.get(`Any?contains=${value}&amount=10`);
    },
  };
}
