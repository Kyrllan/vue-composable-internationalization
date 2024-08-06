import { defineStore } from "pinia";
import { pt } from "./pt";
import { en } from "./en";

export const internationalization = defineStore("internationalization", () => {
  const defaultLanguage = "pt-br";
  const locale = {
    "pt-br": pt,
    "en-us": en,
  };

  const language = locale[defaultLanguage];

  return { defaultLanguage, language };
});
