const COUNTDOWN = 3;
const QUESTIONS_QTY = 3;
var step = 0;

const QUESTIONS = [
    {
        "question": "1 ¿Cuántos balones de oro tiene Lionel Messi?",
        "answers":
                [
                    {"answer_1": "6", "valid": 1},
                    {"answer_2": "7", "valid": 0},
                    {"answer_3": "8", "valid": 0}
                ]
    },
    {
        "question": "2 ¿Cuántos balones de oro tiene Lionel Messi?",
        "answers":
                [
                    {"answer_1": "6", "valid": 1},
                    {"answer_2": "7", "valid": 0},
                    {"answer_3": "8", "valid": 0}
                ]
    },
    {
        "question": "3 ¿Cuántos balones de oro tiene Lionel Messi?",
        "answers":
                [
                    {"answer_1": "6", "valid": 1},
                    {"answer_2": "7", "valid": 0},
                    {"answer_3": "8", "valid": 0}
                ]
    },
    {
        "question": "4 ¿Cuántos balones de oro tiene Lionel Messi?",
        "answers":
                [
                    {"answer_1": "6", "valid": 1},
                    {"answer_2": "7", "valid": 0},
                    {"answer_3": "8", "valid": 0}
                ]
    },
    {
        "question": "5 ¿Cuántos balones de oro tiene Lionel Messi?",
        "answers":
                [
                    {"answer_1": "6", "valid": 1},
                    {"answer_2": "7", "valid": 0},
                    {"answer_3": "8", "valid": 0}
                ]
    },
    {
        "question": "6 ¿Cuántos balones de oro tiene Lionel Messi?",
        "answers":
                [
                    {"answer_1": "6", "valid": 1},
                    {"answer_2": "7", "valid": 0},
                    {"answer_3": "8", "valid": 0}
                ]
    },
    {
        "question": "7 ¿Cuántos balones de oro tiene Lionel Messi?",
        "answers":
                [
                    {"answer_1": "6", "valid": 1},
                    {"answer_2": "7", "valid": 0},
                    {"answer_3": "8", "valid": 0}
                ]
    },
    {
        "question": "8 ¿Cuántos balones de oro tiene Lionel Messi?",
        "answers":
                [
                    {"answer_1": "6", "valid": 1},
                    {"answer_2": "7", "valid": 0},
                    {"answer_3": "8", "valid": 0}
                ]
    },
    {
        "question": "9 ¿Cuántos balones de oro tiene Lionel Messi?",
        "answers":
                [
                    {"answer_1": "6", "valid": 1},
                    {"answer_2": "7", "valid": 0},
                    {"answer_3": "8", "valid": 0}
                ]
    },
    {
        "question": "10 ¿Cuántos balones de oro tiene Lionel Messi?",
        "answers":
                [
                    {"answer_1": "6", "valid": 1},
                    {"answer_2": "7", "valid": 0},
                    {"answer_3": "8", "valid": 0}
                ]
    }
];

$(document).ready(function () {

    //console.log("ready!");
    //var shuffledArray = arrayShuffle(QUESTIONS);
    //console.log(shuffledArray);
});

$('#play-btn').on('click', function (event) {

    event.preventDefault();

    $('#section-01').fadeOut(400, "swing", showSection2);
});

function showSection2() {

    $('#section-02').fadeIn(400, "swing", showSection2Countdown);
}

function showSection2Countdown() {

    var remaining = COUNTDOWN;

    $('#countdown_num').html(remaining);

    var intervalId = setInterval(function () {

        remaining--;

        if (remaining < 0) {
            clearInterval(intervalId);
            $('#section-02').fadeOut(400, "swing", showSection3);
            return;
        }

        $('#countdown_num').html(remaining);

    }, 1000);
}

function showSection3() {

    $("#section-03").fadeIn();
}

function arrayShuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array.slice(0, QUESTIONS_QTY);
}

/*******************************************************************************/

/*
function countdown() {

    document.getElementById('countdown_num').innerHTML = remaining;

    if (!remaining--) {
        setTimeout(() => {
            $("#section-02").fadeOut();
        }, 1000);
        setTimeout(() => {
            $("#section-03").fadeIn();
        }, 1500);

        return;
    }
    setTimeout(countdown, 1000);
}

$(document).ready(function () {

    $(".play-btn").on("click", function (e) {
        e.preventDefault();
        setTimeout(() => {
            $("#section-01").fadeOut();
        }, 1000);
        setTimeout(() => {
            $("#section-02").fadeIn();
        }, 1500);
        countdown();
    });

    $("#option1").on("click", function () {
        triggerError(this);
    });
    $("#option2").on("click", function () {
        triggerError(this);
    });
    $("#option3").on("click", function () {
        triggerSuccess(this);
        $("#section-03").fadeOut();
    });
});

function triggerError(option) {

    let penalty_option = $(option).attr('id');

    $("#section-04").addClass("error");
    setTimeout(() => {
        $("#section-03").fadeOut();
    }, 1500);
    setTimeout(() => {
        $("#section-04").fadeIn();
    }, 2000);
    countdown();
    $("#" + penalty_option + "_penalty").removeClass("green").addClass("orange");
    setTimeout(() => {
        $("#section-04").hide();
    }, 3000);
    setTimeout(() => {
        $("#section-05").fadeIn();
    }, 3800);
}
function triggerSuccess(option) {

    let penalty_option = $(option).attr('id');

    $("#section-04").addClass("success");
    setTimeout(() => {
        $("#section-03").fadeOut();
    }, 1500);
    setTimeout(() => {
        $("#section-04").fadeIn();
    }, 2000);
    $("#" + penalty_option + "_penalty").removeClass("orange").addClass("green");
    setTimeout(() => {
        $("#section-04").hide();
    }, 3000);
    setTimeout(() => {
        $("#section-05").fadeIn();
    }, 3800);
}

*/