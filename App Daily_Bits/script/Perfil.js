let form = document.getElementById('formPerfil')
let botonModificar = document.getElementById('modif')
let botonDelete = document.getElementById('eliminar')

form.addEventListener('submit', async (e) =>{
    e.preventDefault();

    const email = document.getElementById('correo').value
    const nombre = document.getElementById('nombre')
    const apellido = document.getElementById('apellido')
    const contraseña = document.getElementById('contraseña')
    const id = document.getElementById('ID')
    const vamos = document.getElementById('vamosID')
    const vamos2 = document.getElementById('vamosID2')

   
    const info = new XMLHttpRequest();  
     info.open('GET', 'http://localhost:4002/usuarios', true);
     info.send();
     info.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
                 
            let datos = JSON.parse(this.responseText)
             for(let item of datos){
                 const infoData = item.correo
                 if(email != infoData){

                    const Toast = Swal.mixin({

                        toast: true,
                        position: 'center',
                        
                      })
                      Toast.fire({
                        icon: 'error',
                        title: 'Este usuario no Existe en la base de datos',
                        confirmButtonText: 'Ok'
                      })
                    
                 }else{if(email === infoData){

                    const Toast = Swal.mixin({

                        toast: true,
                        position: 'center',
                        
                      })
                      Toast.fire({
                        icon: 'success',
                        title: 'Carga Exitosa',
                        confirmButtonText: 'Ok'
                      })


                    nombre.value = item.nombre
                    apellido.value = item.apellido
                    contraseña.value = item.contraseña
                    id.innerHTML = item.id
                    vamos.value = item.id
                    vamos2.value = item.correo

                    
                 }

                    
                 }  
            } 
         }
     }

})

botonModificar.addEventListener('click', async () => {

    const Toast = Swal.mixin({

        toast: true,
        position: 'center',
        timer: 3000,
         timerProgressBar: true
        
      })
      Toast.fire({
        icon: 'success',
        title: 'Usuario Modificado',
        confirmButtonText: 'Ok'
      })


    const email = document.getElementById('correo').value
    let vamos = document.getElementById('vamosID').value
    let nombre = document.getElementById('nombre').value
    let apellido = document.getElementById('apellido').value
    let contraseña = document.getElementById('contraseña').value
    const vamos2 = document.getElementById('vamosID2').value
console.log(vamos)
    let resp = await fetch(`http://localhost:4002/usuarios/${vamos}`,{
        method: 'PUT',
        body: JSON.stringify({
            nombre: nombre,
            apellido: apellido,
            correo: vamos2,
            contraseña: contraseña

        }),
        headers: {

            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    const data = resp.json();

})





botonDelete.addEventListener('click', async () => {

    let timerInterval
Swal.fire({
  title: 'Eliminando este usuario',
  html: 'Falta Poco <b></b> milliseconds.',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})

    let DeleteID = document.getElementById('vamosID').value
    let resp = await fetch(`http://localhost:4002/usuarios/${DeleteID}`,{

        method: 'DELETE'
    })
})


