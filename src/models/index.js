import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  process.env.TEST_DATABASE || process.env.DATABASE,
  process.env.DATABASER_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres'
  },
);

const models = {
  User: sequelize.import('./user.js'),
  Message: sequelize.import('./messages.js'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;