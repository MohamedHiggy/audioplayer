export default {
  updatecurrentAudio(context, payload) {
    context.commit('SET_current_audio', payload);
  },

  updatePlayedAudio(context, payload) {
    context.commit('SET_PLAYED_AUDIO', payload);
  },
  setAudioIndex(context, payload) {
    context.commit('SET_AUDIO_INDEX', payload);
  },
};
