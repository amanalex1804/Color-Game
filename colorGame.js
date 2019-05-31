var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);

var squares  = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
});


hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		
			squares[i].style.backgroundColor = colors[i];

			squares[i].style.display = "block";
		
	}
});

var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click",function(){
    
    messageDisplay.textContent = "";
    this.textContent="New Colors";
	// generate all colors
	colors = generateRandomColors(numberOfSquares);
	// pick new color from array
	pickedColor = pickColor();
	// change color display
	colorDisplay.textContent = pickedColor;
	//change colors
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});



colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
    
    //click listeners
    
    squares[i].addEventListener("click",function(){
    	// grab color of clicked square
    	var clickedColor =  this.style.backgroundColor;

    	console.log(clickedColor,pickedColor);

    	// compare
    	if(clickedColor === pickedColor){
    		messageDisplay.textContent = "Correct";
    		changeColors(clickedColor);
    		h1.style.backgroundColor = clickedColor;
    		resetButton.textContent = "Play Again?";

    		
    	}else{
    		this.style.backgroundColor = "#232323";
    		messageDisplay.textContent = "Try Again";
    	}
    });

}

function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];

	for (var i = 0; i < num; i++) {
		//get Random color
		arr.push(randomColor());
		
	}


	return arr;
}

function randomColor(){
	// pick a red from 0-255
	var r = Math.floor(Math.random()*256); 
	// // pick a green from 0-255
	var g = Math.floor(Math.random()*256); 
	 
	// pick a blue from 0-255
	var b = Math.floor(Math.random()*256); 

	return "rgb("+r+", "+g+", "+b+")";
}