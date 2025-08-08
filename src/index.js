//Cairo Time Display
setInterval(function () {
  let cairoElement = document.querySelector("#cairo");
  if (cairoElement) {
    let cairoDateElemnt = cairoElement.querySelector(".date");
    let cairoTimeElement = cairoElement.querySelector(".time");
    let cairoTime = moment().tz("Africa/Cairo");

    cairoDateElemnt.innerHTML = cairoTime.format("dddd, MMMM Do YYYY");
    cairoTimeElement.innerHTML = `${cairoTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    )}`;
  }
}, 1000);

//Greece Time Display
setInterval(function () {
  let greeceElement = document.querySelector("#greece");
  if (greeceElement) {
    let greeceDateElemnt = greeceElement.querySelector(".date");
    let greeceTimeElement = greeceElement.querySelector(".time");
    let greeceTime = moment().tz("Europe/Athens");

    greeceDateElemnt.innerHTML = greeceTime.format("dddd, MMMM Do YYYY");
    greeceTimeElement.innerHTML = `${greeceTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    )}`;
  }
}, 1000);

//Bangkok Time Display
setInterval(function () {
  let bangkokElement = document.querySelector("#bangkok");
  if (bangkokElement) {
    let bangkokDateElemnt = bangkokElement.querySelector(".date");
    let bangkokTimeElement = bangkokElement.querySelector(".time");
    let bangkokTime = moment().tz("Asia/Bangkok");

    bangkokDateElemnt.innerHTML = bangkokTime.format("dddd, MMMM Do YYYY");
    bangkokTimeElement.innerHTML = `${bangkokTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    )}`;
  }
}, 1000);

//Dubai Time Display
setInterval(function () {
  let dubaiElement = document.querySelector("#dubai");
  if (dubaiElement) {
    let dubaiDateElemnt = dubaiElement.querySelector(".date");
    let dubaiTimeElement = dubaiElement.querySelector(".time");
    let dubaiTime = moment().tz("Asia/Dubai");

    dubaiDateElemnt.innerHTML = dubaiTime.format("dddd, MMMM Do YYYY");
    dubaiTimeElement.innerHTML = `${dubaiTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    )}`;
  }
}, 1000);

//Event Listener for City Selection
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML += `
  <div class="city">
    <div class="time">${cityTime.format("hh:mm:ss [<small>]A[</small>]")}</div>
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("dddd, MMMM Do YYYY")}</div>
    </div>
  </div>`;
}

//City Selection Event Listener
let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);
