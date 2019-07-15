<template>
  <v-app>
    <v-navigation-drawer app>
      <v-toolbar flat class="blue">
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title white--text">Rancher RBAC</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-tile to="/usermanagement">
          <v-list-tile-action>
            <v-icon>face</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>User Management</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="logout()">
          <v-list-tile-action>
            <v-icon>power_settings_new</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Log Out</v-list-tile-title>
            <form id="logout-form" action="/logout" method="POST" style="display: none;">
              <input type="hidden" name="_token" :value="csrf">
            </form>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app></v-toolbar>
    <v-content>
      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>
    <v-footer app>tiketux.com</v-footer>
  </v-app>
</template>
<script>
export default {
  name: "HomeComponent",
  
  data() {
    return {
      navigation: "usermanagement",
      admin: false,
      csrf: document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content")
    };
  },
  methods: {
    logout() {
      document.getElementById("logout-form").submit();
    }
  }
};
</script>
