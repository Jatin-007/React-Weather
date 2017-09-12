var axios = require ('axios');
// const means constant
const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=d8240bfb9c3af8d40f9c4c28d52efa85&units=metric';


module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        
        return axios.get(requestUrl).then(function (res){
           debugger;
           if(res.data.cod && res.data.message) {
               throw new Error(res.data.message);
           } 
           else {
               return res.data.main.temp; 
           }
        }, function (res) {
            throw new Error(res.data.message);// if the open weather map sends an error we can show the error through this message
        })
   }
}