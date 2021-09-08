/// <reference types="cypress" />

describe('Bets', () => {

    it('devem poder realizar um cadastro', ()=>{
        cy.visit('http://localhost:3000/register');
        cy.log('sdsd' )
        cy.get('[data-cy=username]').type('Tsefdsute Cyprgdegess12s');
        cy.get('[data-cy=email]').type('testessfdcdjeypresgs1s2g@hotmail.com');
        cy.get('[data-cy=password]').type('12usdf3d4e5ggs612');

        // routing
        // start server com cy.server()
        //criar uma rota com cy.route()
        //atribuir rota a um alias
        //esperar com cy.wait e fazer valusernameação
        cy.server();
        cy.route({
            method: "POST",
            url: 'http://localhost:3333/users'
        }).as("users");
        cy.request('@users').then((xhr)=>{
            expect(xhr.status).be.eq(200);
            console.log(xhr.response)
        })
        cy.get('[data-cy=btn-submit]').click();
    });
    it('devem poder realizar um login', ()=>{
        cy.visit('http://localhost:3000');
     
        // routing
        // start server com cy.server()
        //criar uma rota com cy.route()
        //atribuir rota a um alias
        //esperar com cy.wait e fazer valusernameação
        cy.request({
            method: "POST",
            url: 'http://localhost:3333/sessions',
             body: 
                {
                    email: "ermessonlimadossantos@hotmail.com",
                    password : "123457"
                }
        }).then(response =>{
            cy.visit({
                method: 'GET',
                url:'http://localhost:3000/home', 
                auth: {
                    bearer: response.body.token.token,
                  }}
            )
            cy.get('[data-cy=email]').type('ermessonlimadossantos@hotmail.com');
            cy.get('[data-cy=password]').type('123457');
            cy.get('[data-cy=btn-submit]').click();
        })
    });
    it('Criar aposta', ()=>{
        cy.get('.sc-dIvrsQ > a').click();
        for (let i = 0; i < 10; i++) {
            cy.get('.sc-gKAaRy > :nth-child(1)').click();
        cy.get('.sc-fujyAs').click();
         }
         cy.get('.sc-crzoAE > p').click();
    });
})
