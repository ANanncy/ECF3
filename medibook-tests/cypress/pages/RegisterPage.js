class RegisterPage {
    visit() {
        cy.visit('/register'); // ouvre la page d'inscription
    }

    fillFirstName(firstName) {
        cy.get('input[name="firstName"]').type(firstName);
    }

    fillLastName(lastName) {
        cy.get('input[name="lastName"]').type(lastName);
    }

    fillEmail(email) {
        cy.get('input[name="email"]').type(email);
    }

    fillPassword(password) {
        cy.get('input[name="password"]').type(password);
    }

    fillConfirmPassword(password) {
        cy.get('input[name="confirmPassword"]').type(password);
    }

    acceptCGU() {
        cy.get('input[name="acceptTerms"]').check();
    }

    clickRegister() {
        cy.get('button.btn.btn-primary.btn-lg.btn-full[type="submit"]')
          .should('be.visible')
          .should('not.be.disabled')
          .click();
    }

    getSuccessMessage() {
        return cy.contains('Compte créé avec succès');
    }

    getErrorMessage() {
        return cy.contains('Un compte existe déjà avec cet email');
    }
}

export default RegisterPage;
