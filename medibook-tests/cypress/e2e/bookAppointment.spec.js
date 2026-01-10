// cypress/integration/bookAppointment.spec.js

import SearchPage from '../pages/SearchPage';
import AppointmentPage from '../pages/AppointmentPage';

describe('Réservation d\'un créneau', () => {
  const searchPage = new SearchPage();
  const appointmentPage = new AppointmentPage();

  it('Réservation d\'un créneau', () => {
    // 1. Etant donné que je suis connecté comme patient
    cy.loginAsPatient();  // Connexion automatique en tant que patient (à implémenter si nécessaire)

    // 2. Et que je suis sur la page du Dr. Claire Martin
    searchPage.visit();
    searchPage.enterSpecialty('Médecin généraliste');
    searchPage.enterCity('Paris');
    searchPage.clickSearch();
    
    searchPage.getPractitioner('Dr. Claire Martin').click();  // Sélectionner Dr. Claire Martin

    // 3. Quand je sélectionne une date disponible (ex: 12 janvier)
    appointmentPage.selectAvailableDate('12');  // Choisir la date du 12 janvier

    // 4. Et je sélectionne un créneau horaire (ex: 09:00)
    appointmentPage.selectAvailableTimeSlot('09:00');  // Choisir le créneau de 09h00

    // 5. Et je clique sur "Confirmer le rendez-vous"
    appointmentPage.clickConfirmAppointmentButton();

    // 6. Alors je vois le message "Rendez-vous confirmé"
    //appointmentPage.getConfirmationMessage().should('contain.text', 'Rendez-vous confirmé');

    // 7. Et le rendez-vous apparaît dans "Mes rendez-vous"
    appointmentPage.goToMyAppointments();
    appointmentPage.getMyAppointments().should('contain', 'Dr. Claire Martin');
  });
});
