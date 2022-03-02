import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const defaultState = () => ({
  audios: [
    {
      id: 1,
      title: "Audio 1",
      audios_pages: 8,
      source: "audio1.mp3",
      cover: require("~/assets/images/card.jpg"),
    },
    {
      id: 2,
      title: "Audio 2",
      audios_pages: 48,
      source: "audio2.mp3",
      cover: require("~/assets/images/image.png"),
    },
    {
      id: 3,
      title: "Audio 3",
      audios_pages: 25,
      source: "audio3.mp3",
      cover: require("~/assets/images/card.jpg"),
    },
    {
      id: 4,
      title: "Audio 4",
      audios_pages: 32,
      source: "audio4.mp3",
      cover: require("~/assets/images/image.png"),
    },
  ],
  currentAudioIndex: 0,
  current_audio: null,
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
