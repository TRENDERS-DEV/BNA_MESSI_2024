var remaining = 3;


function countdown() {
    document.getElementById('num').innerHTML = remaining;
    if (!remaining--) {
        setTimeout(()=> {
            $("#section-02").fadeOut();            
        }, 1000);
        setTimeout(() => {
            $("#section-03").fadeIn();
        }, 1500 );
        
        return;        
    }
    setTimeout(countdown, 1000);
}



$(document).ready(function() {
    $(".play-btn").on("click", function(e) {
        e.preventDefault();
        setTimeout(()=> {
            $("#section-01").fadeOut();            
        }, 1000);
        setTimeout(() => {
            $("#section-02").fadeIn();
        }, 1500 );
        countdown();
    });
    $("#option1").on("click", function() {
        triggerError(this);
    });
    $("#option2").on("click", function() {
        triggerError(this);
    });
    $("#option3").on("click", function() {
        triggerSuccess(this);
        $("#section-03").fadeOut();        
    });
});

function triggerError(option) {
    let penalty_option = $(option).attr('id');
    $("#section-04").addClass("error");
    setTimeout(()=> {
        $("#section-03").fadeOut();            
    }, 1500);
    setTimeout(() => {
        $("#section-04").fadeIn();
    }, 2000 );
    countdown();
    $("#"+ penalty_option + "_penalty").removeClass("green").addClass("orange");
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
    setTimeout(()=> {
        $("#section-03").fadeOut();            
    }, 1500);
    setTimeout(() => {
        $("#section-04").fadeIn();
    }, 2000 );
    $("#"+ penalty_option + "_penalty").removeClass("orange").addClass("green");
    setTimeout(() => {
        $("#section-04").hide();
    }, 3000);       
    setTimeout(() => {
        $("#section-05").fadeIn();
    }, 3800);
}