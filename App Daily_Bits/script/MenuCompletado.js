const boton = document.getElementById('IconoSalir')
const HTML = document.getElementById('FotoHTML')

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

const resetear = () => {


  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
  })
  Toast.fire({
    icon: 'success',
    title: 'Este nivel ya lo has superado, ¿Quieres empezar de Nuevo?',
    confirmButtonText:'<a style="color: red;" href="../Paginas/Menu.html">Si |</a>' + ' ' + '<a style="color: green;" href="../Paginas/MenuCompletado.html">No</a>'
  })

}



boton.addEventListener('click', salir)

HTML.addEventListener('click', resetear)

