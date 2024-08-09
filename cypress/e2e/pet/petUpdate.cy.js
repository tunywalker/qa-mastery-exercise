import { PET_ENDPOINT } from '../../support/constants';

describe('Update Pet', () => {
    it('Update pet successfully with valid data', () => {
        cy.fixture('validPetDataForUpdate').then((validPetDataForUpdate) => {
            cy.request({
                method: 'PUT',
                url: `${PET_ENDPOINT}`,
                headers: {
                    'Accept': 'application/json'
                },
                body: validPetDataForUpdate,
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