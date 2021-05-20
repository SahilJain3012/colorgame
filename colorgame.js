var numSquares=6
var colors=generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = random();
var Picked = document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
Picked.textContent = pickedColor;
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn"); 

easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
  	 pickedColor = random();  
  	 Picked.textContent = pickedColor;
  	  messageDisplay.textContent= "";
  	 for(var i=0;i<squares.length;i++ ) {
  	if(colors[i])
 	  {squares[i].style.background = colors[i];}
     else{squares[i].style.display = "none";}}
 	h1.style.background="steelblue";
});
hardbtn.addEventListener("click",function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
  	 pickedColor = random();  
  	 Picked.textContent = pickedColor;
  	  messageDisplay.textContent= "";
  	 for(var i=0;i<squares.length;i++ ) {
  	
 	  squares[i].style.background = colors[i];
     squares[i].style.display = "block";}
 	h1.style.background="steelblue";
});

  resetButton.addEventListener("click",function(){
  	 colors=generateRandomColors(numSquares);
  	 pickedColor = random();
  	 Picked.textContent = pickedColor;
  	 messageDisplay.textContent= "";
  	 this.textContent="New Color";
  	 for(var i=0;i<squares.length;i++ ) {
 	squares[i].style.background = colors[i];}
 	h1.style.background="steelblue";

  }) 

 for(var i=0;i<squares.length;i++ ) {
 	squares[i].style.background = colors[i];

 	squares[i].addEventListener("click",function(){
 		var clickedColor =this.style.background;
 		if(clickedColor === pickedColor)
 		  {messageDisplay.textContent= "CORRECT";
 		   resetButton.textContent="Play Again?";
           changeColors(clickedColor);
           h1.style.background=clickedColor;
 	   } else {this.style.background= "#232323" ;
                messageDisplay.textContent= "TRY AGAIN";
 	       }
 	});
 }
 
 function changeColors(color){
 	for(var i=0;i<squares.length;i++ ) {
 	squares[i].style.background = color;
	 }
	}

function random(){
 var random = Math.floor(Math.random() * colors.length);
 return colors[random];
}

function generateRandomColors(num){
	var arr=[]
	for(var i=0;i<num;i++){
		arr.push(randomColors())
	}
	return arr;
}

function randomColors(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}
