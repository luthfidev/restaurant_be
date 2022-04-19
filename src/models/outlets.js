'use strict';
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('outlets', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        user_id: DataTypes.INTEGER,
        }, {
        tableName: 'outlets',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        paranoid: true,
        deletedAt: 'deleted_at'
    });
};
