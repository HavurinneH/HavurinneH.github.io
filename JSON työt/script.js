// --- Kovakoodattu JSON ---
const jsonData = '{"nimi":"Henna","ikä":25,"opintopisteet":5}';

try {
  const obj = JSON.parse(jsonData);

  // Tulostetaan HTML-elementteihin
  document.getElementById("nimi").textContent = "Nimi: " + obj.nimi;
  document.getElementById("ikä").textContent = "Ikä: " + obj.ikä;
  document.getElementById("opintopisteet").textContent = "Opintopisteet: " + obj.opintopisteet;

  // Tulostetaan koko objekti pre-elementtiin
  document.getElementById("output").textContent = JSON.stringify(obj, null, 2);
  console.log("Kovakoodattu JSON:", obj);

} catch (e) {
  console.error("Virhe JSONin käsittelyssä:", e.message);
}

// --- Hae ulkoinen JSON tiedosto ---
function fetchJSON(url) {
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("Verkkovirhe: " + response.status);
      return response.json(); // JSON → JS-objekti
    })
    .then(data => {
      console.log("Haettu JSON:", data);
      document.getElementById("fetch-output").textContent = JSON.stringify(data, null, 2);
    })
    .catch(err => {
      console.error("Virhe JSONin hakemisessa:", err);
      document.getElementById("fetch-output").textContent = "❌ Virhe JSONin hakemisessa: " + err.message;
    });
}
