const designWidth = 2000;
const designHeight = (9 / 16) * designWidth;

const style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'],
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
    lineJoin: 'round',
});

let myRes = 1;
if (window.devicePixelRatio > 1) {
    myRes = window.devicePixelRatio;
}

const app = new PIXI.Application(
    {
        resizeTo: window,
        background: '#1099bb',
        autoDensity: true,
        antialias: true,
        resolution: myRes
    });
document.body.appendChild(app.view);

var element = document.getElementById("ld");
element.remove();