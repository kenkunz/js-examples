module.exports = {
  sync: function(callback) {
    callback(1);
  },

  async: function(callback) {
    setTimeout(function() {
      callback(1);
    }, 0);
  }
}
