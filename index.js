const findUniqueLetter = (text) => {
  const words = text.split(" ");
  const lettersInWords = words.map((item) => countLetters(item));
  const result = lettersInWords.map((item) => findFirstUniqueLetter(item));
  return findFirstUniqueLetter(countLetters(result));
};

const countLetters = (word) => {
  const lettersObj = {};
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    lettersObj[char] ? lettersObj[char]++ : (lettersObj[char] = 1);
  }
  return lettersObj;
};

const findFirstUniqueLetter = (word) => {
  for (let letter in word) {
    if (word[letter] === 1) {
      return letter;
    }
  }
  return null;
};
const inputText =
  "The Tao gave birth to machine language. Machine language gave birth to the assembler. The assembler gave birth to the compiler. Now there are ten thousand languages. Each language has its purpose, however humble. Each language expresses the Yin and Yang of software. Each language has its place within the Tao. But do not program in COBOL if you can avoid it. -- Geoffrey James, 'The Tao of Programming'";
const result = findUniqueLetter(inputText);
