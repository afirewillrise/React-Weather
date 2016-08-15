var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=4b40c75c123f58334fd87194bd0129db&units=imperial';

module.exports = {
  getTemp: function(location) {
    // OpenWeatherMaps API KEY - 4b40c75c123f58334fd87194bd0129db
    // Example URL for Current Weather - http://api.openweathermap.org/data/2.5/weather?appid=4b40c75c123f58334fd87194bd0129db&units=imperial
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestURL).then(function(res) {
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res) {
      throw new Error(res.data.message);
    });
  }
};
