const { DataTypes } = require("sequelize")



module.exports = (sequelize) => {
    sequelize.define('Type', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allownull: false
        }
    }, {timestamps: false})
}