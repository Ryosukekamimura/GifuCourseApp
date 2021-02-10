<template>
  <v-app>
    <v-app-bar
      fixed
      app
      color="light-gray"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <nuxt-link to="/" style="text-decoration: none" color='black'>
        <v-toolbar-title v-text="title"/>
      </nuxt-link>
      <v-spacer />

      <nuxt-link to="/ranking" style="text-decoration: none">
        <v-btn plain>
          <v-icon>mdi-chess-king</v-icon>
          Ranking
        </v-btn>
      </nuxt-link>

      <div v-if="this.$store.state.isLogin">
        <!--is Login True-->
        <nuxt-link to="/account" style="text-decoration:none">
          <v-btn plain>
            <h1>🤩</h1>
            <h3>Ryosuke Kamimura</h3>
          </v-btn>
        </nuxt-link>
      </div>
      <div v-else>
        <!--is Login False-->
        <nuxt-link to="/login" style="text-decoration: none">
          <v-btn plain>
            <v-icon>mdi-account</v-icon>
            Login
          </v-btn>
        </nuxt-link>
      </div>
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


