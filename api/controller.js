'use strict';

var properties = require('../package.json')
var size = require('../service/size');

var controllers = {
   get_size: function(req, res) {
        size.calc(req, res, function(err, dist) {
            if (err)
                res.send(err);
            res.json(dist);
        });
    },
    post_size: function(req, res) {
       size.add(req, res, function (err, dist) {
            if (err)
                res.send(err);

            res.json(dist);
       });
    },
};

module.exports = controllers;