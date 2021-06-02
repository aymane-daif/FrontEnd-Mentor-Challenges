const form = document.getElementById("form");
const usrInput = document.getElementById("ip");
const addrContent = document.getElementById("address-content");
const locationContent = document.getElementById("location-content");
const timeContent = document.getElementById("timezone-content");
const ispContent = document.getElementById("isp-content");
let latLoc = 31.628674,
  longLoc = -7.992047,
  country = "Morocco",
  city = "Marrakech";
function getValue() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let value = usrInput.value.trim();
    usrInput.value = "";
    if (ValidateIPaddress(value)) {
      const getLocation = async () => {
        let ipAddr = value;
        let apiKey = "at_fsg1z4VQFPJIQiRe5P9qzbRYvOrus";
        let response = await fetch(
          `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ipAddr}`
        );

        if (response.status !== 200) {
          throw new Error("Try to disable Ad Blocker");
        }

        let data = await response.json();
        return data;
      };

      getLocation()
        .then((data) => {
          addrContent.textContent = data.ip;
          locationContent.textContent = `${data.location.country} ${data.location.region} ${data.location.postalCode}`;
          timeContent.textContent = `UTC${data.location.timezone}`;
          ispContent.textContent = `${data.isp}`;
          latLoc = data.location.lat;
          longLoc = data.location.lng;
          country = data.location.country;
          city = data.location.city;
          map.off();
          map.remove();
          setMap(latLoc, longLoc, city, country);
        })
        .catch((err) => alert(err.message));
    } else alert("You didn't entered a valid ip address!");
  });
}
getValue();
function ValidateIPaddress(input) {
  if (
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      input
    )
  ) {
    return true;
  }
  return false;
}
