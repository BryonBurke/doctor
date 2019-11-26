import { ApiService } from './../src/api-service.js';

$(document).ready(function() {

  $('#weatherLocation').click(function() {
    const ailment = $('#ailment').val();
    $('#ailment').val("");

    (async () => {
      let weatherService = new ApiService();
      const response = await weatherService.getWeatherByCity(ailment);
      getElements(response);
    })();

    function getElements(response) {
      $('.showHumidity').text(`The humidity in ${ailment} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    }

  });
});
