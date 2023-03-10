    // Get the image elements
    var realImg;
    var fakeImg;
    var realSide;
    // Get the score element
    var score = document.getElementById("score");
    var scoreCounter = 0;
    // Get the body element
    var body = document.querySelector("body");
    // Get the correct answer element
    var correct = document.getElementById("correct");
    // Get the wrong answer element
    var wrong = document.getElementById("wrong");
    var randomNumber1
    var randomNumber2
    var realUrl
    var fakeUrl
    var randomNum
    //Function to get the random real and fake images
    function getImages() {
        var category = window.location.href.split("faceorfake.com/")[1]
        if (category === '') {
            category = 'humans'
        }
        randomNumber1 = ('00000' + Math.floor(Math.random() * 500)).slice(-5)
        randomNumber2 = ('00000' + Math.floor(Math.random() * 500)).slice(-5)
        realUrl = category + "/real/" + randomNumber1 + ".jpeg";
        fakeUrl = category + "/fake/" + randomNumber2 + ".jpeg";
        randomNum = Math.random();
        if (randomNum >= 0.5) {
            realImg = document.getElementById("img-1");
            realSide = "left";
            fakeImg = document.getElementById("img-2");
        } else {
            realImg = document.getElementById("img-2");
            realSide = "right";
            fakeImg = document.getElementById("img-1");
        }
        realImg.src = realUrl;
        fakeImg.src = fakeUrl;
    }
    //Call the functions
    getImages();
    
    var lock = false;
    //Event listener for arrow key presses
    document.addEventListener("click", function(event) {
        if (event.target === realImg && lock === false || event.target === fakeImg && lock === false) {
            lock = true;
            if (event.target === realImg && realSide === "left") {
                scoreCounter++;
                score.innerHTML = "Streak: " + scoreCounter;
                body.style.backgroundColor = "green";
                setTimeout(function() {
                    body.style.backgroundColor = "black";
                    getImages();
                    lock = false;
                }, 2000);
            } else if (event.target === realImg && realSide === "right") {
            scoreCounter++;
            score.innerHTML = "Streak: " + scoreCounter;
            body.style.backgroundColor = "green";
            setTimeout(function() {
                body.style.backgroundColor = "black";
                getImages();
                lock = false;
            }, 2000);
            } else {
            scoreCounter = 0;
            score.innerHTML = "Streak: " + scoreCounter;
            body.style.backgroundColor = "red";
            setTimeout(function() {
                body.style.backgroundColor = "black";
                getImages();
                lock = false;
            }, 2000);
            }
        }
    });

    document.addEventListener("keydown", function(event) {
        if (event.code === "ArrowLeft" && lock === false || event.code === "ArrowRight" && lock === false) {
            lock = true;
            if (event.code === "ArrowLeft" && realSide === "left") {
                scoreCounter++;
                score.innerHTML = "Streak: " + scoreCounter;
                body.style.backgroundColor = "green";
                setTimeout(function() {
                    body.style.backgroundColor = "black";
                    getImages();
                    lock = false;
                }, 2000);
            } else if (event.code === "ArrowRight" && realSide === "right") {
            scoreCounter++;
            score.innerHTML = "Streak: " + scoreCounter;
            body.style.backgroundColor = "green";
            setTimeout(function() {
                body.style.backgroundColor = "black";
                getImages();
                lock = false;
            }, 2000);
            } else {
            scoreCounter = 0;
            score.innerHTML = "Streak: " + scoreCounter;
            body.style.backgroundColor = "red";
            setTimeout(function() {
                body.style.backgroundColor = "black";
                getImages();
                lock = false;
            }, 2000);
        }
    }
});
const blob = document.getElementById("blob");


if (!/iPhone/i.test(navigator.userAgent)) {
    window.onpointermove = event => { 
    const { clientX, clientY } = event;
    
    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 2000, fill: "forwards" });
    }
}
