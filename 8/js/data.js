import { getRandomInteger, getRandomArrayElement } from './util.js';

const PHOTO_COUNT = 25;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Джордж',
  'Макс',
  'Исак',
  'Давид',
  'Люся',
  'Тейлор',
  'Александр',
  'Артём'
];

const DESCRIPTIONS = [
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

// Создаёт массив фотографий с уникальными id и комментариями
const createPhotos = () => {
  // Список чисел от 1 до PHOTO_COUNT в случайном порядке
  const shuffledIds = Array.from({ length: PHOTO_COUNT }, (_, index) => index + 1)
    .sort(() => Math.random() - 0.5);

  let photoIdIndex = 0;
  let commentIdCounter = 0;

  // Генерация текста комментария
  const generateCommentMessage = () => {
    const sentenceCount = getRandomInteger(1, 2);
    const sentences = [];

    for (let i = 0; i < sentenceCount; i++) {
      sentences[i] = getRandomArrayElement(MESSAGES);
    }

    return sentences.join(' ');
  };

  // Создание объекта комментария
  const generateComment = () => {
    commentIdCounter += 1;

    return {
      id: commentIdCounter,
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: generateCommentMessage(),
      name: getRandomArrayElement(NAMES),
    };
  };

  // Создание объекта фотографии со случайным количеством комментариев
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
      description: getRandomArrayElement(DESCRIPTIONS),
      likes: getRandomInteger(15, 200),
      comments,
    };
  };

  const photos = [];
  for (let i = 0; i < PHOTO_COUNT; i++) {
    photos[i] = generatePhoto();
  }

  return photos;
};

export { createPhotos };
