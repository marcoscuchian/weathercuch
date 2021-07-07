<template>
  <v-footer
    dark
    padless
    fluid
  >
    <v-card
      flat
      tile
      class="teal white--text text-center flex"
    >
 <v-btn
            v-for="item in items"
            :key="item.title"
            class="mx-0 mx-sm-4"
            :title="item.title"
            dark
            icon
            :href="item.href"
          >
            <v-icon size="24px">{{ item.icon }}</v-icon>
          </v-btn>


      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>@copyright Marcos Ariel Cuchian</strong>
      </v-card-text>
    </v-card>
  </v-footer>



</template>

<script>
export default {
  name: "FooterPage",

  data: () => ({
    items: [
      {
        title: "Linkedin",
        icon: "mdi-linkedin",
        href: "https://linkedin.com/in/marcoscuchian"
      },
      {
        title: "GitHub",
        icon: "mdi-github",
        href: "https://github.com/marcoscuchian/weathercuch"
      },
      {
        title: "Instagram",
        icon: "mdi-instagram",
        href: "https://www.instagram.com/marcoscuchian/"
      },
      {
        title: "Whatsapp",
        icon: "mdi-whatsapp",
        href: "https://wa.me/5493517437999"
      }
    ]
  })
};
</script>
