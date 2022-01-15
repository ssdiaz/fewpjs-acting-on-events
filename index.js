// // Get a hold of the dodger
// let dodger = document.getElementById("dodger");

//  //Change backgroundColor color of the dodger
// dodger.style.backgroundColor = "#FF69B4";

// //Read the element's coordinates
// console.log(dodger.style.left); // "180px"
// console.log(dodger.style.bottom); // "0px"

// //Move the element up 
// //dodger.style.bottom = "100px"; // black color
// dodger.style.bottom = "0px";

// //Figure out what code is used to identify the left arrow key
// document.addEventListener("keydown", function(e) {
//     console.log(e.key);
//   });

// // Start to move it
// document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowLeft") {
//       let leftNumbers = dodger.style.left.replace("px", "");
//       let left = parseInt(leftNumbers, 10);
  
//       dodger.style.left = `${left - 1}px`;
//     }
//   });


// __________________________ Simplified Code: __________________________


// Grab dodger
let dodger = document.getElementById("dodger");

// Move Left
function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

// Move Right
function moveDodgerRight() {
    let rightNumbers = dodger.style.left.replace("px", "");
    let right = parseInt(rightNumbers, 10);

    if (right < 360) {
        dodger.style.left = `${right + 1}px`;
    }
}

//   Execute it 
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }

    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});
