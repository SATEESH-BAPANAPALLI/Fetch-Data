function getweatherdata() {
    navigator.geolocation.getCurrentPosition((success) => {
      let { latitude, longitude } = success.coords;
      document.getElementById("Lat").innerHTML = latitude;
      document.getElementById("Long").innerHTML = longitude;
      latitude.innerHTML = latitude;
      longitude.innerHTML = longitude;
      let url = 'https://api.openweathermap.org/data/2.5/weather?Lat=${latitude}&Long=${longitude}&appid=47075714060c25415d6443b642f4cb7e';
      console.log(url);
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          showWethereData(data);
        });
    });
  }
  
  function showWethereData(data) {
    document.getElementById("Location").innerHTML = `${data.name}`;
    document.getElementById("Latitude").innerHTML = `${data.coord.lat}`;
    document.getElementById("Longitude").innerHTML = `${data.coord.lon}`;
    document.getElementById("TimeZone").innerHTML = `${data.timezone}`;
    document.getElementById("Wind-Speed").innerHTML = `${data.wind.speed}`;
    document.getElementById("Pressure").innerHTML = `${data.main.pressure}`;
    document.getElementById("Humidity").innerHTML = `${data.main.humidity}`;
    document.getElementById("Wind-Direction").innerHTML = `${data.wind.speed}`;
    document.getElementById("UV-Index").innerHTML = `${data.main.temp}`;
    document.getElementById("Feels-Like").innerHTML = `${data.main.feels_like}`;
  }
  
  
  let button = document.getElementById("btn");
  button.onclick = getweatherdata();

