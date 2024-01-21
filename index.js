let lastButton;
let collectionButtons = [];
let isPlaying = false;
let counter = 1;
let iterable = 0;
$(document).keydown((event) => {
    if(!isPlaying){
        let key = getRandom();
        makeButtonAnimation(key);
        lastButton = key;
        collectionButtons.push(key);
        isPlaying = true;
        $(".title").text("Level " + counter++);
    }
});

$(".green").click(() => {
    if(isPlaying){
        if(collectionButtons[iterable++] != 1){
            makeButtonWrongAnimation(1);
        }
        else{
            makeButtonAnimation(1);
            if(iterable === collectionButtons.length){
                addLevel()
            }
            
        }
    }
});
$(".red").click(() => {
    if(isPlaying){
        if(collectionButtons[iterable++] != 2){
            makeButtonWrongAnimation(2);
        }
        else{
            makeButtonAnimation(2);
            if(iterable === collectionButtons.length){
                addLevel()
            }
        }
    }
});
$(".yellow").click(() => {
    if(isPlaying){
        if(collectionButtons[iterable++] != 3){
            makeButtonWrongAnimation(3);
        }
        else{
            makeButtonAnimation(3);
            if(iterable === collectionButtons.length){
                addLevel()
            }
        }
    }
});
$(".blue").click(() => {
    if(isPlaying){
        if(collectionButtons[iterable++] != 4){
            makeButtonWrongAnimation(4);
        }
        else{
            makeButtonAnimation(4);
            if(iterable === collectionButtons.length){
                addLevel()
            }
        }
    }
});


function getRandom (){
    let number = Math.floor((Math.random() * 4) + 1);
    console.log(number);
    return number;
}


function makeButtonAnimation(number){
    let audio = null;
    switch(number){
        case 0 :
            audio = new Audio("./sounds/wrong.mp3");
            $(".green").addClass("hide");
            setTimeout(() => {
                $(".green").removeClass("hide");
            }, 150);
            break;
        case 1:
            audio = new Audio("./sounds/green.mp3");
            $(".green").addClass("hide");
            setTimeout(() => {
                $(".green").removeClass("hide");
            }, 150);
            break;
        case 2:
            audio = new Audio("./sounds/red.mp3");
            $(".red").addClass("hide");
            setTimeout(() => {
                $(".red").removeClass("hide");
            }, 150);
            break;
        case 3:
            audio = new Audio("./sounds/yellow.mp3");
            $(".yellow").addClass("hide");
            setTimeout(() => {
                $(".yellow").removeClass("hide");
            }, 150);
            break;
        case 4:
            audio = new Audio("./sounds/blue.mp3");
            $(".blue").addClass("hide");
            setTimeout(() => {
                $(".blue").removeClass("hide");
            }, 150);
            break;
        default:
            console.log("El numero no existe, debe ser 0-4");
    }
    if(audio != null){
        audio.play();
    }
}

function makeButtonWrongAnimation(number){
    lastButton = 0;
    collectionButtons = [];
    isPlaying = false;
    iterable = 0;
    let audio = null;
    counter = 1;
    $(".title").text("Game Over, Press Any Key to Restart");
    switch(number){
        case 1:
            audio = new Audio("./sounds/wrong.mp3");
            $(".green").addClass("btn-wrong");
            $("body").addClass("body-wrong");
            setTimeout(() => {
                $(".green").removeClass("btn-wrong");
                $("body").removeClass("body-wrong");
            }, 150);
            break;
        case 2:
            audio = new Audio("./sounds/wrong.mp3");
            $(".red").addClass("btn-wrong");
            $("body").addClass("body-wrong");
            setTimeout(() => {
                $(".red").removeClass("btn-wrong");
                $("body").removeClass("body-wrong");
            }, 150);
            break;
        case 3:
            audio = new Audio("./sounds/wrong.mp3");
            $(".yellow").addClass("btn-wrong");
            $("body").addClass("body-wrong");
            setTimeout(() => {
                $(".yellow").removeClass("btn-wrong");
                $("body").removeClass("body-wrong");
            }, 150);
            break;
        case 4:
            audio = new Audio("./sounds/wrong.mp3");
            $(".blue").addClass("btn-wrong");
            $("body").addClass("body-wrong");
            setTimeout(() => {
                $(".blue").removeClass("btn-wrong");
                $("body").removeClass("body-wrong");
            }, 150);
            break;
        default:
            console.log("El numero no existe, debe ser 0-4");
    }
    if(audio != null){
        audio.play();
    }
}

function addLevel(){
    setTimeout(() => {
        $(".title").text("Level " + counter++);

        let key = getRandom();
        collectionButtons.push(key);
        if((iterable + 1) === collectionButtons.length){
            iterable = 0;
        }
        makeButtonAnimation(key);
    }, 2000);
}

