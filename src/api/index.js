import instance from "./instance";

import jokesModule from "./jokes";
import searchModule from "./search";

export default {
  jokes: jokesModule(instance),
  search: searchModule(instance),
};
