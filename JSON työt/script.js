
function fetchJSON(https://github.com/HavurinneH/HavurinneH.github.io/blob/main/JSON%20ty%C3%B6t/JSON.json)
    .then(response) => {
      if (!response.ok) throw new Error("Verkkovirhe: " + response.status);
      return response.json();
    })
    .then(data => {
      console.log("Haettu JSON:", data);

      const output = document.getElementById("output");
      if (output) {
        output.textContent = "Haettu JSON:\n" + JSON.stringify(data, null, 2);
      }
    })
    .catch(err => {
      console.error("Virhe JSONin hakemisessa:", err);
      const output = document.getElementById("output");
      if (output) {
        output.textContent = "❌ Virhe JSONin hakemisessa: " + err.message;
      }
    });

