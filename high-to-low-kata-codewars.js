function highAndLow(numbers) {
  newArray = numbers.split(" ");

  function orderArray(arr) {
    let newArray = arr.sort(function (a, b) {
      return b - a;
    });
    return newArray;
  }

  function onlyFirstLast(arr) {
    let changedArray = [];
    changedArray.push(arr[0]);
    changedArray.push(arr[arr.length - 1]);
    return changedArray;
  }

  newArray = orderArray(newArray);
  newArray = onlyFirstLast(newArray);

  numbers = newArray.join(" ");

  return numbers;
}
