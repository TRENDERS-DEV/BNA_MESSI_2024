var remaining = 3;


function countdown() {
    document.getElementById('num').innerHTML = remaining;
    if (!remaining--) {
        setTimeout(() => {
            window.location = "https://bnamessi.tdev.com.ar/trivia/question.html";
        }, 500);
        
    }
    setTimeout(countdown, 1000);
}

window.onload = countdown;