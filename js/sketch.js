let x, y, xspeed, yspeed, breedte, hoogte, dvd, r, g, b

function preload() {
    dvd = loadImage("../img/dvd_logo.png")
}

function setup() {
    createCanvas(800,600)
    x = 400
    y = 300
    xspeed = 1
    yspeed = 1
    breedte = dvd.width/5
    hoogte = dvd.height/5
    r = random(100, 256)
    g = random(100, 256)
    b = random(100, 256)
}

function draw() {
    background(0)
    tint(r,g,b)
    image(dvd, x, y, breedte, hoogte)

    x = x + xspeed
    y = y + yspeed

    if(x >= (width - breedte) || x <= 0) {
        xspeed = -xspeed
    }

    if(y >= (height - hoogte) || y <= 0) {
        yspeed = -yspeed
    }
}