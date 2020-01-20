<template>
  <v-container>
    <div class="grid-container">
      <div class="a">
        <p>hola1</p>
      </div>
      <div>
        <p>hola4</p>
        <v-img
          src="https://i.scdn.co/image/f94cbc0d16fded80c38c2f685356cf4275f885de"
          max-width="500"
          max-height="500"
        ></v-img>

        <br />
        <h3>Karol G, Nicki Minaj</h3>
        <h4>Tusa</h4>
      </div>
      <div>
        <div class="text-center">
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Tusa</v-list-item-title>
              </v-list-item-content>

              <v-spacer></v-spacer>

              <v-list-item-icon>
                <v-btn icon>
                  <v-icon>mdi-rewind</v-icon>
                </v-btn>
              </v-list-item-icon>
              <v-list-item-icon :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }">
                <v-btn icon>
                  <v-icon>mdi-pause</v-icon>
                </v-btn>
              </v-list-item-icon>

              <v-list-item-icon class="ml-0" :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }">
                <v-btn icon>
                  <v-icon>mdi-fast-forward</v-icon>
                </v-btn>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Calories</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </div>
      <div>
        <p>hola6</p>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ]
  })
};
</script>
<style>
.grid-container {
  display: grid;
  grid-template-areas:
    "sidebar content"
    "footer footer";
  grid-template-rows: 150px 400px 100px;
  grid-template-columns: 200px 1fr;
}

.a {
  grid-row-start: footer;
  grid-row-end: footer;
  grid-column-start: footer;
  grid-column-end: footer;
}
</style>

