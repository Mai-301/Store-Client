var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StoreSchema = new Schema({
  key: {
    type: String,
  },
  value: {
    type: String,
  },
});

module.exports = mongoose.model('Store', StoreSchema);