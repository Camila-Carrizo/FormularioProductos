import { useEffect, useState } from "react"
import Swal from "sweetalert2"

const Formulario = ({ agregarProductos, productoAEditar, editarProducto }) => {

    const formInicial = {
        id: null,
        nombre: '',
        categoria: '',
        precio: ''
    }

    const [form, setForm] = useState(formInicial)

    useEffect(() => {

        productoAEditar ? setForm(productoAEditar) : setForm(formInicial)

    }, [productoAEditar])

    const handleChange = e => {

        const datoIngresado = {
            ...form,
            [e.target.name]: e.target.value
        }

        setForm(datoIngresado)
    }

    const handleSumbit = e => {
        e.preventDefault()

        if (form.id === null) {
            agregarProductos(form)
        } else {
            Swal.fire({
                title: "Seguro quiere editar el producto?",
                text: "Se editará el producto definitivamente!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, editar!",
                cancelButtonText: "No, cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    editarProducto(form)
                    Swal.fire({
                        title: "editado!",
                        text: "El producto ha sido editado",
                        icon: "success"
                    });
                } else {
                    Swal.fire({
                        title: "No se editó!",
                        text: "No se ha editado el producto",
                        icon: "info"
                      })
                    }
                });
        }

        handleReset()
    }

    const handleReset = () => {
        setForm(formInicial)
    }

    return (
        <>
            <h2 className="display-5">Formulario {productoAEditar ? 'Editar':'Agregar'}</h2>
            <hr />

            <form action="" className="border border-success rounded-3 w-50 p-5 bn-5" onSubmit={handleSumbit}>

                {/* Campo Nombre */}

                <div className="mb-3">
                    <label htmlFor="lbl-nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control"
                        id="lbl-nombre"
                        name="nombre"
                        onChange={handleChange}
                        value={form.nombre}
                        placeholder="Ingrese el nombre" />
                </div>

                {/* Campo Categoría */}

                <div className="mb-3">
                    <label htmlFor="lbl-categoria" className="form-label">Categoría</label>
                    <input type="text" className="form-control"
                        id="lbl-categoria"
                        name="categoria"
                        onChange={handleChange}
                        value={form.categoria}
                        placeholder="Ingrese la categoría" />
                </div>

                {/* Campo Precio */}

                <div className="mb-3">
                    <label htmlFor="lbl-precio" className="form-label">Precio</label>
                    <input type="text" className="form-control"
                        id="lbl-precio"
                        name="precio"
                        onChange={handleChange}
                        value={form.precio}
                        placeholder="Ingrese el precio" />
                </div>

                <button type="sumbit" className="btn btn-success me-2">Agregar</button>
                <button type="reset" className="btn btn-danger" onClick={handleReset}>Limpiar</button>


            </form>



        </>
    )
}

export default Formulario