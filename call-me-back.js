export default {
  sync(callback) {
    callback(1);
  },

  async(callback) {
    setTimeout(() => callback(1));
  }
};
