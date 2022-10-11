//Q3. Write a program to check if two strings are a rotation of each other?

const str1 = "hello",
  str2 = "olleh";
if (str1.length == str2.length) {
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] != str2[str2.length - 1 - i]) {
      console.log("Given Two Strings are a Not Rotation of Each Other");
    }
  }
  if (let i == str2.length) {
    console.log("Given Two Strings are The Rotation of Each Other");
  }
} else {
  console.log("Given Two Strings are a Not Rotation of Each Other");
 }
