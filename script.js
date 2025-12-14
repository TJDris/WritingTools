function cleanText() {
  let text = document.getElementById("inputText").value;

  text = text.replace(/\s+/g, " ").trim();
  text = text.replace(/[“”]/g, '"').replace(/[‘’]/g, "'");

  document.getElementById("outputText").value = text;
}