<template>
  <v-app>
    <v-main fluid>
      <div class="pt-0" fluid>
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>
<style scoped>
</style>