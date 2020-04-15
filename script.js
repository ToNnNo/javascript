function loaded(callable) {
    window.addEventListener('DOMContentLoaded', callable);
}

function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}

function print(selector, value, html = false){
    let target = document.querySelector(selector);
    if(html){
        target.innerHTML = value;
    }else{
        target.textContent = value;
    }
}
