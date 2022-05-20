import React from 'react'

export function Formulario() {
  return (
    <div className="container" class="d-grid gap-2 col-6 mx-auto" >
      <form>
        <div class="row">
          <div class="col-sm">
            <label for='example'>Ingrese su nombre</label>
            <br />
            <input class="form-control me-2" type="text" placeholder="Nombre" aria-label="Nombre"></input>
          </div>
          <div class="col-sm">
            <label for='example'>Ingrese su apellido</label>
            <br />
            <input class="form-control me-2" type="text" placeholder="Apellido" aria-label="Apellido"></input>
          </div>
        </div>
        <br />
        <button type="submit" class="btn btn-success d-grid gap-2 col-6 mx-auto" >Enviar</button>
      </form>
    </div >
  )
}
