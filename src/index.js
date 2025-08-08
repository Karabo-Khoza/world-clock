//Cairo Time Display
setInterval(function () {
  let cairoElement = document.querySelector("#cairo");
  let cairoDateElemnt = cairoElement.querySelector(".date");
  let cairoTimeElement = cairoElement.querySelector(".time");
  let cairoTime = moment().tz("Africa/Cairo");

  cairoDateElemnt.innerHTML = cairoTime.format("dddd, MMMM Do YYYY");
  cairoTimeElement.innerHTML = `${cairoTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  )}`;
}, 1000);

//Greece Time Display
setInterval(function () {
  let greeceElement = document.querySelector("#greece");
  let greeceDateElemnt = greeceElement.querySelector(".date");
  let greeceTimeElement = greeceElement.querySelector(".time");
  let greeceTime = moment().tz("Europe/Athens");

  greeceDateElemnt.innerHTML = greeceTime.format("dddd, MMMM Do YYYY");
  greeceTimeElement.innerHTML = `${greeceTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  )}`;
}, 1000);

//Bangkok Time Display
setInterval(function () {
  let bangkokElement = document.querySelector("#bangkok");
  let bangkokDateElemnt = bangkokElement.querySelector(".date");
  let bangkokTimeElement = bangkokElement.querySelector(".time");
  let bangkokTime = moment().tz("Asia/Bangkok");

  bangkokDateElemnt.innerHTML = bangkokTime.format("dddd, MMMM Do YYYY");
  bangkokTimeElement.innerHTML = `${bangkokTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  )}`;
}, 1000);

//Dubai Time Display
setInterval(function () {
  let dubaiElement = document.querySelector("#dubai");
  let dubaiDateElemnt = dubaiElement.querySelector(".date");
  let dubaiTimeElement = dubaiElement.querySelector(".time");
  let dubaiTime = moment().tz("Asia/Dubai");

  dubaiDateElemnt.innerHTML = dubaiTime.format("dddd, MMMM Do YYYY");
  dubaiTimeElement.innerHTML = `${dubaiTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  )}`;
}, 1000);
