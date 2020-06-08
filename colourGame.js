var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){

    setupModeButtons();
    setupSquares();
    reset();
}
   
function setupSquares(){
    for(var i=0; i<squares.length; i++){
        // add click listeners to squares
            squares[i].addEventListener("click", function(){
            // grab color of picked square
            var clickedColor = this.style.backgroundColor;
            // compare color to "pickedColor"
            if (clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!"; 
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?"
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
         });
    } 
}

function reset(){
    colors = generateRandomColors(numSquares);
    //pick new random colour from array
    pickedColor = pickColor();
    // change colourDisplay to match picked colour
    colorDisplay.textContent = pickedColor;
    // change colours of squares
    for(var i=0; i<squares.length; i++){
        if (colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i]; 
        }
        else{
            squares[i].style.display = "none";
        }
    }
    resetButton.textContent = "New Colours"
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
}


function setupModeButtons(){
    for (var i=0; i<modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
           
            if (this.textContent=== "Easy"){
                numSquares =3;
            }
            else{
                numSquares=6;
            }
            reset();
        });
    }
}

// // Hard Button
// hardBtn.addEventListener("click", function(){
//     numSquares = 6;
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     h1.style.backgroundColor = "#4682b4";
    
//     for (var i=0; i<squares.length; i++){
//         if(colors[i]){
//             squares[i].style.display = "block";
//             squares[i].style.background = colors[i];
//         }
//     }
// })

// // Easy button
// easyBtn.addEventListener("click", function(){
//     numSquares = 3;
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     h1.style.backgroundColor = "#4682b4";

//     for (var i=0; i<squares.length; i++){
//         if(colors[i]){
//             squares[i].style.background = colors[i];
//         }
//         else{
//             squares[i].style.display = "none";
//         }
//     }
// })

resetButton.addEventListener("click", function(){
  reset();
});


function changeColors(color){
    // loop through all squares and match square colours
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color; 
    }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
    // Make an array
    var arr = []
    // add num random colors to array
    for (var i = 0; i<num; i++){
        arr.push(randomColor());
    }
    // return that array
    return arr;
}

function randomColor(){
    // pick red from 0-255
    var r = Math.floor(Math.random() * 256);
    // pick green from 0-255
    var g = Math.floor(Math.random() * 256);
    // pick blue from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}