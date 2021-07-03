import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    resultWeather: {},
  },
  mutations: {

    infoWeather(state, result) {
      state.resultWeather = result;
    },



  },
  actions: {



    getWeather: async function (context) {



      const apiKey = process.env.VUE_APP_API_KEY;

      
      const getWeather = async () => {
        let coords;
        try {
          coords = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
              (pos) => resolve(pos.coords),
              (err) => reject('No se permitió el acceso a la localización. Se usará por defecto Córdoba, Argentina.'),
            );
          })
        } catch(e) {
  
          coords = {
            latitude: -31.4261,
            longitude: -64.1916,
          };
          console.warn(e)
        }




        const queryParams = {
          lat: coords.latitude,
          lon: coords.longitude,
          exclude: 'minutely,hourly,alerts',
          units: 'metric',
          lang: 'es',
          appid: apiKey,
        }

        let url = 'https://api.openweathermap.org/data/2.5/onecall?';
        const paramsArray = Object.keys(queryParams);
        paramsArray.forEach((item, index) => {
          url += `${item}=${queryParams[item]}`;
          url += index === paramsArray.length - 1 ? '' : '&';
        });
        const response = await fetch(url);
        return response.json();
      }


      const dateN = new Date()
      let dia = dateN.getDay()
      const dias = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
      ];
      const diasArr = []

      for (let index = 0; index < 9; index++) {
        const diasMostrar = dias[dia++ % 7]
        diasArr.push(diasMostrar)

      }
      getWeather().then((result) => {
        const resultModif = {
          ...result,
          dayClim: diasArr,
        };
        context.commit('infoWeather', resultModif);

      })


    },

  },
  modules: {
  }
})
