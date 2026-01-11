import SearchPage from '../pages/SearchPage';

describe('Connexion et recherche du Dr. Claire Martin', () => {
  const searchPage = new SearchPage();

  it('Connexion réussie et accès à la page du Dr. Claire Martin', () => {
    // Se connecter directement sur la page de connexion
    cy.visit('/login');  // Accéder à la page de connexion

    // Remplir les champs pour la connexion
    cy.get('input[name="email"]').type('jean.dupont@email.com');
    cy.get('input[name="password"]').type('Patient123!');
    cy.get('button[type="submit"]').click();  


    // Accéder à la page de recherche
    searchPage.visit();  // Utiliser la méthode visit() de SearchPage pour aller sur /search

    // Effectuer la recherche
    searchPage.enterSpecialty('Médecin généraliste');
    searchPage.enterCity('Paris');
    searchPage.clickSearch();

    // Sélectionner le Dr. Claire Martin et accéder à sa page de détails
    cy.get('.practitioner-info').contains('Dr. Claire Martin').click();  // Cliquer sur le Dr. Claire Martin

    // Sélectionner le 12 janvier
    cy.get('button.day-btn')  
      .contains('12') // Recherche le bouton qui contient "12"
      .click(); // Clique sur le bouton pour sélectionner cette date


  });
});
