export default {
  updatecurrentAudio({ commit }, payload) {
    commit('SET_current_audio', payload);
  },

  updatePlayedAudio({ commit }, payload) {
    commit('SET_PLAYED_AUDIO', payload);
  },

  setAudioIndex({commit}, payload) {
    commit('SET_AUDIO_INDEX', payload);
  },

  leaveNote({commit}, payload) {
    commit('SET_NOTE', payload);
  }
};
