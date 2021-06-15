const token = MAPBOX_TOKEN;
const weatherMapToken = OPEN_WEATHER_TOKEN;
let zoomLevel = 10;
mapboxgl.accessToken = token;
let map;
map = initMap(zoomLevel);
addMainMarker();
addSearchOption();

let zoomBtn = document.getElementById("zoom");
zoomBtn.addEventListener("click", zoomIn)

let favLocationBtn = document.getElementById("favLocation");
favLocationBtn.addEventListener("click", hideOrShowMyFavouriteLocations)


function addSearchOption() {
    let geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
    map.addControl(geocoder);

    geocoder.on("result", function (event) {
        let marker = setMarker(event.result.geometry.coordinates)
            getPopup(marker);
        //event.re
    })
}

function zoomIn() {
    zoomLevel++;
    map = initMap(zoomLevel);
    addMainMarker();
    if (favLocationBtn.value === "false") {
        addMyFavouriteLocations();
    }
}

function initMap(zoomLevel) {
    //console.log("In init function")
    return new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-95.83494113076989, 29.708232766969303],
        zoom: zoomLevel,
    })
}

function addMainMarker() {
    map.addControl(new mapboxgl.FullscreenControl());
    let myMainMarker = new mapboxgl.Marker({color: "red"})
        .setLngLat([-95.83494113076989, 29.708232766969303])
        .addTo(map);
    addMapEvent(myMainMarker)
    getPopup(myMainMarker).addTo(map)
}

function addMyFavouriteLocations() {
    let myFavLocations = [
        [-95.8576491686086, 29.727306905860644],
        [-95.837220, 29.725367]
    ]
    myFavLocations.forEach(function (myFavLocation) {
        let myFavLocationMarker = setMarker(myFavLocation);

        getPopup(myFavLocationMarker)
    })
}

function hideOrShowMyFavouriteLocations() {
    //console.log("Button " + favLocationBtn.value)
    if (favLocationBtn.value === "true") {
        //console.log("inside if")
        addMyFavouriteLocations();
        favLocationBtn.value = "false";
        favLocationBtn.textContent = "Hide my favorite places"
    } else {
        map = initMap(zoomLevel);
        addMainMarker();
        favLocationBtn.value = "true";
        favLocationBtn.textContent = "Show my favorite places"
    }
}

function setMarker(point) {
    //console.log("point "+point)
    console.log(showWeather(point));
    return new mapboxgl.Marker().setLngLat(point).addTo(map);
}

function getPopup(msg) {
    //add to map is commented out to not show the popup on load, show it just on click
    return new mapboxgl.Popup().setHTML(
        `<p>${msg}</p>
        <img src="cover/coffee.jpeg" style="width: 70px; height: 50px" alt="">`)
    //.addTo(map);
}

function addMapEvent(myMarker) {
    map.on("click", function (event) {
        //initMap();
        myMarker.setLngLat(event.lngLat).addTo(map)
        getReverseGeocode([event.lngLat.lng, event.lngLat.lat], myMarker)
        console.log(event);
        //setPopUp(event.result.place_name)
    });
}

function getReverseGeocode(point, marker) {
    $.ajax({
            url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${point}.json?access_token=${mapboxgl.accessToken}`,
            success: function (data) {
                marker.setPopup(marker.getPopup(data.features[0].place_name)).addTo(map)
                    //.setHTML(data.features[0].place_name))
                    //.togglePopup();
            }
        }
    );
}

function addResultListener() {

}