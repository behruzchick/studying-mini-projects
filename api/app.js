let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -4.397, lng: 2.644 },
    zoom: 8,
  });
}

window.initMap = initMap;