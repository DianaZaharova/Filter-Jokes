export default function(instance) {
  return {
    getAll() {
      return instance.get("Programming?idRange=0-10&amount=10");
    },
  };
}
