function getMeaning() {
  const word = document.getElementById("word").value;
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").innerText =
        data[0].meanings[0].definitions[0].definition;
    })
    .catch(() => {
      document.getElementById("result").innerText = "Word not found";
    });
}
