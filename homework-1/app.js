C

 let str = "";
 let n = 6;
for (let i = 1; i <= n - 1; i++) {
    for (let j = 0; j < i; j++) {
      str += " ";
    }
    for (let k = 0; k < n - i; k++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);

  // D
let b = 5;
let star = "";

for (let i = 1; i <= b; i++) {

  for (let j = 0; j < b - i; j++) {
    star += " ";
  }

  for (let k = 0; k < i; k++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);