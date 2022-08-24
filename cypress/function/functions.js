class functions {

    entrar() {
        cy.visit('/')
        cy.get('input[placeholder="seu e-mail"]').type('usuariotestes@multti.com')
        cy.get('#password').type('123456')
        cy.get('button[class="login-button"]').click()
    }
    entrarNfs() {
    cy.wait(7000)
    cy.get(':nth-child(3) > .navbar-item-folder-vertical').click()
    cy.get('.navbar-show-folder > :nth-child(1) > .navbar-link-container > .navbar-item').click()
    cy.get('h2[class="header-bar-title-page"]').should('have.text', 'Notas Fiscais Emitidas - NFS-e')
    }
    clicarNaUltimaPagina(){
        cy.get(':nth-child(8) > .MuiButtonBase-root').click()
    }
    listar100Itens() {
        cy.get('.react-select__single-value').type('{downArrow}{downArrow}{downArrow}{enter}')
    }
    filtrarNfs() {
        cy.get(':nth-child(2) > .calendar-container > .react-datepicker-wrapper > .react-datepicker__input-container > .input-field').wait(1000)
         .clear().type("30012022")
         cy.get(':nth-child(3) > .calendar-container > .react-datepicker-wrapper > .react-datepicker__input-container > .input-field').wait(1000)
         .clear().type("01022022")
         cy.get('.styles_formSelectInput__1wy97 > .react-select__control > .react-select__value-container').type('ADRIANA WAGNER KARPAT{enter}')
         cy.get('.filter-button-area > .btn-primary').click()
    }
    verificarListaNfsE() {
        cy.contains('.MuiTableBody-root > :nth-child(1) > :nth-child(3)').should('be.visible')
    }
    exportarXls() {
        cy.get('.moreoptionsdisplay-wrapper > .icon-wrapper').click()
        cy.get('li[data-action="exportar-xls"]').click()
    }
    verficacaoLogin() {
        cy.wait(5000)
        cy.get('h2[class="header-bar-title-page"]').should('have.text',
            'Seja bem vindo à  contábilhub')
    }    
    filtrar() {
        cy.wait(7000)
        cy.get(':nth-child(3) > .navbar-item-folder-vertical').click()
        cy.get('.navbar-show-folder > :nth-child(1) > .navbar-link-container > .navbar-item').click()
        cy.get(':nth-child(2) > .calendar-container > .react-datepicker-wrapper > .react-datepicker__input-container > .input-field').wait(1000)
         .clear().type("30012022")
         cy.get(':nth-child(3) > .calendar-container > .react-datepicker-wrapper > .react-datepicker__input-container > .input-field').wait(1000)
         .clear().type("01022022")
         cy.get('.styles_formSelectInput__1wy97 > .react-select__control > .react-select__value-container').type('ADRIANA WAGNER KARPAT{enter}')
         cy.get('.filter-button-area > .btn-primary').click()
    }
    verificarFiltro(){
        cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(2)')
        .should('have.text', '31/01/2022 12:14:49')
        cy.get('.MuiTableBody-root > :nth-child(2) > :nth-child(2)')
        .should('have.text', '31/01/2022 12:08:33')
        cy.get('.MuiTableBody-root > :nth-child(3) > :nth-child(2)')
        .should('have.text', '31/01/2022 12:06:38')
        cy.get('.MuiTableBody-root > :nth-child(4) > :nth-child(2)')
        .should('have.text', '31/01/2022 12:04:35')
        cy.get('.MuiTableBody-root > :nth-child(5) > :nth-child(2)')
        .should('have.text', '31/01/2022 11:59:24')
        cy.get('.MuiTableBody-root > :nth-child(6) > :nth-child(2)')
        .should('have.text', '31/01/2022 11:56:51')
        cy.get('.MuiTableBody-root > :nth-child(7) > :nth-child(2)')
        .should('have.text', '31/01/2022 11:07:41')
        
    }
}
export default functions;