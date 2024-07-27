let input = document.querySelector("input");
let button = document.querySelector("button");
let weather = document.querySelector(".weather");

async function getWeather() {
  let city = input.value;
  let apikey = "04O9DgQqXlfVOV9Jms2nXg==etw3fQ5LcvfgvczP";
  let url = `https://api.api-ninjas.com/v1/weather?city=${city}&apikey=${apikey}`;
`
}

