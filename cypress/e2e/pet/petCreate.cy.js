import { PET_ENDPOINT } from '../../support/constants';
describe('Create Pet', () => {
    it('creates a new pet successfully with valid data', () => {
        cy.fixture('validPetDataForCreate').then((validPetDataForCreate) => {
            cy.request({
                method: 'POST',
                url: `${PET_ENDPOINT}`,
                headers: {
                    'Accept': 'application/json'
                },
                body: validPetDataForCreate,
                failOnStatusCode: false
            })
            .then((response) => {
                expect(response.status).to.eq(200);
                cy.log(JSON.stringify(response.body));
                console.log(response.body);
            });
        });
    });

    it('fails to create a pet with invalid id data', () => {
        cy.fixture('invalidPetDataForCreate').then((invalidPetDataForCreate) => {
            cy.request({
                method: 'POST',
                url: `${PET_ENDPOINT}`,
                headers: {
                    'Accept': 'application/json'
                },
                body: invalidPetDataForCreate,
                failOnStatusCode: false
            })
            .then((response) => {
                expect(response.status).to.eq(500); // veya uygun hata kodunu kontrol edin
                expect(response.body.message).to.include('something bad happened');
                cy.log(JSON.stringify(response.body));
                console.log(response.body);
            });
        });
    });

    it('creates a new pet successfully with valid data without category area ', () => {
        cy.fixture('validPetDataWithoutCategoryForCreate').then((validPetDataWithoutCategoryForCreate) => {
            cy.request({
                method: 'POST',
                url: `${PET_ENDPOINT}`,
                headers: {
                    'Accept': 'application/json'
                },
                body: validPetDataWithoutCategoryForCreate,
                failOnStatusCode: false
            })
            .then((response) => {
                expect(response.status).to.eq(200);          
                cy.log(JSON.stringify(response.body));
                console.log(response.body);
            });
        });
    });
  

});