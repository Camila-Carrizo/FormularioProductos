const TablaFila = ({producto, eliminarProducto, setProductoAEditar}) => {
  


  const handleEliminar = (id) => {
    eliminarProducto(id)
    
  }

  const handleEditar = (producto) => {
    setProductoAEditar(producto)
  }


  return (

    <tr>
      <th scope="row">{producto.nombre}</th>
      <td>{producto.categoria}</td>
      <td>{producto.precio}</td>
      <td>
        <button className="btn btn-info me-2">Detalle</button>
        <button className="btn btn-warning me-2" onClick={()=>handleEditar(producto)}>Editar</button>
        <button className="btn btn-danger" onClick={() => handleEliminar(producto.id)}>Eliminar</button>
      </td>
    </tr>
  )
}

export default TablaFila