// JSON VALIDOINNIN FUNKTIO
function validateJSON() {
  const input = document.getElementById("json-input").value;
  const output = document.getElementById("output");
  try {
    const parsed = JSON.parse(input);
    output.textContent = "✅ JSON on validi!\n\n" + JSON.stringify(parsed, null, 2);
    output.style.color = "#0f0";
  } catch (e) {
    output.textContent = "❌ Virhe JSONissa:\n\n" + e.message;
    output.style.color = "#f00";
  }
}

// JSON TALLENNUS localStorageen
function saveJSON() {
  const input = document.getElementById("json-input").value;
  localStorage.setItem("jsonData", input);
  const output = document.getElementById("output");
  output.textContent = "💾 JSON tallennettu selaimen muistiin!";
  output.style.color = "#0ff";
}

// JSON LATAUS localStoragesta
function loadJSON() {
  const saved = localStorage.getItem("jsonData");
  const input = document.getElementById("json-input");
  const output = document.getElementById("output");

  if (saved) {
    input.value = saved;
    output.textContent = "📂 JSON ladattu selaimen muistista.";
    output.style.color = "#0ff";
  } else {
    output.textContent = "⚠️ Ei tallennettua JSONia!";
    output.style.color = "#ffa500";
  }
}

// JSON LATAAMINEN .json-tiedostona
function downloadJSON() {
  const input = document.getElementById("json-input").value;
  const blob = new Blob([input], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");

  a.href = url;
  a.download = "data.json";
  a.click();
  URL.revokeObjectURL(url);
}

// Hae tietue JSONista ja muunna JS-objektiksi
function getJSONRecord(key) {
  const input = document.getElementById("json-input").value;
  const output = document.getElementById("output");
  
  try {
    const parsed = JSON.parse(input);
    
    let record = parsed;
    if (Array.isArray(parsed)) {
      record = parsed[0]; // ensimmäinen objekti taulukosta
    }
    
    if (record[key] !== undefined) {
      output.textContent = `🔹 Arvo kentälle "${key}": ${record[key]}`;
      output.style.color = "#0f0";
      return record[key];
    } else {
      output.textContent = `⚠️ Kenttää "${key}" ei löytynyt JSONista.`;
      output.style.color = "#ffa500";
      return null;
    }
  } catch (e) {
    output.textContent = `❌ Virhe JSONissa:\n\n${e.message}`;
    output.style.color = "#f00";
    return null;
  }
}

// Funktio hakukentän napille
function searchJSONKey() {
  const key = document.getElementById("search-key").value.trim();
  if (key) {
    getJSONRecord(key);
  } else {
    const output = document.getElementById("output");
    output.textContent = "⚠️ Kirjoita haettava kentän nimi.";
    output.style.color = "#ffa500";
  }
}
