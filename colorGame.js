// var colors=["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(0, 0, 255)", "rgb(255, 0, 255)"];
var numSquares=6;
var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var dis = document.getElementById("display");
var h1 = document.querySelector("h1");
var pickedColor = pickColor();
dis.textContent = pickedColor;
var button = document.querySelector("button");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var disp = document.getElementById("textMessage");

// var modeButtons = document.getElementsByClassName("mode");
// var modeButtons = document.querySelectorAll(".mode");
// for(var i=0;i<modeButtons.length;i++){
// 	modeButtons[0].classList.remove("selected");
// 	modeButtons[1].classList.remove("selected");
// 	modeButtons[i].addEventListener("click", function(){
// 		this.classList.add("selected");

// 	}); 

// }


// var colorsHint = dis.textContent.substr(4,dis.length).split(",");
// colorsHint[0].style.color="red";
// colorsHint[0].style.color="green";
// colorsHint[0].style.color="blue";

easy.addEventListener("click", function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	h1.style.backgroundColor="steelblue";
	disp.textContent="";
	numSquares=3;
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	dis.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
});

hard.addEventListener("click", function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	h1.style.backgroundColor="steelblue";
	disp.textContent="";
	numSquares=6;
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	dis.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

for(var i=0;i<squares.length;i++) {
	// initialise the colors
	squares[i].style.backgroundColor = colors[i];
	// add event listener
	squares[i].addEventListener("click", function(){
	var click = (this.style.backgroundColor).replace("rgb","RGB");
	// console.log(pickedColor, click);
	if(click===pickedColor){
		disp.textContent="Correct!";
		disp.style.color="green";
		h1.style.backgroundColor = click;
		changeColors(pickedColor);
		button.textContent="Play Again?";
		button.addEventListener("click", function(){
				easy.addEventListener("click", function(){
					easy.classList.add("selected");
					hard.classList.remove("selected");
					colors = generateRandomColor(numSquares);
					pickedColor = pickColor();
					dis.textContent = pickedColor;
					for(var i=0;i<squares.length;i++){
						if(colors[i]){
							squares[i].style.backgroundColor = colors[i];
						}
						else{
							squares[i].style.display = "none";
						}
					}
				});
				hard.addEventListener("click", function(){
					hard.classList.add("selected");
					easy.classList.remove("selected");
					colors = generateRandomColor(numSquares);
					pickedColor = pickColor();
					dis.textContent = pickedColor;
					for(var i=0;i<squares.length;i++){
						squares[i].style.backgroundColor = colors[i];
						squares[i].style.display = "block";
					}
				});
		});
	}
	else{
		this.style.backgroundColor="#232323";
		disp.textContent="Try Again!";
		disp.style.color="red";
	}
	});
}

function changeColors(c){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=c;
	}
}

function pickColor(){
	var rand = Math.floor(Math.random() * colors.length);
	return colors[rand];
}

function generateRandomColor(num){
	//make an array
	var arr=[];
	//add num random colors
	for(var i=0;i<num;i++){
		// get random color and push into array
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	//pick red color from 0-255
	//pick green color from 0-255
	//pick blue color from 0-255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	// "rgb(r, g, b)"
	var rand = "RGB(" + r + ", " + g + ", " + b + ")";
	return rand;
}