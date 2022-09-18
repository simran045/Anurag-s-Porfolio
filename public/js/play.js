
let canvas, ctx, w, h, particles = [];
let mouse = {
	x: undefined,
	y: undefined
}
let hue = 0;
var moving = false;

function init() {
	canvas = document.querySelector("canvas");
	ctx = canvas.getContext("2d");
	resizeReset();
    animate();
}

function resizeReset() {
	w = canvas.width = window.innerWidth;
	h = canvas.height = window.innerHeight;
}

function drawScene() {
	particles.map((particle) => {
		particle.update();
		particle.draw();
	})
}

function arrayCleanup(){
    particles.map((particle) => {
        if(particle.r === 0)
            return ;
        else return particle;
    })
}

class Particle{
    constructor(x,y,r){
        this.x=x;
        this.y=y;
        this.r=r;
        this.hue = hue % 360;
        this.alpha=1
        this.hue
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.strokeStyle = `hsla(${this.hue}, 100%, 50%, ${this.alpha})`;
        ctx.stroke();
    }
    update(){
        if(this.r>.05)
        this.r-=.05;
    }
}

function animate(){
    if(mouse.x!=undefined && mouse.y!=undefined && moving){
        var radius = Math.floor(Math.random() * 10);
        hue += 10;
        particles.push(new Particle(mouse.x,mouse.y,radius));
    }
    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation='destination-over';
    moving = false;
    drawScene();
    arrayCleanup();
    requestAnimationFrame(animate);
}

window.addEventListener("DOMContentLoaded", init);
window.addEventListener('mousemove',(e) => {
    mouse.x = e.x;
    mouse.y = e.y;
    moving = true;
})