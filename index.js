const findUniqueLetter = (text) => {
// Приймаємо текст та розбиваємо його на масив слів 
  const words = text.split(" ");
// Отримуємо обєкт з ключем буквою та значенням кількості повторення букви
  const lettersInWords = words.map((item) => countLetters(item));
// Отримуємо масив унікальник букв
  const result = lettersInWords.map((item) => findFirstUniqueLetter(item));
// Масив букв надсилаємо у функцію countLetters для обрахунку кількості повторення букв і потім отримуємо першу унікальну букву з функції findFirstUniqueLetter
  return findFirstUniqueLetter(countLetters(result));
};

const countLetters = (word) => {
// Створюємо порожній обєкт 
  const lettersObj = {};
  for (let i = 0; i < word.length; i++) {
// Цикл перевіряє кожну букву у слові, при перевірці перший раз створює ключ = букву та значення = 1, якщо ж буква повторюється значення збільшується на 1  
    const char = word[i];
    lettersObj[char] ? lettersObj[char]++ : (lettersObj[char] = 1);
  }
  return lettersObj;
};

const findFirstUniqueLetter = (word) => {
// Повернення першої унікальної букви зі слова 
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
