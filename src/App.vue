<template>
  <div id="app">
    <v-app>
      <router-view />
    </v-app>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/main.scss";

.cursor-pointer {
  cursor: pointer;
}
html {
  overflow: auto;
}
@media (min-device-width: 800px) {
  html,
  body {
    height: 100%;
    overflow: hidden !important;
  }
}
</style>