import { defineConfig } from 'cypress';
import allureWriter from '@shelex/cypress-allure-plugin/writer.js';

export default defineConfig({
  projectId: '627nmm', // Este es el ID generado para tu proyecto
  e2e: {
    baseUrl: 'https://sitio-hotel-pruebas1.netlify.app',
    video: true, // URL base para tus pruebas
    setupNodeEvents(on, config) {
      // Configuración del plugin Allure
      allureWriter(on, config);
      // Configuración adicional si es necesario
      return config;
    },
    // reporter: 'mochawesome',
    /* reporterOptions: {
      reportDir: 'cypress/report/mochawesome-report', // Carpeta para los reportes de Mochawesome
      overwrite: true,                               // Sobrescribir reportes existentes
      html: true,                                    // Generar reportes en HTML
      json: true,                                    // Generar reportes en JSON
      timestamp: 'mmddyyyy_HHMMss',                 // Agregar timestamp a los reportes
    }, */
    env: {
      allure: {
        outputDir: 'allure-results', // Carpeta de salida para los reportes de Allure
      },
    },
  },
});
