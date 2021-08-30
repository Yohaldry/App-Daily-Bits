const mostrar = document.getElementById('traerInfo')
const traer = document.getElementById('segundoboton')


window.onload = function() {

    estadisticas()
  
  }


const estadisticas = () => {


const puntos1 = JSON.parse(localStorage.getItem('Ganadas1'))
const puntos2 = JSON.parse(localStorage.getItem('Ganadas2'))
const puntos3 = JSON.parse(localStorage.getItem('Ganadas3'))
const puntos4 = JSON.parse(localStorage.getItem('Ganadas4'))
const puntos5 = JSON.parse(localStorage.getItem('Perdidas1'))
const puntos6 = JSON.parse(localStorage.getItem('Perdidas2'))
const puntos7 = JSON.parse(localStorage.getItem('Perdidas3'))
const puntos8 = JSON.parse(localStorage.getItem('Perdidas4'))
const array = []



puntos1.map(Ganadas1 => {
    const {ganadas1} = Ganadas1;

    let mostrar = {
        ganadas1,
    }
    array.push(mostrar);
    localStorage.setItem('PuntosGeneral',JSON.stringify(array));
})


puntos2.map(Ganadas2 => {
    const {ganadas2} = Ganadas2;

    let mostrar = {
        ganadas2,
    }
    array.push(mostrar);
    localStorage.setItem('PuntosGeneral',JSON.stringify(array));
})

puntos3.map(Ganadas3 => {
    const {ganadas3} = Ganadas3;

    let mostrar = {
        ganadas3,
    }
    array.push(mostrar);
    localStorage.setItem('PuntosGeneral',JSON.stringify(array));
})


puntos4.map(Ganadas4 => {
    const {ganadas4} = Ganadas4;

    let mostrar = {
        ganadas4,
    }
    array.push(mostrar);
    localStorage.setItem('PuntosGeneral',JSON.stringify(array));
})


puntos5.map(Perdidas1 => {
    const {perdidas1} = Perdidas1;

    let mostrar = {
        perdidas1
       
    }
    array.push(mostrar);
    localStorage.setItem('PuntosGeneral',JSON.stringify(array));
})


puntos6.map(Perdidas2 => {
    const {perdidas2} = Perdidas2;

    let mostrar = {
        perdidas2
       
    }
    array.push(mostrar);
    localStorage.setItem('PuntosGeneral',JSON.stringify(array));
})



puntos7.map(Perdidas3 => {
    const {perdidas3} = Perdidas3;

    let mostrar = {
        perdidas3
       
    }
    array.push(mostrar);
    localStorage.setItem('PuntosGeneral',JSON.stringify(array));
})


puntos8.map(Perdidas4 => {
    const {perdidas4} = Perdidas4;

    let mostrar = {
        perdidas4
       
    }
    array.push(mostrar);
    localStorage.setItem('PuntosGeneral',JSON.stringify(array));
})


}

const TraerPuntos = async () => {
// alert('ok')

    const totalPuntos = JSON.parse(localStorage.getItem('PuntosGeneral'))
   let ganada1 = totalPuntos[0].ganadas1
   let ganada2 = totalPuntos[1].ganadas2
   let ganada3 = totalPuntos[2].ganadas3
   let ganada4 = totalPuntos[3].ganadas4
   let perdida1 = totalPuntos[4].perdidas1
   let perdida2 = totalPuntos[5].perdidas2
   let perdida3 = totalPuntos[6].perdidas3
   let perdida4 = totalPuntos[7].perdidas4

    const resp = await fetch('http://localhost:4004/niveles',{
        method: 'POST',
        body: JSON.stringify({
            
           positivo1: ganada1,
           positivo2: ganada2,
           positivo3: ganada3,
           positivo4: ganada4,
           negativo1: perdida1,
           negativo2: perdida2,
           negativo3: perdida3,
           negativo4: perdida4
        }),
        headers: {

            "Content-Type": "application/json; charset=UTF-8"

        }
        
    })
    const data = resp.json();

    const Toast = Swal.mixin({

        toast: true,
        position: 'center',
        
      })
      Toast.fire({
        icon: 'success',
        title: 'Carga Exitosa',
        confirmButtonText: 'Ok'
      })

}




const MostrarPuntos = () => {

    const info = new XMLHttpRequest();  
     info.open('GET', 'http://localhost:4004/niveles', true);
     info.send();
     info.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
                 
            let datos = JSON.parse(this.responseText)
             for(let item of datos){
               
                let numP1 = item.positivo1
                let numP2 = item.positivo2
                let numP3 = item.positivo3
                let numP4 = item.positivo4
                let numN1 = item.negativo1
                let numN2 = item.negativo2
                let numN3 = item.negativo3
                let numN4 = item.negativo4

            let SumaPositivos = numP1 + numP2 + numP3 + numP4
            let SumarNegativos = numN1 + numN2 + numN3 + numN4
            let TotalSuma = numP1 + numP2 + numP3 + numP4 + numN1 + numN2 + numN3 + numN4
            console.log(SumaPositivos)


            document.getElementById('total').innerHTML = TotalSuma
            document.getElementById('complete').innerHTML = SumaPositivos
            document.getElementById('incomplete').innerHTML = SumarNegativos



            const Toast = Swal.mixin({

                toast: true,
                position: 'center',
                
              })
              Toast.fire({
                icon: 'success',
                title: 'Puntos Cargados',
                confirmButtonText: 'Vamos'
              })


              

            }
        }
    }

 
}




mostrar.addEventListener('click', MostrarPuntos)

traer.addEventListener('click', TraerPuntos)
