const setBold = () => {
  document.getElementById("textarea").style.fontWeight = "bold";
}

const setItalic = () => {
  document.getElementById("textarea").style.fontStyle = "italic";
}

const setUnderline = () => {
  document.getElementById("textarea").style.textDecoration = "underline";
}

const setLink = () => {
  document.getElementById("textarea").href.location = "www.google.com";
}

const setCapital = () => {
  document.getElementById("textarea").style.textTransform = "uppercase";
}

const setSmall = () => {
  document.getElementById("textarea").style.textTransform = "lowercase";
}

const seCamelcase = () => {
  document.getElementById("textarea").style.textTransform = "capitalize";
}