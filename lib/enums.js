'use strict';

const Enum = require('node-enum');

const EdgeType = Enum([
  'ROUTE',
  'TRANSFER',
  'THEORETICAL'
]);

const Geometry = Enum([
  'LineString',
  'Point'
]);

module.exports = {
  EdgeType: EdgeType,
  Geometry: Geometry
};
