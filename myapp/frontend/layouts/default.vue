<template>
  <v-app>
    <v-app-bar
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title v-text="title"/>
      <v-spacer />

      <nuxt-link to="/about" style="text-decoration: none">
        <v-btn plain>
          <v-icon>mdi-apps</v-icon>
            About
        </v-btn>
      </nuxt-link>

      <nuxt-link to="/ranking" style="text-decoration: none">
        <v-btn plain>
          <v-icon>mdi-chess-king</v-icon>
          Ranking
        </v-btn>
      </nuxt-link>

      <nuxt-link to="/login" style="text-decoration: none">
        <v-btn plain>
          <v-icon>mdi-account</v-icon>
          Login
        </v-btn>
      </nuxt-link>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <span>岐阜大学　シラバスより</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        title: '岐阜大学　全共科目.com'
      }
    }
  }
</script>


