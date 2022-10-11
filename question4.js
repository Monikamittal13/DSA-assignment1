//Q4. Write a program to print the first non-repeated character from a string?

function FirstNotRepeated(str) {
  var arr1 = str.split("");
  var result = "";
  var char = 0;

  for (var x = 0; x < arr1.length; x++) {
    char = 0;

    for (var y = 0; y < arr1.length; y++) {
      if (arr1[x] === arr1[y]) {
        char += 1;
      }
    }

    if (char < 2) {
      result = arr1[x];
      break;
    }
  }
  return result;
}
console.log(FirstNotRepeated("abacddbec"));
