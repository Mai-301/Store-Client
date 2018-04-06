'use strict';
module.exports = function(app) {
  var store = require('../controllers/storeController');
  app.route('/stores')
    .get(store.list_all_stores)
    .post(store.create_a_store);

  app.route('/stores/:storeId')
    .get(store.read_a_store)
    .delete(store.delete_a_store);
};
