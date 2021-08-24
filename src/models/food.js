'use strict';

const Food = (sequelize, DataTypes) => sequelize.define('Food', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    clothesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

module.exports = Food;