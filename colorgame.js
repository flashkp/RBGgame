var numsq=6;
var colors = generateColors(numsq);

var squares = document.querySelectorAll(".square");
var pickColor = pcolor();
var cdisplay = document.getElementById("cdisplay");
var md=document.querySelector("#message");
var h1=document.querySelector("h1");
var rb= document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");

easy.addEventListener("click",function(){
  hard.classList.remove("selected");
  easy.classList.add("selected");
  md.textContent = " ";
  numsq=3;
  colors=generateColors(numsq);
	pickColor = pcolor();
	cdisplay.textContent=pickColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
});

hard.addEventListener("click",function(){
  easy.classList.remove("selected");
  hard.classList.add("selected");
  md.textContent = " ";
    numsq=6;
  colors=generateColors(numsq);
	pickColor = pcolor();
	cdisplay.textContent=pickColor;
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
		
			squares[i].style.display = "block";
	}
});

rb.addEventListener("click",function(){
	colors=generateColors(numsq);
	pickColor = pcolor();
	cdisplay.textContent=pickColor;
	this.textContent="New Colors";
	md.textContent = " ";
	for (var i = 0; i <squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor="steelblue";

});

cdisplay.textContent = pickColor;

for (var i = 0; i < squares.length; i++) {
	//add initial colors
	squares[i].style.backgroundColor =colors[i];
     //add click listener
     squares[i].addEventListener("click",function(){
     	//grab color of clicked sq
     	var clickedColor = this.style.backgroundColor;
     	//compare color
     	if (clickedColor === pickColor) {
     		md.textContent = "Correct!";
     		rb.textContent = "Play again?";
     		changeColors(clickedColor);
     		h1.style.backgroundColor = clickedColor;
     	}
     	else{
     		this.style.backgroundColor = "#232323";
     		md.textContent = "Try Again";
     	}


     });
 }

 function changeColors(color){
 	for (var i = 0; i <squares.length; i++) {
 	squares[i].style.backgroundColor= color;
 	}
 }

 function pcolor(){
 	var random = Math.floor(Math.random() * colors.length);
 	return colors[random];
 }

 function generateColors(num){
 	var arr =[];
 	for (var i = 0; i < num; i++) {
 		arr.push(rc());
 	}
 	return arr;
 }

 function rc(){
 	var r = Math.floor(Math.random() * 256);
 	var g = Math.floor(Math.random() * 256);
 	var b = Math.floor(Math.random() * 256);
 	return "rgb(" + r + ", " + g + ", " + b + ")";
 }

