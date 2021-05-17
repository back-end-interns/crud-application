module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define('foods', {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      foodname: {
          type: DataTypes.STRING,
          allowNull: false
      },
      foodtype: {
          type: DataTypes.STRING,
          allowNull: false
      }
  });

  return Food;
};
