import React from 'react';
import {Tablita} from './Tablita';
import {Footer} from './Footer';
import {Boton} from './Boton';
import {Formulario} from './Formulario';

export function Aplicacion(){
    return(
        <React.Fragment>
            <Formulario/>
            <Boton/>
            <Footer/>
            <Tablita/>
            <Tablita/>
        </React.Fragment>
    )
}