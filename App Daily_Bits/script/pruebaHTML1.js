const comprobar = document.getElementById('comprobar')
const meGusta = document.getElementById('meGusta')
const numeros = document.getElementById('numeross')
const punto2 = []
const puntos2 = []


const seleccion = () => {

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
        icon: 'error',
        title: 'Que pena la respuesta es INCORRECTA, la respuesta correcta es < SCRIPT >',
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
        title: 'Que pena la respuesta es INCORRECTA, la respuesta correcta es < SCRIPT >',
        confirmButtonText: '<a onclick="enviarNegativo()">Continuar</a>'
      })      
 
      

    }else{
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
            icon: 'success',
            title: 'Felicidades Has seleccionado la respuesta Correcta ',
            confirmButtonText: '<a onclick="enviarPositivo()">Continuar</a>'
          })
        }  
    }
}
}
const enviarNegativo = () => {

  let prueba = "HTML"
  let perdidas2 = 1

  const traer = {

    prueba,
    perdidas2

  }
    
  punto2.push(traer);
    localStorage.setItem('Perdidas2',JSON.stringify(punto2));

    location.href = "../Paginas/pruebaHTML2.html"

}

const enviarPositivo = () => {

  let prueba = "HTML"
  let ganadas2 = 1

  const traer = {

    prueba,
    ganadas2

  }
    
  puntos2.push(traer);
    localStorage.setItem('Ganadas2',JSON.stringify(puntos2));

  ir()
}

const ir = () => {
  location.href= "../Paginas/pruebaHTML2.html"

}

comprobar.addEventListener('click', seleccion)