//Select chart element
const chart = document.querySelector('.chart');

//Create Canvas element
const canvas = document.createElement('canvas');
canvas.width = 50;
canvas.height = 50;

//Append Canvas to chart createElement

chart.appendChild(canvas);

//To draw on canvas I need to get context off canvas and
const ctx = canvas.getContext('2d');

//Change the line width
ctx.lineWidth = 8;

//Circle Radius
const R = 20;

function drawCircle(color, ratio, anticlockwise) {
	ctx.strokeStyle = color;
	ctx.beginPath();
	ctx.arc(canvas.width / 2, canvas.height / 2, R, 0, ratio * 2 * Math.PI, anticlockwise);
	ctx.stroke();
}

function updateChart(income, outcome) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	let ratio = income / (income + outcome);
	drawCircle('#FFF', -ratio, true);
	drawCircle('#F0624D', 1 - ratio, false);
}
