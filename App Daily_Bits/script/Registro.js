let Formulario = document.getElementById('formulario')

Formulario.addEventListener('submit', async (e) =>{
    e.preventDefault();
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registro Guardado',
        showConfirmButton: false,
        timer: 1500
      })

    const Nombre = document.querySelector('.nombre').value
    const Apellido = document.querySelector('.apellido').value
    const Correo = document.querySelector('.correo').value
    const Contraseña = document.querySelector('.contraseña').value
    // console.log(Nombre,Apellido,Correo,Contraseña)

    const resp = await fetch('http://localhost:4002/usuarios',{
        method: 'POST',
        body: JSON.stringify({
            nombre: Nombre,
            apellido: Apellido,
            correo: Correo,
            contraseña: Contraseña
        }),
        headers: {

            "Content-Type": "application/json; charset=UTF-8"

        }
        
    })
    const data = resp.json();
   
}) 