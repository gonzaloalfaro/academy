<template>
  <v-container>
    <v-toolbar>
      <v-text-field
        flat
        hide-details
        label="Search"
        prepend-icon="mdi-magnify"
        single-line
        color="blue-grey darken-4"
        v-model="search"
      ></v-text-field>
      <v-btn icon>
        <v-icon>mdi-notification-clear-all</v-icon>
      </v-btn>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: "Search",
  data: () => ({
    search: ""
  })
};
</script>
