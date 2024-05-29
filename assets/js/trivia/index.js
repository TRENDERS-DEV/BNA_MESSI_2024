var remaining = 3;

function countdown() {
    document.getElementById('num').innerHTML = remaining;
    if (!remaining--) {
        return;
    }
    setTimeout(countdown, 1000);
}

window.onload = countdown;