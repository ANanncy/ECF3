MEDIBOOK - Projet de Test End-to-End (E2E) avec Cypress

MEDIBOOK est une application de prise de rendez-vous en lignes dont les Fonctionnalités principales sont :
- Inscription et connexion des patients
- Recherche de praticiens par spécialité et ville
- Prise de rendez-vous en ligne
- Gestion des rendez-vous (consultation, annulation)

Ce projet contient des tests automatisés end-to-end (E2E) pour l'application Medibook, utilisant le framework de test Cypress. Ces tests permettent de vérifier que les différentes fonctionnalités de l'application fonctionnent correctement.

  
***Structure du Projet***

Voici la structure du projet contenant les fichiers nécessaires pour l'exécution des tests :

C:.
│   cypress.config.js
│
└───cypress
    ├───e2e
    │   │   bookapp.spec.js
            register.spec.js
    │   │   search.spec.js
    │   │  
    │   ├───1-getting-started
    │   │       todo.cy.js
    │   │
    │   └───2-advanced-examples
    │           actions.cy.js
    │           aliasing.cy.js
    │           assertions.cy.js
    │           ...
    │
    ├───fixtures
    ├───pages
    │       RegisterPage.js
    │       SearchPage.js
    │
    └───support
            command.js       
            e2e.js           


***Détails des dossiers :***

cypress/e2e/ : Contient les fichiers de tests .spec.js pour les fonctionnalités spécifiques de l'application. Par exemple :

register.spec.js : Test d'inscription d'un utilisateur.

search.spec.js : Test de la recherche d'un praticien.

cypress/fixtures/ : Contient des fichiers de données fictives utilisés pour les tests.

cypress/pages/ : Contient les objets de page (Page Object Model - POM), comme AppointmentPage.js et SearchPage.js, pour mieux organiser l'accès aux éléments de la page.

cypress/support/ : Contient les fichiers de configuration et les commandes personnalisées.

command.js : Définition des commandes personnalisées

e2e.js : Fichier de configuration global des tests (facultatif).



***Prérequis***

Avant de commencer, assurez-vous que vous avez installé les outils suivants sur votre machine.

1. Git

Git est nécessaire pour cloner le projet depuis un repository distant.
Vérifiez si Git est installé en exécutant la commande suivante dans votre terminal :

git --version

Si Git n'est pas installé, vous pouvez le télécharger depuis https://git-scm.com/

2. Node.js et npm

Node.js et npm sont nécessaires pour installer les dépendances et exécuter Cypress.
Vérifiez si Node.js et npm sont installés en exécutant les commandes suivantes :

node -v
npm -v

Si Node.js et npm ne sont pas installés, vous pouvez les télécharger depuis https://nodejs.org/

3. Docker et Docker Compose

Docker et Docker Compose sont utilisés pour exécuter des conteneurs d'application et faciliter la gestion des environnements.
Vérifiez si Docker et Docker Compose sont installés en exécutant les commandes suivantes :

docker --version
docker-compose --version

Si Docker ou Docker Compose ne sont pas installés, vous pouvez les télécharger depuis https://www.docker.com/

4. Cypress

Cypress est le framework de test utilisé pour l'exécution des tests.
Vous pouvez installer Cypress avec la commande suivante (voir la section "Installation de Cypress" ci-dessous) :

npm install cypress --save-dev

Installation de Cypress

Clonez ce repository sur votre machine locale :

git clone https://github.com/ANanncy/ECF3.git

Accéder au répertoire du projet cd medibook-tests
Installez les dépendances en exécutant la commande suivante :

npm install

Si vous avez Docker et Docker Compose installés, vous pouvez également exécuter l'application via Docker en démarrant les conteneurs avec la commande suivante (si un fichier docker-compose.yml est présent) :

docker-compose up

***Exécution des Tests***

1. Lancer Cypress en mode interactif (Interface Graphique)

Pour ouvrir l'interface graphique de Cypress et exécuter les tests dans le navigateur :

npx cypress open


Cela ouvrira l'interface graphique où vous pourrez sélectionner les tests à exécuter. Sélectionnez le test souhaité et Cypress exécutera les tests dans le navigateur.

2. Lancer Cypress en mode headless (en ligne de commande)

Pour exécuter tous les tests sans ouvrir l'interface graphique, utilisez la commande suivante :

npx cypress run


Cette commande exécutera les tests en mode headless et affichera les résultats dans la console.

3. Tester un scénario spécifique

Si vous souhaitez exécuter un test particulier, par exemple, register.spec.js, vous pouvez utiliser la commande suivante :

npx cypress run --spec 'cypress/e2e/register.spec.js'


***Structure des Tests***

Les tests sont organisés selon le modèle Page Object Model (POM), ce qui signifie que chaque fonctionnalité ou page est représentée par un fichier JavaScript dans le dossier cypress/pages/.

***Dépannage***

Si vous rencontrez des problèmes pour exécuter les tests, voici quelques conseils :

Assurez-vous que Cypress est correctement installé : Exécutez npx cypress open et vérifiez que l'interface graphique se charge.

Vérifiez les chemins des fichiers : Si des tests ou des fichiers sont manquants, assurez-vous que les chemins relatifs sont corrects.

Consultez les logs de Cypress : Si un test échoue, les logs dans la console ou dans l'interface de Cypress fourniront plus d'informations sur l'erreur.


