<template>
  <v-container>
    <v-card>
      <v-container>
        <v-row justify="space-between">
          <v-col cols="auto" sm="12" md="4" align="center" justify="center">
            <v-card class="mx-auto" max-width="250" raised shaped>
              <v-img
                src="https://charts-images.scdn.co/REGIONAL_BO_DEFAULT.jpg"
                max-height="250"
              ></v-img>
            </v-card>
            <v-row justify="center" class="mt-5">
              <v-icon medium color="dark darken-2">mdi-heart-outline</v-icon>
              <!-- <v-icon medium color="dark darken-2">mdi-heart</v-icon> -->
              <div class="mx-2"></div>
              <v-icon medium color="dark darken-2">mdi-sort-variant</v-icon>
            </v-row>
            <v-row justify="center" class="mt-5">
              <p class="title">Asi me gustas</p>
            </v-row>
          </v-col>

          <v-col cols="auto" sm="12" md="8">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr v-for="i in 50" :key="i">
                    <td>
                      <v-btn icon color="dark lighten-2">
                        <v-icon large color="dark">mdi-play-circle-outline</v-icon>
                      </v-btn>
                    </td>
                    <!-- <td><v-icon large color="dark">mdi-play-circle</v-icon></td> -->
                    <td>
                      <v-btn icon color="dark lighten-2">
                        <v-icon medium color="dark">mdi-heart-outline</v-icon>
                      </v-btn>
                    </td>
                    <!-- <td><v-icon medium color="dark">mdi-heart</v-icon></td> -->
                    <td>Mi tema favorito</td>
                    <td>Mi artista favorito</td>
                    <td>03:30</td>
                    <td>
                      <v-btn icon color="success lighten-2">
                        <v-icon medium color="success">mdi-spotify</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Dashboard",
  data: () => ({})
};
</script>
