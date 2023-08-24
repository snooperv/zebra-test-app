<template>
  <div class="card">
    <div class="card-image" v-if="card.image">
      <img class="card-image-img" alt="Logo" :src="card.image" />
    </div>
    <div class="card-content">
      <div class="card-date">
        <span class="card-date-day">{{ date.day }}</span>
        <span class="card-date-month">{{ date.month }} {{ date.year }}</span>
      </div>
      <div class="card-title" @click="getPage">
        {{ card.name }}
      </div>
      <div class="card-description" v-html="card.previewText"></div>
      <div class="card-tags">
        <span class="card-tag" :data-xmlId="card.type.xmlId">{{
          card.type.value
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import months from "@/constants/months";

export default {
  name: "CardComponent",
  props: ["card"],

  data() {
    return {
      date: {
        day: "",
        month: "",
        year: "",
      },
    };
  },

  mounted() {
    this.date = this.formatDate();
  },

  methods: {
    formatDate() {
      const date = new Date(this.card.date * 1000);

      return {
        day: date.getDate(),
        month: months[date.getMonth()],
        year: date.getFullYear(),
      };
    },
  },
};
</script>

<style scoped>
.card {
  padding: 32px;
  border-radius: 16px;
  border: 1px solid #0f62fe;
  position: relative;
  opacity: 1;
}

.cards-enter-active {
  transition: all 0.5s;
  /*transform: translateY(30px);*/
  opacity: 0;
}

.cards-enter-to {
  opacity: 1;
  /*transform: translateY(0);*/
}

.card-image {
  width: calc(100% + 66px);
  margin: -33px 0 0 -33px;
  border-radius: 14px 14px 0 0;
  overflow: hidden;
  height: 250px;
}

.card-image-img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.card-date {
  display: flex;
  gap: 4px;
  color: #a1a7b5;
  font-style: normal;
  margin-top: 16px;
}

.card:has(.card-image) .card-date {
  margin-top: 32px;
}

.card-date-day {
  font-size: 36px;
  font-weight: 400;
  line-height: 100%;
}

.card-date-month {
  font-size: 15px;
  font-weight: 700;
  line-height: 110%;
  letter-spacing: -0.15px;
  width: min-content;
}

.card-title,
.card-description {
  margin-top: 16px;
}

.card-title {
  color: #0c5bef;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  cursor: pointer;
}

.card-title:hover {
  color: #0029a9;
}

.card-description {
  color: #222327;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.2px;
  margin-bottom: 67px;
}

.card-tags {
  position: absolute;
  bottom: 32px;
}

.card-tag {
  border-radius: 360px;
  background: #f0f6fe;
  padding: 4px 16px;
  color: #00133a;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}
</style>
