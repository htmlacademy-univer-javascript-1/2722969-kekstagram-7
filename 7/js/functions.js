function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);

function checkPalindrome(string) {
  const normalizedString = string.replaceAll(' ', '');
  const lowerString = normalizedString.toLowerCase();
  let reversedString = '';

  for (let i = lowerString.length - 1; i >= 0; i--) {
    const currentCharacter = lowerString[i];
    reversedString+= currentCharacter;
  }

  return reversedString === lowerString;
}

checkPalindrome('топот');
checkPalindrome('ДовОд');
checkPalindrome('Кекс');

function getDigits(string) {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    const number = parseInt(string[i], 10);

    if (!Number.isNaN(number)) {
      result += number;
    }
  }

  return result ? parseInt(result, 10) : NaN;
}

getDigits('2023 год');
getDigits('ECMAScript 2022');
getDigits('1 кефир, 0.5 батона');
getDigits('агент 007');
getDigits('а я томат');
getDigits(2023);
getDigits(-1);
getDigits(1.5);
