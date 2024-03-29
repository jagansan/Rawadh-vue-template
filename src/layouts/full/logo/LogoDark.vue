<template>
  <div class="logo">
    <RouterLink to="/">
      <v-img :width="300" cover src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
    </RouterLink>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const primary = ref('rgb(var(--v-theme-primary))');
const secondary = ref('rgb(var(--v-theme-secondary))');
</script>
