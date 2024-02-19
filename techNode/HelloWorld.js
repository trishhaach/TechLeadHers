console.log("Hello World!!");

function printNumbers() {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}
printNumbers();

function printPyramid() {
  for (let i = 0; i < 5; i++) {
    let print = "";

    for (let j = 0; j <= i; j++) {
      print += " *";
    }
    console.log(print);
  }
}

printPyramid();
