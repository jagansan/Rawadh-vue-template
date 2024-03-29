<script lang="ts">
  export default {
    data: () => ({
      items: [
        {
          title: 'Dashboard',
          disabled: false,
          href: '/',
        },
        {
          title: 'Project List',
          disabled: false,
          href: '/project',
        },
        {
          title: 'Project Details',
          disabled: true,
        },
      ],
    }),
  }
</script>

<template>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
</template>
