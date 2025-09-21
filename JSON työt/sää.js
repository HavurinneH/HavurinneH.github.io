// OpenWeatherMap API
// Muista rekisteröityä https://openweathermap.org/ ja saada oma API-avain
const apiKey = "OMA_API_AVAIN";
const city = "Helsinki";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fi&appid=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Lämpötila
    document.getElementById("temp").textContent = data.main.temp;

    // Tuuli
    document.getElementById("wind").textContent = data.wind.speed;

    // Sääkuvaus
    document.getElementById("description").textContent = data.weather[0].description;

    // Sääkuva
    const iconCode = data.weather[0].icon;
    document.getElementById("icon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    document.getElementById("icon").alt = data.weather[0].description;
  })
  .catch(err => console.error("Virhe haettaessa säätä:", err));

// Näytetään sivun latausaika
const loadTime = new Date();
document.getElementById("load-time").textContent = loadTime.toLocaleString();
