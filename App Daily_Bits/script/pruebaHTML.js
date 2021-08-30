const comprobar = document.getElementById('comprobar')
const meGusta = document.getElementById('meGusta')
const numeros = document.getElementById('numeross')
const punto = []
const puntos = []


const seleccion = () => {

    if(document.getElementById('activar1').checked){

      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: 'Que pena la respuesta es INCORRECTA, La respuesta correcta es MAIN',
        confirmButtonText: '<a onclick="enviarNegativo()">Continuar</a>'
      })      
 
      

    }else{
    
    if(document.getElementById('activar2').checked){
    
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: 'Que pena la respuesta es INCORRECTA, La respuesta correcta es MAIN',
        confirmButtonText: '<a onclick="enviarNegativo()">Continuar</a>'
      })      
 
      

    }else{
        if(document.getElementById('activar').checked){


          const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showConfirmButton: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
            }
          })
          Toast.fire({
            icon: 'success',
            title: 'Felicidades Has seleccionado la respuesta Correcta',
            confirmButtonText: '<a onclick="enviarPositivo()">Continuar</a>'
          })
        }  
    }
}
}
const enviarNegativo = () => {

  let prueba = "HTML"
  let perdidas1 = 1

  const traer = {

    prueba,
    perdidas1

  }
    
  punto.push(traer);
    localStorage.setItem('Perdidas1',JSON.stringify(punto));

    location.href = "../Paginas/pruebaHTML1.html"

}

const enviarPositivo = () => {

  let prueba = "HTML"
  let ganadas1 = 1

  const traer = {

    prueba,
    ganadas1

  }
    
  puntos.push(traer);
    localStorage.setItem('Ganadas1',JSON.stringify(puntos));

    location.href = "../Paginas/pruebaHTML1.html"
}

comprobar.addEventListener('click', seleccion)