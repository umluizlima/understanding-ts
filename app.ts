function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    return +input1 + +input2;
  } else {
    return input1.toString() + input2.toString();
  }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
