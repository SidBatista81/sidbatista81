function carrega (url, div) {
    //(e || window.event).preventDefault();

    fetch(url /*, options */)
    .then((response) => response.text())
    .then((html) => {
        div.innerHTML = html;
    })
    .catch((error) => {
        div = error;
    });
} 