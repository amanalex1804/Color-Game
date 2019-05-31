var numberOfSquares = 6;
var colors = [];
var pickedColor;

var squares  = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    
    setupModeButtons();
    setupSquares();     
    reset();

}

function setupModeButtons(){
		for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numberOfSquares = 3:numberOfSquares = 6;

			reset();

		});
	}
}

function setupSquares(){
	
	for (var i = 0; i < squares.length; i++) {
		
	    //click listeners
	    
	    squares[i].addEventListener("click",function(){
	    	// grab color of clicked square
	    	var clickedColor =  this.style.backgroundColor;

	  
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
}


function reset(){
	
	messageDisplay.textContent = "";
    resetButton.textContent="New Colors";
	// generate all colors
	colors = generateRandomColors(numberOfSquares);
	// pick new color from array
	pickedColor = pickColor();
	// change color display
	colorDisplay.textContent = pickedColor;
	//change colors
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
		squares[i].style.display = "block";	
		squares[i].style.backgroundColor = colors[i];	
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";

}

// easyBtn.addEventListener("click",function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numberOfSquares = 3;
// 	colors = generateRandomColors(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// });


// hardBtn.addEventListener("click",function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numberOfSquares = 6;
// 	colors = generateRandomColors(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
		
// 			squares[i].style.backgroundColor = colors[i];

// 			squares[i].style.display = "block";
		
// 	}
// });


resetButton.addEventListener("click",function(){
    reset();
});




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