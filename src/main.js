import { ApiService } from './../src/weather-service.js';

$(document).ready(function() {

  $('#getDoctorBtn').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    (async () => {
      let apiService = new ApiService();
      const response = await apiService.getDoctor(city);
      getElements(response);
    })();

    function getElements(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    }

  });
});
