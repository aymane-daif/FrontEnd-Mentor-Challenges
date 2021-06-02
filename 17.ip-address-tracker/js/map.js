let map;
function setMap(lat, long, city, country) {
  map = L.map("map").setView([lat, long], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  let customIcon = L.icon({
    iconUrl: "./images/icon-location.svg",

    iconSize: [46, 56], // size of the icon

    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });

  L.marker([lat, long], { icon: customIcon })
    .addTo(map)
    .bindPopup(`${city} ${country}.`)
    .openPopup();
}
setMap(31.628674, -7.992047, "Marrakech", "Ma");
