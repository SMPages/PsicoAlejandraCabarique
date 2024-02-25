function VerMasBotonRegistrarse() {
    fetch('vermas.html')
      .then(response => {
        // Verifica si la respuesta es exitosa (status 200)
        if (!response.ok) {
          throw new Error('La respuesta no fue exitosa');
        }
        // Devuelve el contenido de la respuesta como texto
        return response.text();
      })
      .then(data => {
        // Carga el contenido de pagina2.html en el navegador
        document.open();
        document.write(data);
        document.close();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  function RedirigirWhatsApp(){
    window.location.href = 'https://api.whatsapp.com/send?phone=573167711746&text=Hola, ¿deseo agendar una video consulta?';
  }
  function VolverIndex() {  
    fetch('index.html')
      .then(response => {
        // Verifica si la respuesta es exitosa (status 200)
        if (!response.ok) {
          throw new Error('La respuesta no fue exitosa');
        }
        // Devuelve el contenido de la respuesta como texto
        return response.text();
      })
      .then(data => {
        // Carga el contenido de pagina2.html en el navegador
        document.open();
        document.write(data);
        document.close();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }