'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.categoriesGET = function categoriesGET (req, res, next) {
  var purpose = req.swagger.params['purpose'].value;
  Default.categoriesGET(purpose)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productsGET = function productsGET (req, res, next) {
  var categoryId = req.swagger.params['categoryId'].value;
  var keyword = req.swagger.params['keyword'].value;
  var pagesize = req.swagger.params['pagesize'].value;
  var startpage = req.swagger.params['startpage'].value;
  Default.productsGET(categoryId,keyword,pagesize,startpage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
