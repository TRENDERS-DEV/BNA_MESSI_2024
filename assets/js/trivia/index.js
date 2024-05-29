var remaining = 3;

function countdown() {
    document.getElementById('num').innerHTML = remaining;
    if (!remaining--) {
        alert('redirecting');
        return; // not needed if you redirect
    }
    setTimeout(countdown, 1000);
}

window.onload = countdown;