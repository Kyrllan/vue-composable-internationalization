<script setup>
import { RouterLink, RouterView } from "vue-router";
import { internationalization } from "./locale";

const { defaultLanguage, language } = internationalization();

function setDefaultLanguage(lang) {
  defaultLanguage.value = lang;
}
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">{{ language.home.title }}</RouterLink>
      <RouterLink to="/about">{{ language.about.title }}</RouterLink>
      <button @click.stop="setDefaultLanguage('pt-br')">PT</button>
      <button @click.stop="setDefaultLanguage('en-us')">EN</button>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
import { internationalization } from "./locale";
