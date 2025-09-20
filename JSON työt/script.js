// JSON-data kovakoodattuna
const kurssiData = {
  otsikko: "JSON-datan käsittelyä",
  kuvaus: "Tällä sivustolla haetaan JSON-muotoista dataa",
  kuva: "https://jaakkola.github.io/json/digi.JPG",
  opintojakso: {
    nimi: "Digitekniikat",
    tunnus: "DIG4TA021",
    opintopisteet: 5
  },
  tekniikat: [
    { aihe: "low-code", linkki: "https://www.weebly.com/" },
    { aihe: "wordpress", linkki: "https://wordpress.com/" },
    { aihe: "bootstrap", linkki: "https://getbootstrap.com/" },
    { aihe: "JSON", linkki: "https://www.json.org/json-en.html" }
  ]
};

// Kurssin tiedot
const kurssiDiv = document.getElementById("kurssi");
kurssiDiv.innerHTML = `
  <h3>Opintojakso</h3>
  <p><strong>Nimi:</strong> ${kurssiData.opintojakso.nimi}</p>
  <p><strong>Tunnus:</strong> ${kurssiData.opintojakso.tunnus}</p>
  <p><strong>Opintopisteet:</strong> ${kurssiData.opintojakso.opintopisteet}</p>
  <p>${kurssiData.kuvaus}</p>
  <img src="${kurssiData.kuva}" alt="Kurssikuva">
`;

// Aiheet
const aiheetDiv = document.getElementById("aiheet");
kurssiData.tekniikat.forEach(t => {
  const li = document.createElement("li");
  li.innerHTML = `<b>Aihe:</b> ${t.aihe} <a href="${t.linkki}" target="_blank">${t.linkki}</a>`;
  aiheetDiv.appendChild(li);
});
