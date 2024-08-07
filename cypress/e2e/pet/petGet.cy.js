import { PET_ENDPOINT } from '../../support/constants';
import { PET_IDS } from '../../support/petIds';
describe('GET Pet by ID', () => {
    it('retrieve pet details with correct id', () => {
        cy.request('GET', `${PET_ENDPOINT}/${PET_IDS.CORRECT_ID}`)
            .then((response) => {
                expect(response.status).to.eq(200);
                cy.log(JSON.stringify(response.body));
                console.log(response.body);
            });
    });

    it('gives not found error with incorrect id ', () => {
        cy.request({
            method: 'GET',
            url: `${PET_ENDPOINT}/${PET_IDS.INCORRECT_ID}`,
            failOnStatusCode: false
        })
            .then((response) => {
                expect(response.status).to.eq(404);
                cy.log(JSON.stringify(response.body));
                console.log(response.body);
            });
    });

    it('gives not found error with wrong format id', () => {
        cy.request({
            method: 'GET',
            url: `${PET_ENDPOINT}/${PET_IDS.WRONG_FORMAT_ID}`,
            failOnStatusCode: false
        })
            .then((response) => {
                expect(response.status).to.eq(404); 
                expect(response.body.message).to.include('NumberFormatException');
                cy.log(JSON.stringify(response.body));
                console.log(response.body);
            });
    });
});

