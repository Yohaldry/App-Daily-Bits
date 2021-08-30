let Formulario = document.getElementById('formLogin')

Formulario.addEventListener('submit', async (e) =>{
    e.preventDefault();

    const email = document.querySelector('.Correo1').value
   
    const info = new XMLHttpRequest();  
     info.open('GET', 'http://localhost:4002/usuarios', true);
     info.send();
     info.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
     
            let datos = JSON.parse(this.responseText)
             for(let item of datos){
                 const infoData = item.correo
                 if(email === infoData){

                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Bienvenido',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      
                    location.href = "../Paginas/Menu.html"
                 }else{

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...Que pena',
                        text: 'Aun no te has registrado, ¡REGISTRATE!',
                        footer: '<a href="">Why do I have this issue?</a>'
                      })
                 }

                  
            }
            
         }
     }


})