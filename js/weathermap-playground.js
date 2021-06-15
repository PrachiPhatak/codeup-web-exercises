console.log(showWeather([-95.8576491686086, 29.727306905860644]));

function showWeather(point) {
    let data1;
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather",
        type: "GET",
        data: {
            APPID: OPEN_WEATHER_TOKEN,
            lon: -95.3698,
            lat: 29.7604,
            units: "imperial"
        },
        success: function (data) {
            // pass the data to jquery.js
        }
    });
}

$.ajax({
    url: `http://api.openweathermap.org/data/2.5/forecast?q=London,uk&callback=test&appid=${OPEN_WEATHER_TOKEN}`,
    type: "GET",
    mode : "xml",
    data: {
        APPID: OPEN_WEATHER_TOKEN,
        lon: -95.3698,
        lat: 29.7604,
        units: "imperial"
    },
    success: function (data) {
        console.log(data.location)
    }
});

// $.ajax({
//     url: "http://api.openweathermap.org/data/2.5/forecast",
//     type: "GET",
//     data: {
//         APPID: OPEN_WEATHER_TOKEN,
//         lon: -95.3698,
//         lat: 29.7604,
//         units: "imperial"
//     },
//     success: function (data) {
//         console.log(data)
//     }
// })