require('dotenv').config();

const Sequelize = require('sequelize');
const sequelize = new Sequelize('tsioryra_exploremada', 'tsioryra_exploremada', 'exploremada', {
  host: '178.159.5.244',
  dialect: 'mysql'
});

module.exports = sequelize;