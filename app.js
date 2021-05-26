var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function getTranslationUrl(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    alert("Something wrong with the server. Try after some time.");
}

btnTranslate.addEventListener("click", function clickEventHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler);
})