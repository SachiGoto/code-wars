// In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

// "Hello!" => "Holle!"
// "Tomatoes" => "Temotaos"
// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
// For simplicity, you can treat the letter y as a consonant, not a vowel.

function reverseVowels(str) {
  function isVowel(char) {
    return ["a", "e", "o", "u", "i"].includes(char.toLowerCase());
  }

  let characters = str.split("");
  let left = 0;
  let right = characters.length - 1;

  while (left < right) {
    if (isVowel(characters[left]) && isVowel(characters[right])) {
      const temp = characters[left];
      characters[left] = characters[right];
      characters[right] = temp;
      left++;
      right--;
    } else if (!isVowel(characters[left])) left++;
    else if (!isVowel(characters[right])) right--;
  }
  return characters.join("");
}
