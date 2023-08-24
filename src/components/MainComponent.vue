<template>
  <div class="main narrow-width">
    <transition-group name="cards" tag="div" class="main-cards">
      <CardComponent v-for="card in cards" :card="card" :key="card.code" />
    </transition-group>
    <div class="main-buttons">
      <button
        class="btn-load-more"
        @click="loadMore"
        v-if="nav.current < nav.total"
      >
        Загрузить ещё
      </button>
    </div>
  </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
import requestData from "@/helpers/request";

export default {
  name: "MainComponent",
  components: { CardComponent },
  data() {
    return {
      cards: [],
      nav: {
        current: 0,
        total: 0,
      },
    };
  },

  async mounted() {
    const data = await requestData("http://flems.github.io/test/api/news/");
    this.setValues(data);
  },

  methods: {
    setValues(data) {
      this.cards.push(...data.items);
      this.nav.current = data.nav.current;
      this.nav.total = data.nav.total;
    },

    async loadMore() {
      if (this.nav.current < this.nav.total) {
        this.nav.current++;
        const data = await requestData(
          `http://flems.github.io/test/api/news/${this.nav.current}`,
        );
        this.setValues(data);
      }
    },
  },
};
</script>

<style scoped>
.main {
  padding: 64px 0 0;
}

.main-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 64px;
  column-gap: 48px;
}

.main-buttons {
  padding: 72px 0;
  text-align: center;
}

.btn-load-more {
  border-radius: 8px;
  border: 1px solid #002dbf;
  padding: 16px 32px;
  background: #fff;
  color: #002dbf;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.2px;
  cursor: pointer;
  transition: 0.5s all;
}

.btn-load-more:hover {
  background: #002dbf;
  color: #fff;
}

@media (max-width: 1366px) {
  .main-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 950px) {
  .main-cards {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
