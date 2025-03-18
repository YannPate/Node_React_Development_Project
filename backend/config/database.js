const { Sequelize } = require('sequelize');

// Configurer la connexion Sequelize
const sequelize = new Sequelize(
  "postgres://devUser:pass123@127.0.0.1:5432/dev_db", 
  {}
);

// Tester la connexion
(async () => {
    try {
        await sequelize.authenticate();
        console.log('\nConnexion réussie pour la Table Student \n');
    } catch (error) {
        console.error('Impossible de se connecter à la base de données :', error);
    }
})();

module.exports = sequelize;
