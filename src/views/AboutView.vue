<template>
  <div>
    <h1>{{ language.about.title }}</h1>
    <h2>{{ language.about.subtitle }}</h2>
  </div>
</template>

<script setup>
import { internationalization } from "@/locale";

const { language } = internationalization();
</script>
