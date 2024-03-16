import TablaFila from "./TablaFila"

const Tabla = ({productos, eliminarProducto, setProductoAEditar}) => {


  return (

    <>
      <h2 className="display-5">Listado de Productos</h2>
      <hr />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Categoría</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>

        <tbody>

          {
            productos.map((producto, idx) =>(
              <TablaFila key={idx} producto={producto} eliminarProducto={eliminarProducto} setProductoAEditar={setProductoAEditar}/>
            ))
          }
        </tbody>
      </table>

    </>
  )
}

export default Tabla