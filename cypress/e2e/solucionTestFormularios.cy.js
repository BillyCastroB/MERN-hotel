describe('Formulario de Huésped', () => {

    beforeEach(() => {
      cy.visit('https://sitio-hotel-pruebas2.netlify.app');
    });
  
    it('Debe permitir ingresar un nombre válido', () => {
      cy.get('input[name="nombre"]').type('Juan')
        .should('have.value', 'Juan');
      cy.wait(1000);  
    });
  
    it('Debe permitir ingresar un nombre con tilde sin mostrar alerta de error, pero falla', () => {
      cy.get('input[name="nombre"]').type('Saúl');
      cy.get('.alert-error').should('not.exist');
      cy.wait(1000);
    });
    
  
    it('Debe mostrar error para nombre inválido', () => {
      cy.get('input[name="nombre"]').type('12345');
      cy.get('.alert-error').should('contain', 'Nombre no válido');
      cy.wait(1000); 
    });
  
    it('Debe permitir ingresar un apellido con tilde sin mostrar alerta de error, pero falla', () => {
      cy.get('input[name="apellidos"]').type('Pérez Gómes');
      cy.get('.alert-error').should('not.exist');
      cy.wait(1000);
    });
    
  
    it('Debe mostrar error para apellidos inválidos', () => {
      cy.get('input[name="apellidos"]').type('12345');
      cy.get('.alert-error').should('contain', 'Apellidos no válidos');
      cy.wait(1000); 
    });
  
    it('Debe permitir ingresar un email válido', () => {
      cy.get('input[name="email"]').type('juan.perez@example.com')
        .should('have.value', 'juan.perez@example.com');
      cy.wait(1000);
    });
  
    it('Debe mostrar error para email inválido', () => {
      cy.get('input[name="email"]').type('juan.perez');
      cy.get('.alert-error').should('contain', 'Email no válido');
      cy.wait(1000);
    });
  

    
  });
  