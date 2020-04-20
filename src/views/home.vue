<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="ids in displayinfo"
            v-bind:key="ids"
            :cols="ids.flex"
            class="d-flex"
          >
            <v-card class="d-flex flex-column" min-width="400" height="100%" hover= True, dark = True ripple = True >
              <v-img
                :src="ids.images.lg"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="300px"
              >
                <v-card-title>{{ ids.name }}</v-card-title>
              </v-img>
              <v-card-text class="justify-center">
                <h3>
                  Intelligence:{{ ids.powerstats.intelligence }}
                  <br />
                  Strength:{{ ids.powerstats.strength }}
                  <br />
                  Speed:{{ ids.powerstats.speed }}
                  <br />
                  Durability:{{ ids.powerstats.durability }}
                  <br />
                  Power:{{ ids.powerstats.power }}
                  <br />
                  Combat:{{ ids.powerstats.combat }}
                  <br />
                </h3>
                <v-card-actions>
      <v-btn
        text
         x-large  dark color="indigo"
         v-on:click="sendinfo(ids)"
      ><router-link to="/info">
        Learn More
        </router-link>
      </v-btn>
       <v-spacer></v-spacer>
      <v-btn v-if="$store.state.ids != null"
        text
         x-large color="blue-grey darken-1" dark
         right  = True
         v-on:click="sendtocompare (ids)"
      >
        Compare
      </v-btn>
    </v-card-actions>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-pagination
          v-model="currentPage"
          :per-page="perPage"
          :length="25"
          @input="paginate(currentPage)"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
          show-arrows = True
        ></v-pagination>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  mounted () {
    fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json')
      .then(response => response.json())
      .then(data => {
        this.info = data
        this.items = data
        this.displayinfo = data.slice(0, 9)
      })
  },
  methods: {
    paginate (currentPage) {
      const start = (currentPage - 1) * this.perPage
      this.displayinfo = this.info.slice(start, start + 9)
    },
    sendtocompare (ids) {
      this.$store.commit('ADD_ARRAY', ids)
    },
    sendinfo (ids) {
      this.$store.commit('infomat', ids)
    }
  },
  data () {
    return {
      info: [],
      displayinfo: [],
      perPage: 9,
      currentPage: 1
    }
  }
}

</script>
<style scoped>
h3 {
  text-align: center
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  height: 90px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: underline;
}

#nav a.router-link-exact-active {
  color: #42b983;
  text-decoration: none;
}

#nav ul {
  list-style-type: none;
  padding: 0;
}

#nav ul li {
  display: inline-block;
  margin: 0 10px;
}

h1 {
  font-size: 1.75em;
}

h2 {
  line-height: 2.5em;
  font-size: 1.25em;
}
</style>
