const comprobar = document.getElementById('comprobar')
const meGusta = document.getElementById('meGusta')
const numeros = document.getElementById('numeross')
const punto3 = []
const puntos3 = []


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
        title: 'Que pena la respuesta es INCORRECTA, la respuesta correcta es #3',
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
        icon: 'error',
        title: 'Que pena la respuesta es INCORRECTA, la respuesta correcta es #3',
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
  let perdidas3 = 1

  const traer = {

    prueba,
    perdidas3

  }
    
  punto3.push(traer);
    localStorage.setItem('Perdidas3',JSON.stringify(punto3));

    location.href= "../Paginas/pruebaHTML4.html"

}

const enviarPositivo = () => {

  let prueba = "HTML"
  let ganadas3 = 1

  const traer = {

    prueba,
    ganadas3

  }
    
  puntos3.push(traer);
    localStorage.setItem('Ganadas3',JSON.stringify(puntos3));

  ir()
}

const ir = () => {
  location.href= "../Paginas/pruebaHTML4.html"

}

comprobar.addEventListener('click', seleccion)


