import { useState } from "react"
import Formulario from "./Formulario"
import Tabla from "./Tabla"
import baseDatos from '../data/productos'
import Swal from "sweetalert2"

const Productos = () => {

  

  const [productos, setProductos] = useState(baseDatos)
  const [productoAEditar, setProductoAEditar] = useState(null)


  const agregarProductos = (nuevoProducto) => {

    nuevoProducto.id = Date.now
    
    const nuevoEstado = [...productos, nuevoProducto]
    setProductos(nuevoEstado)
  }

  const eliminarProducto = (id) => {
    Swal.fire({
      title: "Seguro quiere eliminar el producto?",
      text: "Se eliminará el producto definitivamente!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "No, cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        const nuevoEstadoProductos = productos.filter(producto => producto.id !== id)
        setProductos(nuevoEstadoProductos)
        Swal.fire({
          title: "Eliminado!",
          text: "El producto ha sido eliminado",
          icon: "success"
        });
      } else {
        Swal.fire({
          title: "No se eliminó!",
          text: "No se ha eliminado el producto",
          icon: "info"
        })
      }
    });
       
  }

  const editarProducto = (productoAEditar) => {
    const nuevoEstadoProductos = productos.map(producto => producto.id === productoAEditar.id ? productoAEditar : producto)

    setProductos(nuevoEstadoProductos)
  }


  return (

    <div className="container mt-3">
        <h1 className="display-2">Crud Productos</h1>
        <Formulario agregarProductos={agregarProductos} productoAEditar={productoAEditar} editarProducto={editarProducto}/>
        <Tabla productos={productos} eliminarProducto={eliminarProducto} setProductoAEditar={setProductoAEditar}/>
    </div>
  )
}


export default Productos