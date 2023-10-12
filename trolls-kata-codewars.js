function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  newArray = str.split("");

  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (newArray[i] === vowels[j]) {
        newArray[i] = "";
      }
    }
  }

  str = newArray.join("");
  return str;
}
