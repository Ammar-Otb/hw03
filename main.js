let b = 3;
let h = 12;
const area = 0.5 * b * h;
console.log("Area of the triangle is:", area);

let c = 35;
let f = 95;
const convertCtoF = 1.8 * c + 32;
const convertFtoC = ((f - 32) * 5) / 9;
console.log(c + "c is " + convertCtoF + "f");
console.log(f + "f is " + convertFtoC + "c");

let numbers = [23, 54, 32, 87, 47];
var sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

let arr = [16, 4, 2, 0, 19, 6];
let mx = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > mx) {
    mx = arr[i];
  }
}
console.log(mx);

const myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = myarr.length - 1; i >= 0; i--) {
  console.log(myarr[i]);
}

const mynum = 5;
let kl = "";
for (let i = 0; i < mynum; i++) {
  //   console.log("*".repeat(i));
  kl += "*";
  console.log(kl);
}
