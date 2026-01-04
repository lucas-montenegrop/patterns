/**
 * @param {number} rows
 * @param {number} cols
 * @returns {string[][]} an array containing `rows` arrays of `cols` elements each.
 * Each element is the string "-".
 * @returns `null` if either argument is not a number
 * @returns `[]` if either argument is 0 or negative
 */
export function makeBoard(rows, cols) {
  if (typeof rows !== "number" || typeof cols !== "number") return null;
  if (rows <= 0 || cols <= 0) return [];

  const board = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push("-");
    }
    board.push(row);
  }
  return board;
}

/**
 * A 'triangle' is 2D array where each inner array has one more element than the previous.
 *
 * For example, this is a 2x2 triangle:
 * [
 *   ["-"],
 *   ["-", "-"]
 * ]
 *
 * @param {*} size - the number of rows in the triangle
 * @returns {string[][]} a triangle with `side` rows
 * @returns `null` if `size` is not a number
 * @returns `[]` if `size` is 0 or negative
 */
export function makeTriangle(size) {

  if (typeof size !== "number") {
    return null;
  }

  if (size <= 0) {
    return [];
  }
// make a container
  const triangle = [];

  for (let i = 1; i <= size; i++) {
    const row = [];
    for (let j = 0; j < i; j++) {
      row.push("-");
    }
    triangle.push(row);
  }

  return triangle;
}


/**
 * @param {string[]} words
 * @param {string} letter - a single character
 * @returns {number}  the number of times `letter` appears in all the words
 * @returns `0` if `letter is not a string
 * for testing look at the words being used in the test itself to begin to design the code. 
 */
export function countLetter(words, letter) {
 if (typeof letter !== "string") {
  return 0;
}

//empty array talks about length
if (words.length === 0) {
  return 0;
}

let count = 0;
//wordS is defined, word new variable.
//character new var defined is a single letter. 
//if the character equals the letter count it in a loop. 
//return the count. 
for (const word of words) {
    for (const character of word) {
      if (character === letter) {
        count++;
      }
    }
  }

  return count;
}
