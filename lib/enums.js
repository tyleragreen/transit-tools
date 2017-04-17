'use strict';

const Enum = require('node-enum');

const EdgeType = Enum([
  'ROUTE',
  'TRANSFER',
  'THEORETICAL'
]);

module.exports = { EdgeType: EdgeType };
