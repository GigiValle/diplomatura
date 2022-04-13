var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');
var novedadesModel = require('./../../models/novedadesModel');

/* GET home page. */
router.get('/', async function(req, res, next) {
  var novedades = await novedadesModel.getNovedades();
  res.render('admin/novedades',{
    layout:'admin/layout',
    usuario: req.session.nombre,
  });
});


module.exports = router;