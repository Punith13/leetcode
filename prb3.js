// Longest Substring Without Repeating Characters

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (input) {
  let s = ''
  let maxLength = 0

  for (let i = 0; i < input.length; i++) {
    if (s.includes(input[i])) {
      maxLength = Math.max(maxLength, s.length)
      let repeatingIndex = s.indexOf(input[i])
      s = s.substring(repeatingIndex + 1)
    }
    s = `${s}${input[i]}`
  }

  return Math.max(maxLength, s.length)
}
