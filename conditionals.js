const raining = true;
const cold = false;

// if (raining) {
//   console.log("Don't forget your umbella!");
// }

// if (cold) {
//   console.log("Makes sure you pick out a scarf!");
// }

// console.log("Now you're ready to go outside!");

////////////

// if (cold) {
//   console.log("Make sure you pick out a scarf!");
// } else {
//   console.log("Short sleeves are fine.");
// }

////////////

const temperature = 50;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");