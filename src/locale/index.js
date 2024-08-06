import { pt } from "../locale/pt";
import { en } from "../locale/en";
import { ref, computed } from "vue";

const locale = {
  "pt-br": pt,
  "en-us": en,
};
const language = computed(() => locale[defaultLanguage.value]);
const defaultLanguage = ref("pt-br");

export const internationalization = () => {
  return { defaultLanguage, language };
};
