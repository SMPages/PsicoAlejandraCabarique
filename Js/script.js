
// function VerMasBotonRegistrarse() {
//     fetch('vermas.html')
//       .then(response => {
//         // Verifica si la respuesta es exitosa (status 200)
//         if (!response.ok) {
//           throw new Error('La respuesta no fue exitosa');
//         }
//         // Devuelve el contenido de la respuesta como texto
//         return response.text();
//       })
//       .then(data => {
//         // Carga el contenido de pagina2.html en el navegador
//         document.open();
//         document.write(data);
//         document.close();
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }
//   function RedirigirWhatsApp(){
//     window.location.href = 'https://api.whatsapp.com/send?phone=573167711746&text=Hola, ¿deseo agendar una video consulta?';
//   }
//   function VolverIndex() {  
//     fetch('index.html')
//       .then(response => {
//         // Verifica si la respuesta es exitosa (status 200)
//         if (!response.ok) {
//           throw new Error('La respuesta no fue exitosa');
//         }
//         // Devuelve el contenido de la respuesta como texto
//         return response.text();
//       })
//       .then(data => {
//         // Carga el contenido de pagina2.html en el navegador
//         document.open();
//         document.write(data);
//         document.close();
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }

//   function FormularioMasterClass() {
//     fetch('registro.html')
//       .then(response => {
//         // Verifica si la respuesta es exitosa (status 200)
//         if (!response.ok) {
//           throw new Error('La respuesta no fue exitosa');
//         }
//         // Devuelve el contenido de la respuesta como texto
//         return response.text();
//       })
//       .then(data => {
//         // Carga el contenido de pagina2.html en el navegador
//         document.open();
//         document.write(data);
//         document.close();
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }


//   // Obtener elementos del DOM
// 
// var openModalBtn = document.getElementById("openModalBtn");
// var closeModalBtn = document.getElementsByClassName("close")[0];

// // Abrir modal al hacer clic en el botón
// openModalBtn.onclick = function() {
//   modal.style.display = "block";
// }

// // Cerrar modal al hacer clic en la X
// closeModalBtn.onclick = function() {
//   modal.style.display = "none";
// }

// // Cerrar modal al hacer clic fuera del modal
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

function AbrirModalRegistro(){
  let modal = document.getElementById('ModalRegistro');
  modal.style.display = "block";
}

function CerrarModal(){
  let modal = document.getElementById('ModalRegistro');
  modal.style.display = "none";
}