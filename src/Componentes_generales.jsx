import React from 'react';
import {Footer} from './Footer';
import {Boton} from './Boton';
import {Formulario} from './Formulario';

export function Aplicacion() {
    return (
        <React.Fragment>
            <Boton/>
            <Footer/>
            <Formulario/>
        </React.Fragment>
    )
}