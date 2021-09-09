const Macros = sequelize.define('macros', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  key: {
    type: Sequelize.STRING,
    allowNull: false
  },
  keyCode: {
    type: Sequelize.STRING,
    allowNull: false
  },
  file_path: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

Macros.sync();

