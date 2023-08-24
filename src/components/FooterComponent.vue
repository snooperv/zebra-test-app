<template>
  <div class="footer">
    <div class="footer-container narrow-width">
      <div class="footer-logo">
        <img class="footer-logo-img" alt="Logo" src="@/assets/logo.png" />
        <span class="footer-title">alpha</span>
      </div>
      <div class="footer-copyright">© alpha, 2023</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer {
  background: #f0f6fe;
  padding: 64px 0;
}

.footer-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 6px;
}

.footer-logo-img {
  width: 32px;
  height: 32px;
}

.footer-title {
  color: #1d37af;
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  line-height: 120%;
  letter-spacing: -1.5px;
}

.footer-copyright {
  color: #81899d;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
}
</style>
