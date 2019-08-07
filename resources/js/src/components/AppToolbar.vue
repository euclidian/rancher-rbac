<template>
  <v-toolbar color="primary" fixed dark app>
    <v-toolbar-title>
      <v-toolbar-side-icon @click="handleDrawerToggle"></v-toolbar-side-icon>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn icon large flat @click="handleLogut">
        <v-avatar size="30px">
          <v-icon>power_settings_new</v-icon>
        </v-avatar>
      </v-btn>
      <form id="logout-form" action="/logout" method="POST" style="display: none;">
        <input type="hidden" name="_token" :value="csrf" />
      </form>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  name: "AppToolbar",
  components: {},
  data() {
    return {
      csrf: document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content"),
      items: [
        {
          icon: "account_circle",
          href: "#",
          title: "Profile",
          click: this.handleProfile
        },
        {
          icon: "settings",
          href: "#",
          title: "Settings",
          click: this.handleSetting
        },
        {
          icon: "fullscreen_exit",
          title: "Logout",
          click: this.handleLogut
        }
      ]
    };
  },
  computed: {
    toolbarColor() {
      return this.$vuetify.options.extra.mainNav;
    }
  },
  methods: {
    handleDrawerToggle() {
      this.$emit("side-icon-click");
    },
    handleFullScreen() {
      Util.toggleFullScreen();
    },
    handleLogut() {
      document.getElementById("logout-form").submit();
    },
    handleSetting() {},
    handleProfile() {}
  }
};
</script>

<style lang="stylus" scoped></style>
