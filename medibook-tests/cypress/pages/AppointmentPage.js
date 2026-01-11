class AppointmentPage {
    // Sélectionner une date disponible (ex: 12 janvier)
    selectAvailableDate(date) {
      cy.get('button.day-btn').contains(date).click();
      return this;
    }
  
    // Sélectionner un créneau horaire disponible (ex: 09:00)
    selectAvailableTimeSlot(time) {
      cy.get('button.slot-btn').contains(time).click();
      return this;
    }
  
    // Cliquer sur le bouton "Confirmer le rendez-vous"
    clickConfirmAppointmentButton() {
      cy.get('button.btn.btn-primary').contains('Confirmer le rendez-vous').click();
      return this;
    }
  
    // Obtenir le message de confirmation
    getConfirmationMessage() {
      return cy.get('.confirmation-message');  // Si ce message a une classe spécifique
    }
  
    // Accéder à la page des rendez-vous
    goToMyAppointments() {
      cy.get('.my-appointments-link').click();
      return this;
    }
  
    // Vérifier que le rendez-vous est bien dans "Mes rendez-vous"
    getMyAppointments() {
      return cy.get('.appointments-list');
    }
  }
  
  export default AppointmentPage;
  