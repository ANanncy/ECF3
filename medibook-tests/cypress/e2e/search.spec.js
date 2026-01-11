import SearchPage from '../pages/SearchPage';

describe('Recherche de praticien', () => {
  const searchPage = new SearchPage();

  it('Recherche par spécialité et ville', () => {
    searchPage.visit();
    searchPage.enterSpecialty('Médecin généraliste');
    searchPage.enterCity('Paris');
    searchPage.clickSearch();

    searchPage.getResults().should('have.length.gt', 0);  // Vérifie qu'il y a des résultats
    searchPage.getResults().each(($praticien) => {
      cy.wrap($praticien).find('.practitioner-name').should('exist').and('not.be.empty');  // Vérifie le nom du praticien
      cy.wrap($praticien).find('.practitioner-specialty')  
        .should('exist')  // Vérifie que la spécialité existe
        .should('not.be.empty')  // Vérifie que la spécialité n'est pas vide
        .should('contain.text', 'Médecin généraliste');  // Vérifie que la spécialité contient "Médecin généraliste"
      cy.wrap($praticien).find('.practitioner-address')  // Vérifie l'adresse
        .should('exist')
        .should('contain.text', 'Paris');  // Vérifie que l'adresse contient "Paris"
    });
  });

  it('Recherche sans résultat', () => {
    searchPage.visit();
    searchPage.enterSpecialty('Cardiologue');
    searchPage.enterCity('Village Inexistant');
    searchPage.clickSearch();
    cy.contains('Aucun praticien trouvé').should('be.visible');  // Vérifie qu'il n'y a pas de résultats
  });
});
