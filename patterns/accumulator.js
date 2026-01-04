/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  is (typeof n !== 0)
  return "not a number"
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 * TEST1 If n is not a number → return null
 * TEST2 If n is negative → return empty array
 * TEST3 If n is 0 → return empty array
 * TEST4 If n is 1 → return [1]
 * TEST5 If n is 5 → return numbers from 1 to 5
 * if (bad input) {
  return something;
}

if (edge case) {
  return something;
}

do the real work
return result;

 */

export function buildNArray(n) {
  if (typeof n !== "number") {
    return null;
  }

  if (n <= 0) {
    return [];
  }

  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }

  return result;
}



/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 * The mental algorithm (no code yet)

If strings.length === 0, return "".

Set longest to the first string.

Loop through the array:

if current string is longer than longest, update longest.

Return longest.
 */

export function getLongestString(strings) {
  if (strings.length === 0) {
    return "";
  }

  let longest = strings[0];

  for (let i = 1; i < strings.length; i++) {
    if (strings[i].length > longest.length) {
      longest = strings[i];
    }
  }

  return longest;
}


/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  let count = 0;

  for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] === true) {
      count++;
    }
  }

  return count;
}


/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  // if DNA is not a string return null 
  if (typeof dna !== "string") {
    return null;
  }
//We are returning a string so we start with an empty string
  let result = "";
//For each individual character inside the string dna, 
// give me one character at a time and call it base
  for (const base of dna) {
    if (base === "A") {
      result += "T";
    } else if (base === "T") {
      result += "A";
    } else if (base === "C") {
      result += "G";
    } else if (base === "G") {
      result += "C";
    }
  }

  return result;
}

