<template>
  <div>
    <v-app-bar dark app class="teal pb-0">
      <v-container fluid>
        <v-row>
          <v-col class=" d-none d-sm-flex" sm="3" >
            <v-toolbar-title v-if="resultWeather">
            
              {{resultWeather.dayClim[0] ?   resultWeather.dayClim[0] : ""}}
              {{moment().format('DD-MM-YYYY')}}
            
            </v-toolbar-title>
          </v-col>
          <v-col sm="6" cols="12" class=" d-flex justify-center justify-sm-center ">
            <v-toolbar-title>{{now}}</v-toolbar-title>
          </v-col>
          <v-col sm="3" cols="6" class=" d-none d-sm-flex justify-center justify-sm-end ">
            <v-toolbar-title >{{resultWeather.timezone.split("/")[2]}}</v-toolbar-title>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "NavBar",

  data: () => ({
    now:0,
  }),

  mounted() {
    this.getWeather();
  },
  updated(){
    this.updateNow();
    setInterval(this.updateNow.bind(this), 1000);

  },


  methods: {
    ...mapActions(["getWeather"]),

    updateNow() {
      this.now = moment().format(" h:mm:ss a");
    }
  },
  computed: {
    ...mapState(["resultWeather"])
  }
};
</script>
