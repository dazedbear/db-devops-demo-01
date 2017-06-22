'use strict';

var util = require('util');

module.exports = {
  hello: hello
};

function yooo(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.swagger.params.name.value || 'stranger';
  var yoo = util.format('Yooooo Man~, %s!', name);

  // this sends back a JSON response which is a single string
  res.json(yoo);
}