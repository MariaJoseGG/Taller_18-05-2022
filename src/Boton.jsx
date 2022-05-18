import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Boton() {
    return (
        <div class="position-relative top-50 start-50">
            <button type="submit" class="btn btn-success" onClick={() => { alert("Se ha hecho click en el botón") }}>Click me</button>
        </div>
    )
}