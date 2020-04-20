<template>
  <v-toolbar color="grey lighten-2">
    <v-app-bar-nav-icon class="hidden-sm-and-down"></v-app-bar-nav-icon>
    <v-toolbar-title class="title mr-6 hidden-sm-and-down"></v-toolbar-title>
    <v-autocomplete
      v-model="model"
      :items="items"
      :loading="isLoading"
      :search-input.sync="search"
      chips
      clearable
      hide-details
      hide-selected
      item-text="name"
      item-value="symbol"
      label="Search the enigma..."
      solo
    >
      <template v-slot:selection="{ attr, on, item, selected }">
        <v-chip
          v-bind="attr"
          :input-value="selected"
          color="blue-grey"
          z
          class="white--text"
          v-on="on"
        >
          <v-icon left>mdi-coin</v-icon>
          <span v-text="item.name"></span>
        </v-chip>
      </template>
      <template v-slot:item="{ item }">
        <v-list-item-avatar
          color="indigo"
          class="headline font-weight-light white--text"
        >
          {{ item.name.charAt(0) }}
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="item.name"></v-list-item-title>
          <v-list-item-subtitle v-text="item.symbol"></v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon>mdi-coin</v-icon>
        </v-list-item-action>
      </template>
    </v-autocomplete>
    <template v-slot:extension>
      <v-tabs
        v-model="tab"
        background-color="indigo"
        color="blue-grey"
        slider-color="blue-grey"
        fixed-tabs
        dark
      >
      <v-spacer></v-spacer>
        <v-tab >
          <router-link to="/home">
            All
          </router-link>
        </v-tab>
        <v-spacer></v-spacer>
        <v-tab >
          <router-link to="/compare">
            Compare
          </router-link>
        </v-tab>
      </v-tabs>
    </template>
  </v-toolbar>
</template>

<script>
export default {
  mounted () {
    fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json')
      .then(response => response.json())
      .then(data => {
        this.items = data
      })
  },
  data () {
    return {
      isLoading: false,
      items: [],
      model: null,
      search: null,
      tab: null
    }
  },

  watch: {
    model (val) {
      if (val != null) this.tab = 0
      else this.tab = null
    }
  },
  search (val) {
    if (this.items.length > 0) return
    this.isLoading = true
  }
}
</script>
