<template>
  <div class="md-layout">
    <div class="md-layout-item">
      <md-card class="md-accent" md-with-hover v-for="(item,index) in shifters" :key="index" style="width:320px;margin: 4px;display: inline-block; vertical-align: top;">
        <md-ripple>
          <md-card-header>
            <div class="md-title">{{item.date}}</div>
          </md-card-header>
          <md-content :class="{'md-accent': item.price === bestPrice.price}">
            £ {{item.price}}
          </md-content>
          <md-divider></md-divider>
        </md-ripple>
      </md-card>
    </div>
  </div>


</template>

<script>
import moment from "moment";

export default {
  name: "Shifters",
  data() {
    return {
      shifters: [
          {
            date: moment('31 Jan 2021').format('dddd'),
            price: 75.0,
          },
        {
          date: moment('30 Jan 2021').format('ddd'),
          price: 65.0,
        },
        {
          date: moment('29 Jan 2021').format('ddd'),
          price: 45.0,
        },
        {
          date: moment('28 Jan 2021').format('ddd'),
          price: 50.0,
        },
        {
          date: moment('1 Feb 2021').format('ddd'),
          price: 50.0,
        },
        {
          date: moment('2 Feb 2021').format('ddd'),
          price: 55.0,
        },
        {
          date: moment('3 Feb 2021').format('ddd'),
          price: 85.0,
        },
        {
          date: moment('4 Feb 2021').format('ddd'),
          price: 50.0,
        },
        {
          date: moment('5 Feb 2021').format('ddd'),
          price: 75.0,
        },
        {
          date: moment('6 Feb 2021').format('ddd'),
          price: 65.0,
        },
        {
          date: moment('7 Feb 2021').format('ddd'),
          price: 75.0,
        },
        {
          date: moment('8 Feb 2021').format('ddd'),
          price: 65.0,
        }
      ]
    }
  },
  methods: {

  },
  computed:{
    bestPrice() {
     return this.shifters.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
    },
    secondBest() {
      let min = this.bestPrice;
      let filtered = this.shifters.filter((item) => item.price !== min.price)
      return filtered.reduce((prev,curr) => prev.price <curr.price ? prev :curr);
    }
  }
}
</script>

<style scoped>

</style>
