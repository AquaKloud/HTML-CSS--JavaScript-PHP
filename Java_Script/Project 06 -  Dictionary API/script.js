function search() {
    let word = document.getElementById("userInp").value;
    let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
    fetch(url)
    .then(response => response.text())
    .then(result => console.log(result))
    .then(error => console.log('error', error));
}

