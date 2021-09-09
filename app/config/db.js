const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './app/database/database.sqlite',
  });

sequelize.authenticate().then(() => {
    console.log("======= Database Connected =======");
}).catch((err) => {
    consle.log(`======= ${err} =======`);
})
 
