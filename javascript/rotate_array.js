function rotateArray(arr, k) {
  const n = arr.length;
  const newArr = [...arr];
  k = k%n;
  for (let i=0; i<n; i++) {
    let j = i-k;
    if (j < 0) {
      j = n+j;
    }
    newArr[i] = arr[j];
  }
  return newArr;
}
if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// And a written explanation of your solution

// 1 -> 1
// 2 -> 2
// 3 -> 0
// 4 -> 1
// 5 -> 2
// 6 -> 0