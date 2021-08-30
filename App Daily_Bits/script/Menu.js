const boton = document.getElementById('IconoSalir')
const juegoHTML = document.getElementById('FotoHTML')
const estad = document.getElementById('foto_pyton')
const puntos = []
const puntos2 = []
const puntos3 = []
const puntos4 = []
const punto = []
const punto2 = []
const punto3 = []
const punto4 = []


window.onload = function() {

  Positivos()
  Negativos()


}



const salir = () => {

    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
      })
      Toast.fire({
        icon: 'question',
        title: 'Estas Seguro que deseas Cerrar Sesion?',
        confirmButtonText:'<a style="color: red;" href="../Paginas/Login.html">Si |</a>' + ' ' + '<a style="color: green;" href="../Paginas/Menu.html">No</a>'
      })
}



const Positivos = () => {

 const unoPositivo = () => {

  let prueba = "HTML"
  let ganadas1 = 0

  const traer = {

    prueba,
    ganadas1

  }
    
  puntos.push(traer);
    localStorage.setItem('Ganadas1',JSON.stringify(puntos));

}

const dosPositivo = () => {

  let prueba = "HTML"
  let ganadas2 = 0

  const traer = {

    prueba,
    ganadas2

  }
    
  puntos2.push(traer);
    localStorage.setItem('Ganadas2',JSON.stringify(puntos2));


}

const tresPositivo = () => {

  let prueba = "HTML"
    let ganadas3 = 0
  
    const traer = {
  
      prueba,
      ganadas3
  
    }
      
    puntos3.push(traer);
      localStorage.setItem('Ganadas3',JSON.stringify(puntos3));
  }

  const cuatroPositivo = () => {
  
    let prueba = "HTML"
    let ganadas4 = 0
  
    const traer = {
  
      prueba,
      ganadas4
  
    }
      
    puntos4.push(traer);
      localStorage.setItem('Ganadas4',JSON.stringify(puntos4));
  }


unoPositivo(),dosPositivo(),tresPositivo(),cuatroPositivo();


  
}


const vamos = () => {

  location.href = "../Paginas/pruebaHTML.html"
}



const Negativos = () => {


  const unoNegativo = () => {

    let prueba = "HTML"
    let perdidas1 = 0
  
    const traer = {
  
      prueba,
      perdidas1
  
    }
      
    punto.push(traer);
      localStorage.setItem('Perdidas1',JSON.stringify(punto));
  
  }
  
  
  
  const dosNegativo = () => {
      let prueba = "HTML"
    let perdidas2 = 0
  
    const traer = {
  
      prueba,
      perdidas2
  
    }
      
    punto2.push(traer);
      localStorage.setItem('Perdidas2',JSON.stringify(punto2));
  
  }
  
  
  
  
  const tresNegativo = () => {
  
    let prueba = "HTML"
    let perdidas3 = 0
  
    const traer = {
  
      prueba,
      perdidas3
  
    }
      
    punto3.push(traer);
      localStorage.setItem('Perdidas3',JSON.stringify(punto3));
    
    }
  
    
  
    const cuatroNegativo = () => {
  
      let prueba = "HTML"
      let perdidas4 = 0
    
      const traer = {
    
        prueba,
        perdidas4
    
      }
        
      punto4.push(traer);
        localStorage.setItem('Perdidas4',JSON.stringify(punto4));

    
    }


    unoNegativo(),dosNegativo(),tresNegativo(),cuatroNegativo();
}

const results = () => {

  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
  })
  Toast.fire({
    icon: 'error',
    title: 'Aun no tienes Puntos Registrados',
    confirmButtonText:'<a style="color: red;" href="../Paginas/Menu.html"> OK</a>'
  })
}

juegoHTML.addEventListener('click', vamos)

boton.addEventListener('click', salir)

estad.addEventListener('click', results)