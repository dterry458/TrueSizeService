'use strict';

var controller = require('./controller');

module.exports = function(app) {
   app.route('/size/:shoe/')
       .get(controller.get_size);
    app.route('/size/:shoe/:fit')
       .post(controller.post_size);
};