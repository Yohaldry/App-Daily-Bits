const boton = document.getElementById('comprobando')
document.querySelector('#Rect_ngulo_36').addEventListener('click', correcta)
document.querySelector('#Rect_ngulo_39').addEventListener('click', incorrecta)
document.querySelector('#Rect_ngulo_40').addEventListener('click', incorrecta)
document.querySelector('#Rect_ngulo_41').addEventListener('click', incorrecta)
const punto4 = []
const puntos4 = []


 function correcta (){

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



 function incorrecta (){

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
 }




 const enviarNegativo = () => {

    let prueba = "HTML"
    let perdidas4 = 1
  
    const traer = {
  
      prueba,
      perdidas4
  
    }
      
    punto4.push(traer);
      localStorage.setItem('Perdidas4',JSON.stringify(punto4));
  
      location.href= "../Paginas/MenuCompletado.html"
  
  }
  
  const enviarPositivo = () => {
  
    let prueba = "HTML"
    let ganadas4 = 1
  
    const traer = {
  
      prueba,
      ganadas4
  
    }
      
    puntos4.push(traer);
      localStorage.setItem('Ganadas4',JSON.stringify(puntos4));
  
    ir()
  }
  
  const ir = () => {
    location.href= "../Paginas/MenuCompletado.html"
  
  }

