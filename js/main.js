const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = [
  'Джордж',
  'Макс',
  'Исак',
  'Давид',
  'Люся',
  'Тейлор',
  'Александр',
  'Артём'
];

const descriptions = [
  'Выпускной топ-трека',
  'Прогулка по осеннему парку',
  'Образовательный центр Аксиома',
  'Пикник на природе',
  'Мечеть Кул Шариф',
  'Мост Влюбленных',
  'Новый кампус ИРИТ-РТФ',
  'Арт-объект Я люблю Каменск',
  'Цветной бульвар',
  'Памятник Салавату Юлаеву',
  'Казанский кремль',
  'Семь девушек'
];

const photoCount = 25;

//возвращает случайное целое число (включительно)
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//возвращает случайный элемент массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

//список чисел от 1 до photoCount
const ids = [];
for (let number = 1; number <= photoCount; number++) {
  ids[number - 1] = number;
}

// перемешивание массивов в случайном порядке
const shuffledIds = ids.sort(() => Math.random() - 0.5);

//генерация случайного коммента
let photoIdIndex = 0;
let commentIdCounter = 0;

const generateCommentMessage = () => {
  const sentenceCount = getRandomInteger(1, 2);
  const sentences = [];

  for (let i = 0; i < sentenceCount; i++) {
    sentences[i] = getRandomArrayElement(messages);
  }

  return sentences.join(' ');
};

//создания объекта по комменту
const generateComment = () => {
  commentIdCounter += 1;

  return {
    id: commentIdCounter,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: generateCommentMessage(),
    name: getRandomArrayElement(names),
  };
};

//начисление рандомного количества комментов
const generatePhoto = () => {
  const id = shuffledIds[photoIdIndex];
  photoIdIndex += 1;

  const commentsCount = getRandomInteger(0, 30);
  const comments = [];
  for (let i = 0; i < commentsCount; i++) {
    comments[i] = generateComment();
  }

  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(descriptions),
    likes: getRandomInteger(15, 200),
    comments,
  };
};

//финальный массив с собранными знач.
const photos = [];
for (let i = 0; i < photoCount; i++) {
  photos[i] = generatePhoto();
}

/*
console.log(photos[0]);
console.log(photos[0].comments[0].name);
console.log(photos[0].comments[0].avatar);
*/
