function $$(el) {
    return document.querySelector(el);
}

function $$a(el) {
    return document.querySelectorAll(el);
}

function getTextFile(name) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', name, false);
    xhr.send(null);
    return xhr.responseText;
}