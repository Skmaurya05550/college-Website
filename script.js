document.getElementById('btn1').addEventListener('click', function () {
    alert("Login Submitted");
});

document.getElementById('btn2').addEventListener('click', function () {
    document.getElementById('user').value = "";
    document.getElementById('pass').value = "";
});

var adj = 0;
var t = 0.0;
var radius = 180;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background('#2D4059');
    noStroke();
}

function draw() {
    background('white');
    for (var i = 0; i < 360; i++) {
        var angle = cos(radians(i * adj + t)) * radius;
        var x = width / 2 + sin(radians(i)) * angle;
        var y = height / 2 + cos(radians(i)) * angle;

        rectMode(CENTER);
        fill(165, 255, 0, 15);
        if (i % 9 == 0) {
            strokeWeight(5);
            stroke('blue');
        } else if (i % 3 == 0) {
            strokeWeight(2);
            stroke('orange');
        } else {
            strokeWeight(2);
            stroke('red');
        }
        line(width / 2, height / 2, x, y);
        noStroke();
    }
    t += 1;
    adj = 62;
}
