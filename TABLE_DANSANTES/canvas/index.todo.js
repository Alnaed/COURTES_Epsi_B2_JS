// variables
var canvas, ctx, w, h, radius;
var margin = 10;

// initialisation
function init() {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	w = canvas.width, h = canvas.height;
  radius = w/2-margin;
}

// effacer la zone de dessin
function clean(r, g, b) {
	ctx.fillStyle = 'rgb('+r+', '+g+', '+b+')';
	ctx.beginPath();
	ctx.rect(0, 0, w, h);
	ctx.closePath();
	ctx.fill();
}

// chargement
function load() {
  init();
  clean(50,200,120);
  console.log('load');
}

// dessiner le fond
function drawBackground() {
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.strokeStyle = "rgb(100, 0, 255)";
  ctx.beginPath();
  ctx.arc(w/2, h/2, radius, 0, 2*Math.PI, true);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}

// dessiner une ligne
function drawLine(x1,y1,x2,y2) {
  ctx.fillStroke = "rgb(100, 0, 200)";
  ctx.fillStyle = "rgb(000, 0, 000)";
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2,y2);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}

// dessiner un point
var pointSize = 5;
function drawPoint(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillStroke = "rgb(255, 255, 0)";
  ctx.beginPath();
  ctx.arc(x, y, pointSize, 0, Math.PI*2, true);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

}

// récupérer les données de la page
var table, modulo;
function getData() {
  table = document.getElementById("table").value ? parseFloat(document.getElementById("table").value) : 0;
  modulo = document.getElementById("modulo").value ? parseFloat(document.getElementById("modulo").value) : 0;
}




function drawTable() {
  getData();
  drawBackground();
  let CentreX = w/2;
  let CentreY = h/2;
  let step = 2*Math.PI/ modulo;


  for (i=0; i<modulo; i++){
  let x = CentreX + (radius * Math.cos(i*step-Math.PI/2));
  let y = CentreY + (radius * Math.sin(i*step-Math.PI/2));
  let x1 = CentreX + (radius *Math.cos((i*table)*step-Math.PI/2));
  let y1 = CentreY + (radius *Math.sin((i*table)*step-Math.PI/2));

  drawPoint(x,y);
  drawLine(x,y,x1,y1);

  }







}