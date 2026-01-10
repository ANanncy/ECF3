
import RegisterPage from '../pages/RegisterPage';

describe('Inscription patient', () => {
  const registerPage = new RegisterPage();

  it('Inscription réussie', () => {
    registerPage.visit(); // ouvre la page d'inscription

    // remplir les champs
    registerPage.fillFirstName('Test');
    registerPage.fillLastName('Automatise');
    registerPage.fillEmail('test.auto@email.com');
    registerPage.fillPassword('Password123!');
    registerPage.fillConfirmPassword('Password123!');
    registerPage.acceptCGU();
    registerPage.clickRegister();

    // vérifier que le message de succès apparaît
    registerPage.getSuccessMessage().should('be.visible');
  });

  it('Inscription échouée - Email déjà utilisé', () => {
    registerPage.visit(); // ouvre la page d'inscription

    // remplir les champs avec un email déjà utilisé
    registerPage.fillFirstName('Jean');
    registerPage.fillLastName('Dupont');
    registerPage.fillEmail('jean.dupont@email.com'); // email déjà existant
    registerPage.fillPassword('Patient123!');
    registerPage.fillConfirmPassword('Patient123!');
    registerPage.acceptCGU();
    
    // cliquer sur le bouton
    registerPage.clickRegister();

    // vérifier que le message d'erreur apparaît
    registerPage.getErrorMessage().should('be.visible');
  });
});
