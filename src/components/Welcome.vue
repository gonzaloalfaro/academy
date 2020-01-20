<template>
  <v-container>
    <v-sheet class="mx-auto" elevation="8">
      <p class="headline font-weight-bold px-6 pt-6">Listas de reproducción destacados</p>
      <v-slide-group v-model="modelone" class="px-6" center-active show-arrows>
        <v-slide-item
          v-for="n in 3"
          :key="n"
          v-slot:default="{ active, toggle }"
        >
        <router-link :to="{name: 'playlists', params: {id: `${n}`}}">
          <v-card
            :color="active ? 'primary' : 'grey lighten-1'"
            class="ma-4"
            height="200"
            width="150"
            @click="toggle"
          >
            <v-row class="fill-height" align="center" justify="center">
              <v-scale-transition>
                <v-icon
                  v-if="active"
                  color="white"
                  size="48"
                  v-text="'mdi-close-circle-outline'"
                ></v-icon>
              </v-scale-transition>
            </v-row>
          </v-card>
          </router-link>
        </v-slide-item>
      </v-slide-group>

      <p class="headline font-weight-bold px-6 pt-6">New releases</p>
      <v-slide-group v-model="model" class="px-6" center-active show-arrows>
        <v-slide-item
          v-for="n in 15"
          :key="n"
          v-slot:default="{ active, toggle }"
        >
          <v-card
            :color="active ? 'primary' : 'grey lighten-1'"
            class="ma-4"
            height="200"
            width="150"
            @click="toggle"
          >
            <v-row class="fill-height" align="center" justify="center">
              <v-scale-transition>
                <v-icon
                  v-if="active"
                  color="white"
                  size="48"
                  v-text="'mdi-close-circle-outline'"
                ></v-icon>
              </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>

      <p class="headline font-weight-bold px-6 pt-6">Music by genre</p>
      <v-slide-group v-model="model" class="px-6" center-active show-arrows>
        <v-slide-item
          v-for="n in 15"
          :key="n"
          v-slot:default="{ active, toggle }"
        >
          <v-card
            :color="active ? 'primary' : 'grey lighten-1'"
            class="ma-4"
            height="200"
            width="150"
            @click="toggle"
          >
            <v-row class="fill-height" align="center" justify="center">
              <v-scale-transition>
                <v-icon
                  v-if="active"
                  color="white"
                  size="48"
                  v-text="'mdi-close-circle-outline'"
                ></v-icon>
              </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>


    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: "Welcome",
  data: () => ({
    modelone: null,
    model: null
  })
};
</script>
