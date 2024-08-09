import { PET_ENDPOINT } from '../../support/constants';

describe('Update Pet', () => {

    it('Update pet successfully with valid data and response time must be less than 1000 ms', () => {
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
                expect(response.duration).to.be.lessThan(1000);
                cy.log(JSON.stringify(response.body));
                console.log(response.body);
            });
        });
    });

    it('try Update pet with empty body retrieves 405 - no data error', () => {
        cy.request({
            method: 'PUT',
            url: `${PET_ENDPOINT}`,
            headers: {
                'Accept': 'application/json'
            },
            
            failOnStatusCode: false
        })
        .then((response) => {
            expect(response.status).to.eq(415); 
            cy.log(JSON.stringify(response.body));
            console.log(response.body);
        });
    });
    

    it('try Update pet with invalid id ', () => {
        cy.fixture('invalidPetDataForUpdate').then((invalidPetDataForUpdate) => {
            cy.request({
                method: 'PUT',
                url: `${PET_ENDPOINT}`,
                headers: {
                    'Accept': 'application/json'
                },
                body: invalidPetDataForUpdate,
                failOnStatusCode: false
            })
            .then((response) => {
                expect(response.status).to.eq(500);
                cy.log(JSON.stringify(response.body));
                console.log(response.body);
            });
        });
    });



    
});