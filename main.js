console.log("JS OK");
let container = document.getElementById("big-red");
let result = document.getElementById("result");

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    container.innerHTML +=`<div class="card1"> fizz </div>`;
    console.log("fizz");
  } else if (i % 5 === 0) {
    container.innerHTML +=`<div class="card2"> buzz </div>`;
    console.log("buzz");
  }
  if (i % 3 === 0 && i % 5 === 0) {
    container.innerHTML +=`<div class="card3"> fizzbuzz </div>`;
    console.log("fizzbuzz");
  } else {
    container.innerHTML +=`<div class="card4"> ${i} </div>`;
    console.log(i);
  }
}
