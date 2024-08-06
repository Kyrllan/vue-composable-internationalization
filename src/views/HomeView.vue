<template>
  <div>
    <h1>{{ language.home.title }}</h1>
    <h2>{{ language.home.subtitle }}</h2>
  </div>
</template>

<script setup>
import { internationalization } from "../locale";

const { language } = internationalization();
</script>
