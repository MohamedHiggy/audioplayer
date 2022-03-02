export default {
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
  },

  UPDATE_CURRENT_TIME(state, currentTime) {
    if (currentTime == 'positive') {
      state.audio.currentTime += 10;
    } else if (currentTime == 'negative') {
      state.audio.currentTime -= 10;
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
  INCREMENT(state, action) {
    action ? state.currentAudioIndex++ : state.currentAudioIndex = 0
    state.audio.playbackRate = state.audioSpeed;
    state.audio.volume = state.audioVolume
  },
  DECREMENT(state, action) {
    action ? state.currentAudioIndex-- : state.currentAudioIndex = state.audios.length - 1
    state.audio.playbackRate = state.audioSpeed;
    state.audio.volume = state.audioVolume
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
  }
};
