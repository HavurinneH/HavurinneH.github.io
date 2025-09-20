const toteutusData = {
  toteutus: {
    nimi: "Digitekniikat",
    alku: "2025-01-13",
    loppu: "2025-03-14",
    kesto_viikkoina: 8,
    osallistujat: [
      { nimi: "Jaakko", kuvaus: "Erikoistuu verkkosivujen rakenteeseen ja HTML/CSS-tekniikoihin.", kuva: "jaakko.jpg" },
      { nimi: "Seppo", kuvaus: "Keskittyy JavaScriptin logiikkaan ja interaktiivisiin toimintoihin.", kuva: "seppo.jpg" },
      { nimi: "Liisa", kuvaus: "Tutkii tietokantojen suunnittelua ja SQL-kyselyiden optimointia.", kuva: "liisa.jpg" },
      { nimi: "Tiina", kuvaus: "Kehittää käyttöliittymiä ja testaa UX/UI-suunnittelun periaatteita.", kuva: "tiina.jpg" },
      { nimi: "Kalle", kuvaus: "Analysoi datan visualisointia ja hyödyntää Power BI:tä.", kuva: "kalle.jpg" }
    ]
  }
};

const kurssiDiv = document.getElementById("kurssitiedot");
kurssiDiv.innerHTML = `
  <p><strong>Kurssi:</strong> ${toteutusData.toteutus.nimi}</p>
  <p><strong>Alkaa:</strong> ${toteutusData.toteutus.alku} &nbsp;|&nbsp; <strong>Loppuu:</strong> ${toteutusData.toteutus.loppu}</p>
  <p><strong>Kesto:</strong> ${toteutusData.toteutus.kesto_viikkoina} viikkoa</p>
`;

const container = document.getElementById("osallistujat");
toteutusData.toteutus.osallistujat.forEach(hlo => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${hlo.kuva}" alt="${hlo.nimi}">
    <h3>${hlo.nimi}</h3>
    <p>${hlo.kuvaus}</p>
  `;
  container.appendChild(card);
});
