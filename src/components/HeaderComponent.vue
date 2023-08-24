<template>
  <div class="header">
    <div class="narrow-width">
      <div class="header-logo">
        <img class="header-logo-img" alt="Logo" src="@/assets/logo.png" />
        <span class="header-title">alpha</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
.header {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08);
  padding: 40px 0;
}

.header-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  width: max-content;
}

.header-logo-img {
  width: 43px;
  height: 43px;
}

.header-title {
  color: #1d37af;
  font-size: 40px;
  font-style: normal;
  font-weight: 900;
  line-height: 120%;
  letter-spacing: -2px;
}
</style>
