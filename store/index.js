export const state = () => ({
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
  currentAudioIndex: 0,
  shuffle: false,
  reapetaudio: false,
  current_audio: null,
  audioSpeed: 1,
  audioPaused: false,
  audioVolume: 1,
  audio: new Audio()
})

export const mutations = {
  SET_current_audio(state, current_audio) {
    if (current_audio) {
      state.current_audio = current_audio;
      state.audio.src = state.current_audio.source;
      state.audio.currentTime = 0;
      state.audio.playbackRate = state.audioSpeed;
      state.audio.volume = state.audioVolume
    }
    else {
      state.audio.src = state.current_audio.source;
      state.audio.currentTime = 0;
      state.audio.playbackRate = state.audioSpeed;
      state.audio.volume = state.audioVolume
    }
  },

  SET_AUDIO(state, current_audio) {
    state.audio.currentTime = 0;
    state.current_audio = current_audio.item;
    state.audio.src = current_audio.item.source;
    state.currentAudioIndex = current_audio.index
    state.audioPaused = true;
    state.audio.playbackRate = state.audioSpeed;
    state.audio.volume = state.audioVolume
    state.audio.play();
    localStorage.setItem('currentIndex', current_audio.index)
  },

  UPDATE_CURRENT_TIME(state, currentTime) {
    if (currentTime == 'positive') {
      state.audio.currentTime += 15;
    } else if (currentTime == 'negative') {
      state.audio.currentTime -= 15;
    } else {
      state.audio.currentTime = currentTime
    }
  },

  SET_PLAYED_AUDIO(state, audioPaused) {
    state.audioPaused = audioPaused;
    state.audio.playbackRate = state.audioSpeed;
    state.audio.volume = state.audioVolume
    if (audioPaused) {
      state.audio.play();
    } else {
      state.audio.pause();
    }
  },

  HANDEL_PLAYER_SPEED(state, audioSpeed) {
    state.audioSpeed = audioSpeed;
    state.audio.playbackRate = state.audioSpeed;
  },

  SHUFFLE(state) {
    state.shuffle = !state.shuffle
  },

  REAPET_AUDIO(state) {
    state.reapetaudio = !state.reapetaudio
  },

  INCREMENT(state, action) {
    if (action && state.shuffle && !state.reapetaudio) {
      const newAudios  =  state.audios.map((item, index) => index)
      let randomElement = newAudios[Math.floor(Math.random() * newAudios.length)];
      state.currentAudioIndex = randomElement
    } else if (action && !state.shuffle && !state.reapetaudio) {
      state.currentAudioIndex++
    } else if (action && state.shuffle && state.reapetaudio) {
      state.currentAudioIndex = state.currentAudioIndex
      state.reapetaudio = false
    } else if (action && !state.shuffle && state.reapetaudio) {
      state.currentAudioIndex = state.currentAudioIndex
      state.reapetaudio = false
    } else {
      state.currentAudioIndex = 0
    }
    state.audio.playbackRate = state.audioSpeed;
    state.audio.volume = state.audioVolume
    localStorage.setItem('currentIndex', state.currentAudioIndex)
  },

  DECREMENT(state, action) {
    action ? state.currentAudioIndex-- : state.currentAudioIndex = state.audios.length - 1
    state.audio.playbackRate = state.audioSpeed;
    state.audio.volume = state.audioVolume
    localStorage.setItem('currentIndex', state.currentAudioIndex)
  },

  SET_AUDIO_INDEX(state, currentAudioIndex) {
    state.currentAudioIndex = currentAudioIndex;
  },

  UPDATE_AUDIO(state) {
    state.current_audio = state.audios[state.currentAudioIndex]
  },

  RESET(state) {
    state.audio.currentTime = 0;
    state.audio.src = state.current_audio.source;
  },

  UPDETE_VOLUME(state, volume) {
    state.audioVolume = volume
    state.audio.volume = state.audioVolume
  },

  CLOSE(state) {
    state.audio.pause();
    state.audio.currentTime = 0;
    state.audio = new Audio()
    state.audioPaused = false
    state.current_audio = null
    state.currentAudioIndex= 0
    localStorage.removeItem('currentIndex')
  }
};

export const actions = {
  updatecurrentAudio({ commit }, payload) {
    commit('SET_current_audio', payload);
  },

  updatePlayedAudio({ commit }, payload) {
    commit('SET_PLAYED_AUDIO', payload);
  },
  setAudioIndex({commit}, payload) {
    commit('SET_AUDIO_INDEX', payload);
  },
}

export const getters = {
  getaudios(state) {
    return state.audios
  },
  getcurrentAudio(state) {
    return state.current_audio
  },
  getAudioPaused(state) {
    return state.audioPaused
  },
}
