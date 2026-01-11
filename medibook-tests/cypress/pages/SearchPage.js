class SearchPage {
    visit() {
      cy.visit('/search');
      cy.get('#specialty').should('exist');
      cy.get('#city').should('exist');
      return this;
    }
  
    fillField(selector, value, force = false) {
      cy.get(selector)
        .scrollIntoView()
        .clear()
        .type(value, { force }); 
      return this;
    }
  
    enterSpecialty(specialty) {
      cy.get('#specialty').select(specialty);
      cy.get('#specialty').should('have.value', specialty);
      return this;
    }
  
    enterCity(city) {
      // Utilise fillField pour la saisie de la ville
      this.fillField('#city', city, true); 
      return this;
    }
  
    
    clickSearch() {
        cy.get('button.btn.btn-primary.btn-full[type="submit"]')
          .should('be.visible')  // Attendre que le bouton soit visible
          .and('not.be.disabled')  // Vérifier qu'il n'est pas désactivé
          .click();  // Cliquer sur le bouton
        return this;
      }
  
    
    

      getResults() {
        cy.get('.practitioner-info')  // Cibler tous les résultats des praticiens
          .should('have.length.greaterThan', 0)  // Vérifie qu'il y a des résultats
          .each(($el) => {
            cy.wrap($el).find('.practitioner-name').should('exist');  // Vérifie le nom
            cy.wrap($el).find('.practitioner-specialty')  
              .should('exist')  // Vérifie que la spécialité existe
              .should('not.be.empty')  // Vérifie que la spécialité n'est pas vide
              .should('be.visible');  // Vérifie que la spécialité est visible
            cy.wrap($el).find('.practitioner-address').should('exist');  // Vérifie l'adresse
          });
        return cy.get('.practitioner-info');  // Retourne les résultats pour un chaînage
      }  
    // Vérifie qu'il n'y a pas de résultats
    checkNoResultsMessage() {
      cy.contains('Aucun praticien trouvé').should('be.visible');
      return this;
    }
  
    // Intercepte les requêtes pour attendre la réponse avant de vérifier
    waitForSearchResults() {
      cy.intercept('GET', '/api/search*').as('searchResults'); // Intercepte l'API de recherche
      cy.wait('@searchResults'); // Attend la réponse avant de continuer
      return this;
    }

    // méthode pour sélectionner un praticien spécifique
  selectPractitioner(practitionerName) {
    cy.get('.practitioner-info')  // Cibler chaque carte de praticien
      .contains(practitionerName)  // Cherche le nom du praticien sur la carte
      .click();  // Clique sur le praticien pour accéder à sa page de détails
    return this;
  }
    
  }
  
  export default SearchPage;
  