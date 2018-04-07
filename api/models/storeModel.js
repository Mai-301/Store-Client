'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StoreSchema = new Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
    },
});

module.exports = mongoose.model('Store', StoreSchema);