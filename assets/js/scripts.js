const COUNTDOWN = 3;
const QUESTIONS_QTY = 3;
var aQuestions = [];
var currentQuestion = 0;
var aUserAnswers = [];

const QUESTIONS = [
    {
        "question": "¿Cuántos balones de oro tiene Lionel Messi?",
        "answers":
                [
                    {"answer": "7", "valid": 0},
                    {"answer": "8", "valid": 1},
                    {"answer": "9", "valid": 0}
                ]
    },
    {
        "question": "¿En qué año ganó Messi su primer Balón de Oro?",
        "answers":
                [
                    {"answer": "2007", "valid": 0},
                    {"answer": "2008", "valid": 0},
                    {"answer": "2009", "valid": 1}
                ]
    },
    {
        "question": "¿Cuál es la carta que lleva tatuada en la piel?",
        "answers":
                [
                    {"answer": "As de espadas", "valid": 0},
                    {"answer": "Cinco de copas", "valid": 1},
                    {"answer": "Diez de oro", "valid": 0}
                ]
    },
    {
        "question": "¿Contra qué equipo anotó Messi 5 goles durante un partido de la UEFA Champions League en 2012?",
        "answers":
                [
                    {"answer": "Bayer Leverkusen", "valid": 1},
                    {"answer": "Milan", "valid": 0},
                    {"answer": "CSKA Moscú", "valid": 0}
                ]
    },
    {
        "question": "¿Con quién compartió habitación históricamente en las concentraciones?",
        "answers":
                [
                    {"answer": "Angel Di María", "valid": 0},
                    {"answer": "Nicolás Otamendi", "valid": 0},
                    {"answer": "Sergio Agüero", "valid": 1}
                ]
    },
    {
        "question": "¿Cuántos goles marcó Messi en su partido más goleador con la Selección Argentina?",
        "answers":
                [
                    {"answer": "3", "valid": 0},
                    {"answer": "5", "valid": 1},
                    {"answer": "7", "valid": 0}
                ]
    },
    {
        "question": "¿Cuál es el nombre completo de Messi?",
        "answers":
                [
                    {"answer": "Leonel Diego Messi Cuccittini", "valid": 0},
                    {"answer": "Lionel Javier Messi", "valid": 0},
                    {"answer": "Lionel Andrés Messi Cuccittini", "valid": 1}
                ]
    },
    {
        "question": "¿Cuántas finales de Copa América jugó Messi?",
        "answers":
                [
                    {"answer": "3", "valid": 0},
                    {"answer": "4", "valid": 1},
                    {"answer": "5", "valid": 0}
                ]
    },
    {
        "question": "¿Cuántos goles le hizo Messi a Brasil en la victoria 4-3 del 2012 en Estados Unidos?",
        "answers":
                [
                    {"answer": "1", "valid": 0},
                    {"answer": "2", "valid": 0},
                    {"answer": "3", "valid": 1}
                ]
    },
    {
        "question": "¿Cuántos goles hizo Messi en el mundial de Qatar 2022?",
        "answers":
                [
                    {"answer": "3", "valid": 0},
                    {"answer": "7", "valid": 1},
                    {"answer": "10", "valid": 0}
                ]
    }
];

$(document).ready(function () {

    $('#section-01').hide();
    $('#section-05').show();

    if (QUESTIONS_QTY > QUESTIONS.length) {
        alert('ERROR. QUESTIONS_QTY > QUESTIONS');
    }

    currentQuestion = 0;
    aQuestions = arrayShuffle(QUESTIONS);
    aUserAnswers = Array.apply(null, Array(QUESTIONS_QTY)).map(function () {});
});

$('#play-btn').on('click', function (event) {

    event.preventDefault();

    $('#section-01').fadeOut(400, 'swing', showSection2);
});

function showSection2() {

    $('#section-02').fadeIn(400, 'swing', showCountdown);
}

function showCountdown() {

    var remaining = COUNTDOWN;

    $('#countdown_num').html(remaining);

    var intervalId = setInterval(function () {

        remaining--;

        if (remaining < 0) {
            clearInterval(intervalId);
            $('#section-02').fadeOut(400, 'swing', showSection3);
            return;
        }

        $('#countdown_num').html(remaining);

    }, 1000);
}

function showSection3() {

    $oQuestion = aQuestions[currentQuestion];
    showProgress();
    var answers = '';

    $('#question_text').html($oQuestion.question);
    $('#penalty_title').html('<span class="text-container"><span class="bold">PENAL </span>' + (parseInt(currentQuestion) + 1) + '</span>');

    $.each($oQuestion.answers, function (i, oAnswer) {

        answers += '<div class="form-group">\n\
                        <input type="radio" class="btn-check" name="answer[]" data-is_valid="' + oAnswer.valid + '" autocomplete="off">\n\
                        <label>' + oAnswer.answer + '</label>\n\
                    </div>';
    });

    $('#question_answers').html(answers);

    $('#section-03').fadeIn(400, 'swing');
}

function showProgress() {

    var progress = '';

    $.each(aUserAnswers, function (i, isValid) {

        if (isValid === 1) {
            progress += '<div id="option1_penalty" class="green"></div>';
        } else if (isValid === 0) {
            progress += '<div id="option1_penalty" class="orange"></div>';
        } else {
            progress += '<div id="option1_penalty"></div>';
        }
    });

    $('#trivia_progress').html(progress);
}

$(document).on('click', '.btn-check', function () {

    var isValid = $(this).data('is_valid');
    aUserAnswers[currentQuestion] = isValid;
    currentQuestion++;

    $('#section-04').removeClass('success');
    $('#section-04').removeClass('error');

    if (isValid === 1) {
        $('#section-04').addClass('success');
    } else {
        $('#section-04').addClass('error');
    }

    $('#section-03').fadeOut(400, 'swing', showSection4);
});

function showSection4() {

    $('#section-04').fadeIn(400, 'swing');

    setTimeout(() => {
        if (QUESTIONS_QTY > currentQuestion) {
            $('#section-04').hide(400, 'swing', showSection3);
        } else {
            $('#section-04').hide(400, 'swing', showSection5);
        }
    }, 3000);
}

function showSection5() {

    $('#section-05').fadeIn(400, 'swing');
}

function arrayShuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array.slice(0, QUESTIONS_QTY);
}

$("#share_icon").jsSocials({
    shares: [{
            share: "facebook",
            logo: "/assets/img/share-icon.svg"
        }],
    url: "https://bnamessi.tdev.com.ar/",
    text: "Contestá las 3 preguntas y demostrá cuánto sabés de Messi.",
    showLabel: false,
    showCount: false,
    shareIn: "popup"
});