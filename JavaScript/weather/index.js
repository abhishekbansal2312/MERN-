let input = document.querySelector("input");
let button = document.querySelector("button");
let weather = document.querySelector(".weather");

button.addEventListener("click", function () {
  let city = input.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7d1e8f0e9b3c0c6b0a3f8f2f3b4c7f2d`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new alert("City not found");
      }
      return response.json();
    })
    .then((data) => {
      let temp = data.main.temp - 273.15;
      let description = data.weather[0].description;
      let icon = data.weather[0].icon;
      weather.innerHTML = `
                        <h1>${city}</h1>
                        <p>${temp.toFixed(2)}°C</p>
                        <p>${description}</p>
                        <img src="http://openweathermap.org/img/wn/${icon}.png" alt="icon">
                    `;
    })
    .catch((error) => {
      weather.innerHTML = `<p style="color: red;">${error.message}</p>`;
    });
});
