<template>
  <v-app dark>
    <v-content>
      <section>
        <v-parallax src="@/assets/Fondo.jpg" height="600">
          <v-layout column align-center justify-center class="white--text">
            <img src="@/assets/deezer1.png" alt="Vuetify.js" height="90" aspect-ratio="50%" />
            <br />
            <h1 class="black--text mb-2 display-1 text-center">Las mejores playlist a tu alcance</h1>
            <div class="subheading black--text mb-4 text-center">Powered by Deezer</div>
            <a href="/explore" target="_blank">
              <v-btn
                class="mt-12"
                color="blue lighten-2"
                dark
                large
              >Descubre más</v-btn>
            </a>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout column wrap class="my-12" align-center>
          <v-flex xs12 sm4 class="my-4">
            <div class="text-center">
              <h2 class="headline">Adentrate al mundo de la música</h2>
              <span class="subheading">Playlist en un solo lugar</span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-shopping-music</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">¿Por qué Deezer?</div>
                    </v-card-title>
                    <v-card-text>Encuentra tus futuras pasiones y tus canciones favoritas de siempre entre 56 millones de canciones.</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-flash</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Crea tu propia biblioteca musical</div>
                    </v-card-title>
                    <v-card-text>Crea playlists con millones de canciones y llévalas contigo allá donde vayas.</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-headset</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">¿No hay wifi? No pasa nada</div>
                    </v-card-title>
                    <v-card-text>Con Deezer Premium, no necesitas estar conectado para disfrutar de tus canciones favoritas.</v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80"
        >
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-4 text-center">Mostrando el futuro de la música</div>
            <em>Sé parte del mundo de la innovación</em>
            <v-btn
              class="mt-12"
              color="blue lighten-2"
              dark
              large
              href="https://explore"
            >Descubre más</v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <v-footer color="black darken-2">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-4">
              Desarrollado por
              <a
                class="white--text"
                href="https://github.com/penarrietatest"
              >Ruben Peñarrieta</a> y
              <a class="white--text" href="https://github.com/gonzaf7">Gonzalo Alfaro</a> usando
              <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify.</a>
              <a class="white--text">
                Plantilla por
                <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang.</a>
              </a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script >
export default {};
</script>

<style lang="sass" scoped>
  a
    text-decoration: none
</style>