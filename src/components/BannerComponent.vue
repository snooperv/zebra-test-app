<template>
  <div class="banner">
    <div class="banner-title narrow-width">
      <h1>Новости</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerComponent",
};
</script>

<style scoped>
.banner {
  height: 320px;
  background-image: url("@/assets/banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.banner-title {
  padding: 48px 0;
  max-width: 1240px;
}

.banner-title h1 {
  color: #17171a;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: -0.4px;
}
</style>
