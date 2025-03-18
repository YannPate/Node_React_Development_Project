const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Subjects = sequelize.define('Subjects', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    subjectName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    moduleName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    assignmentDue: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    upcomingExam: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    finalProject: {
        type: DataTypes.DATE,
        allowNull: true,
    }

}, {
    tableName: 'Subjects',
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

module.exports = Subjects;
