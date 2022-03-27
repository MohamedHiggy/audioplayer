import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const defaultState = () => ({
  audios: [
    {
      id: 1,
      title: "Audio 1",
      author: "author 1",
      source: "audio1.mp3",
      cover: "https://dummyimage.com/600x200/2f00ff/ffffff.jpg&text=B",
    },
    {
      id: 2,
      title: "Audio 2",
      author: "author 2",
      source: "audio2.mp3",
      cover: "https://dummyimage.com/600x200/ffffff/000000.jpg&text=B",
    },
    {
      id: 3,
      title: "Audio 3",
      author: "author 3",
      source: "audio3.mp3",
      cover: "https://dummyimage.com/600x200/000000/ffffff.jpg&text=B",
    },
    {
      id: 4,
      title: "Audio 4",
      author: "author 4",
      source: "audio4.mp3",
      cover: "https://dummyimage.com/600x200/ff00ff/000000.jpg&text=B",
    },
  ],
  notes: [
    {
      audio_id: 1,
      audio_notes: [
        {
          "note_time": 0.182221,
          "note_text": "qwdqwd"
        },
        {
          "note_time": 0.694032,
          "note_text": "aaaaaaaaaacccqwdq"
        }
      ]
    }
  ],
  currentAudioIndex: 0,
  shuffle: false,
  reapetaudio: false,
  current_audio: null,
  audioSpeed: 1,
  audioPaused: false,
  audioVolume: 1,
  audio: new Audio()
});

export default {
  namespaced: true,
  state: defaultState,
  mutations: mutations,
  getters: getters,
  actions: actions,
};
