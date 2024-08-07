import { PET_ENDPOINT } from '../../support/constants';
describe('Create Pet', () => {
    it('creates a new pet successfully with valid data', () => {
        cy.fixture('validPetData').then((validPetData) => {
            cy.request({
                method: 'POST',
                url: `${PET_ENDPOINT}`,
                headers: {
                    'Accept': 'application/json'
                },
                body: validPetData,
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
        cy.fixture('invalidPetData').then((invalidPetData) => {
            cy.request({
                method: 'POST',
                url: `${PET_ENDPOINT}`,
                headers: {
                    'Accept': 'application/json'
                },
                body: invalidPetData,
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
        cy.fixture('validPetDataWithoutCategory').then((validPetDataWithoutCategory) => {
            cy.request({
                method: 'POST',
                url: `${PET_ENDPOINT}`,
                headers: {
                    'Accept': 'application/json'
                },
                body: validPetDataWithoutCategory,
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