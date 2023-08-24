<template>
  <HeaderComponent />
  <BannerComponent />
  <MainComponent />
  <FooterComponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import BannerComponent from "@/components/BannerComponent.vue";
import MainComponent from "@/components/MainComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    FooterComponent,
    MainComponent,
    BannerComponent,
    HeaderComponent,
  },

  setup() {
    document.title = "Новости - alpha";
  },
};
</script>

<style>
@font-face {
  font-family: "Nunito Sans";
  src: url(@/assets/fonts/NunitoSans.ttf);
  font-style: normal;
}

body {
  margin: 0;
}

h1 {
  margin: 0;
}

#app {
  font-family: "Nunito Sans", sans-serif;
}

.narrow-width {
  margin: 0 100px;
}

@media (max-width: 600px) {
  .narrow-width {
    margin: 0 50px;
  }
}

@media (max-width: 480px) {
  .narrow-width {
    margin: 0 20px;
  }
}
</style>
