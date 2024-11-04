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
  
    it('Debe permitir ingresar un teléfono válido', () => {
      cy.get('input[name="telefono"]').type('987654321')
        .should('have.value', '987654321');
      cy.wait(1000);
    });
  
    it('Debe mostrar error para teléfono inválido', () => {
      cy.get('input[name="telefono"]').type('123');
      cy.get('.alert-error').should('contain', 'Teléfono no válido');
      cy.wait(1000);
    });
  
    it('Debe fallar al ingresar un teléfono que no empieza con 9, pero no muestra alerta', () => {
      cy.get('input[name="telefono"]').type('887654321');
      cy.get('.alert-error').should('exist'); 
      cy.wait(1000);
    });
    
    
  
    it('Debe mostrar error cuando se intenta enviar el formulario con campos vacíos', () => {
      cy.get('button[type="submit"]').click();
      cy.get('.alert-error').should('contain', 'Todos los campos son obligatorios');
      cy.wait(1000);
    });
  
  
    it('Debe mostrar error cuando se intenta enviar el formulario con campos vacíos', () => {
      cy.get('button[type="submit"]').click();
      cy.get('.alert-error').should('contain', 'Todos los campos son obligatorios');
      cy.wait(1000);
    });
  
    it('Debe mostrar un mensaje de éxito si todos los campos son válidos', () => {
  
      cy.get('input[name="nombre"]').type('Juan');
      cy.get('input[name="apellidos"]').type('Pérez');
      cy.get('input[name="email"]').type('juan.perez@example.com');
      cy.get('input[name="telefono"]').type('987654321');
  
      cy.get('.alert-error').should('not.exist');
      cy.get('button[type="submit"]').click();
      cy.get('.mensaje-exito').should('exist');
    });
    
  });
  