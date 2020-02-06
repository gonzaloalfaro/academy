<template>
  <div class="about">
    <v-container>
      <v-card class="mx-auto" raised>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1 text-center"
              >App Deezer</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>

      <p class="pa-10">Desarrollado por Ruben Peñarrieta y Gonzalo Alfaro usando VueJS, consumiendo api de Deezer</p>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";
export default {
  name: "about",
  data: () => ({}),
  computed: {
    ...mapState(["info"])
  },
  methods: {
    ...mapActions(["getInfo"])
  },
  created() {
    this.getInfo();
  }
};
</script>
