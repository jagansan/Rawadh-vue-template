<script setup>
import { SearchIcon, AdjustmentsHorizontalIcon, XIcon } from 'vue-tabler-icons';

const props = defineProps({
  closesearch: {
    type: Function,
    required: false
  }
});
</script>

<template>
  <SearchIcon stroke-width="1.5" size="17" class="text-lightText SearchIcon" />
</template>
