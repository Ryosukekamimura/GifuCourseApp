<template>
  <v-app>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title v-text="title"/>
      <v-spacer />
      <v-btn plain>
        <v-icon>mdi-apps</v-icon>
        About
      </v-btn>
      <v-btn plain>
        <v-icon>mdi-chess-king</v-icon>
        Ranking
      </v-btn>
      <v-btn plain>
        <v-icon>mdi-account</v-icon>
        Login
      </v-btn>
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
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'About',
          to: '/about'
        },
        {
          icon: 'mdi-chess-king',
          title: 'Ranking',
          to: '/ranking'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '岐阜大学　全共科目'
    }
  }
}
</script>
