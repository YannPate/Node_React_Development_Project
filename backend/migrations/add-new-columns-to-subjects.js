'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Ajouter des colonnes modifiées ici.
     */
    await queryInterface.addColumn('Subjects', 'assignmentDue', {
      type: Sequelize.DATE,
      allowNull: true,
    });
    await queryInterface.addColumn('Subjects', 'upcomingExam', {
      type: Sequelize.DATE,
      allowNull: true,
    });
    await queryInterface.addColumn('Subjects', 'finalProject', {
      type: Sequelize.DATE,
      allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Révertir les modifications ici.
     */
    await queryInterface.removeColumn('Subjects', 'assignmentDue');
    await queryInterface.removeColumn('Subjects', 'upcomingExam');
    await queryInterface.removeColumn('Subjects', 'finalProject');
  }
};
