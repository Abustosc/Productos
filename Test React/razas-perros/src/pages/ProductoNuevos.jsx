import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/ProductoN.css"
import alert from '../componentes/alert';


const ProductoNuevos = () => {
    return (
        <div>
            <h2 className="titulo1">NUEVO PRODUCTO</h2>

            <section className="form-ventas">
           
                <form action="#">
                    <h3 className="titulo2">ID: <span>000</span></h3>
                    <label for="producto">Producto</label>
                    <input type="text" name="producto" id="producto" placeholder="Nombre del producto" />
                    <label for="descripción">Descripción</label>
                    <input type="text" name="descripción" id="descripción" placeholder="Escriba la descripción del producto" />
                    <label for="valor">Valor Unitario</label>
                    <input type="number" name="valor" id="valor" placeholder="Valor Unitario" />
                    

                    <label for="estados">Estado</label>
                    <select class="seleccionar" name="estados" id="estados">
                        <option value="pendiente">Disponible</option>
                        <option value="autorizado">No Disponible</option>

                    </select>
                    <input class="button" type="submit" value="Enviar" onClick="alert"/>
                   {/* alerta para confirmar producto */}
                </form>
            </section>
            
        </div>
    )
}

export default ProductoNuevos
