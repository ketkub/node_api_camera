const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodeapidb', 'postgres', '123456', {
host: 'localhost',
dialect: 'postgres',
});

module.exports = sequelize;