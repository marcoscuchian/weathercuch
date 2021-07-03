<template>
  <div app class="flex mb-15 pt-0" fluid >
    <v-row dark class="my-0 triangle teal">
      <v-col>
        <v-card dark app class="dorderRow">
          <v-row class="infoday d-flex justify-center">
            <v-col class="mt-xs-4 mt-0 pr-xs-0 mb-0 pb-0 pt-1 pt-sm-10" sm="4" cols="12">
              <h4 class="d-flex d-sm-none d-flex justify-center">
                {{resultWeather.dayClim[0]}}
                {{moment().format('DD-MM-YYYY')}}
                {{resultWeather.timezone.split("/")[2]}}
              </h4>
              <v-simple-table class="transparent" dense>
                <template>
                  <tbody>
                    <tr>
                      <td>
                        <h2>Indice UV actual</h2>
                      </td>
                      <td>
                        <h2>{{ resultWeather.current.uvi}}</h2>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>Visibilidad actual</h2>
                      </td>
                      <td>
                        <h2>{{ resultWeather.current.visibility / 1000}} km</h2>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>Viento actual</h2>
                      </td>
                      <td>
                        <h2
                          class="transparent"
                        >{{ Math.round(resultWeather.current.wind_speed *3.60)}} k/h</h2>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
            <v-col sm="2" cols="12" class="pb-0 ma-0 pt-1 pr-0 pr-sm-0 d-flex justify-center ">
              <v-img
                contain
                class="IconPrin"
                width="150"
                :src="`http://openweathermap.org/img/wn/${resultWeather.daily[0].weather[0].icon}@2x.png`"
              ></v-img>
            </v-col>
            <v-col cols="12" sm="2" class=" pt-0 pt-sm-15" v-if="resultWeather">
              <h2 class="d-flex justify-center">{{ Math.round(resultWeather.current.temp)}}&deg;C</h2>
              <h2 class="d-flex justify-center">{{resultWeather.current.weather[0].description.charAt(0).toUpperCase()  }}{{resultWeather.current.weather[0].description.slice(1)  }}</h2>
            </v-col>
            <v-col class="mt-xs-4 mt-0 pr-xs-0 pr-0 pl-0  mb-0 pb-0 pt-1 pt-sm-10" sm="4" cols="11">
              <v-simple-table class="transparent" dense>
                <template v-slot:default>
                  <tbody>
                    <tr>
                      <td>
                        <h2>Maxima actual</h2>
                      </td>
                      <td>
                        <h2>{{Math.round(resultWeather.daily[0].temp.max)}}&deg;C</h2>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>Minima actual</h2>
                      </td>
                      <td>
                        <h2>{{Math.round(resultWeather.daily[0].temp.min)}}&deg;C</h2>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>Humedad actual</h2>
                      </td>
                      <td>
                        <h2 class="transparent">{{resultWeather.current.humidity}}%</h2>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>Prob. de Precipitaciones:</h2>
                      </td>
                      <td>
                        <h2 class="transparent">{{Math.round( resultWeather.daily[0].pop)}}%</h2>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <!--  card dia clima  -->
    <v-container>
      <v-row class="d-flex justify-center mt-10">
        <v-col
          sm="3"
          cols="10"
          class="d-flex justify-center trasparent"
          v-for="(i, index) in resultWeather.daily"
          :key="i.tem"
        >
          <template>
            <!--    
            v-slot:default="{ hover }" en el template
            -->
            <v-card elevation="24" width="500" height="auto" class="rounded-xl cardW"  dense>
              <v-list-item class="py-0 my-0">
                <v-list-item-content class="py-0">
                  <v-list-item-subtitle class="my-0 d-flex justify-center">
                    <h3>{{resultWeather.dayClim[index]}}</h3>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-card-text class="py-0">
                <v-row align="center" class="py-0">
                  <v-col class="text-h5 d-flex justify-end pr-0" cols="6">
                    <h1>{{Math.round(i.temp.day)}}&deg;</h1>
                    <h2>c</h2>
                  </v-col>
                  <v-col cols="6">
                    <v-img
                      :src="`http://openweathermap.org/img/wn/${i.weather[0].icon}@2x.png`"
                      alt="Sunny image"
                      width="100"
                    ></v-img>
                  </v-col>
                </v-row>
              </v-card-text>

              <v-simple-table class="cardW transparent" dense>
                <template v-slot:default class="cardW">
                  <tbody>
                    <tr class="py-0 my-0">
                      <td class="d-flex justify-center">{{i.weather[0].description.charAt(0).toUpperCase()}}{{i.weather[0].description.slice(1)  }}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Maxima</td>
                      <td>{{Math.round(i.temp.max)}}&deg;C</td>
                    </tr>
                    <tr>
                      <td>Minima</td>
                      <td>{{Math.round(i.temp.min)}}&deg;C</td>
                    </tr>
                    <tr>
                      <td>Humedad</td>
                      <td>{{Math.round(i.humidity)}}%</td>
                    </tr>
                    <tr>
                      <td>Prob. de Precipitaciones:</td>
                      <td>{{i.pop}}%</td>
                    </tr>
                    <tr>
                      <td>Indice UV</td>
                      <td>{{ i.uvi}}</td>
                    </tr>
   
                    <tr>
                      <td>Viento:</td>
                      <td>{{ Math.round(i.wind_speed *3.60)}} k/h</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>

              <v-divider></v-divider>
            </v-card>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "Weather",

  data: () => ({
    overlay: false
  }),
  mounted() {
    this.getWeather();
  },

  updated() {
  },

  methods: {
    ...mapActions(["getWeather"])
  },
  computed: {
    ...mapState(["resultWeather"])
  }
};
</script>


<style scoped>
.cardW {
  background: rgba(255, 255, 255, 0.904) !important;
  overflow: hidden;
}

.triangle {
  position: relative;
}

.triangle::before {
  content: "";
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 40px 40px 0 40px;
  border-color: #009688 transparent transparent transparent;
  left: 15%;
  transform: translateX(-50%) translateY(100%);
}

.dorderRow {
  background: #009688 !important;
  box-shadow: none !important;
}

@media only screen and (max-width: 600px) {
  .infoday {
    border: none !important;
  }
  .IconPrin {
    width: 150px !important;
    height: 150px !important;
  }
}
</style>