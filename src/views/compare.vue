
<template>
<div v-if = "$store.state.ids.length > 1">
  <Chart type="radar" :data="chartData" />
  </div>
  <div v-else>
    <h3>
      Choose cards to compare
    </h3>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({}),
  data () {
    return {
      myjson: this.$store.state.one,
      myObj: {},
      chartData: {
        labels: [
          'Intelligence',
          'Strength',
          'Speed',
          'Durability',
          'Power',
          'Combat'
        ],
        datasets: [
          {
            label: this.$store.state.one.name,
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [
              this.$store.state.one.powerstats.intelligence,
              this.$store.state.one.powerstats.strength,
              this.$store.state.one.powerstats.speed,
              this.$store.state.one.powerstats.durability,
              this.$store.state.one.powerstats.power,
              this.$store.state.one.powerstats.combat
            ]
          },
          {
            label: this.$store.state.two.name,
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [
              this.$store.state.two.powerstats.intelligence,
              this.$store.state.two.powerstats.strength,
              this.$store.state.two.powerstats.speed,
              this.$store.state.two.powerstats.durability,
              this.$store.state.two.powerstats.power,
              this.$store.state.two.powerstats.combat
            ]
          }
        ]
      }
    }
  }
}
</script>
<style scoped>
</style>
