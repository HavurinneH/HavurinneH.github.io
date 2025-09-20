// Lataa osallistujat digitekniikat.json:sta
fetch("Digitekniikat.json")
  .then(response => {
    if (!response.ok) throw new Error("Tiedostoa ei löytynyt");
    return response.json();
  })
  .then(data => {
    const container = document.getElementById("osallistujat");
    data.toteutus.osallistujat.forEach(hlo => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${hlo.kuva}" alt="Osallistuja: ${hlo.nimi}">
        <h3>${hlo.nimi}</h3>
        <p>${hlo.kuvaus}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.error("Osallistujien haku epäonnistui:", err));
