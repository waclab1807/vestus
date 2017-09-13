var express = require('express');
var router = express.Router();

var Clients = require('../models/Clients.js');

/* GET /clients listing. */
router.get('/', function(req, res, next) {
  Clients.find(function (err, clients) {
    if (err) return next(err);
    res.json(clients);
  });
});

/* POST /clients */
router.post('/', function(req, res, next) {
  Clients.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /clients/id */
router.get('/:id', function(req, res, next) {
  Clients.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /clients/:id */
router.put('/:id', function(req, res, next) {
  Clients.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /clients/:id */
router.delete('/:id', function(req, res, next) {
  Clients.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
