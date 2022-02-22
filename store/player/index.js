import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const defaultState = () => ({
  books: [
    {
      id: 1,
      title: "Book 1",
      books_pages: 8,
      source: "audio1.mp3",
      cover: require("~/assets/images/card.jpg"),
    },
    {
      id: 2,
      title: "Book 2",
      books_pages: 48,
      source: "audio2.mp3",
      cover: require("~/assets/images/image.png"),
    },
    {
      id: 3,
      title: "Book 3",
      books_pages: 25,
      source: "audio3.mp3",
      cover: require("~/assets/images/card.jpg"),
    },
    {
      id: 4,
      title: "Book 4",
      books_pages: 32,
      source: "audio4.mp3",
      cover: require("~/assets/images/image.png"),
    },
  ],
  currentBookIndex: 0,
  current_book: null,
  audioSpeed: 1,
  audioPaused: false,
  audioVolume: 1,
  audio: new Audio()
});

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};
