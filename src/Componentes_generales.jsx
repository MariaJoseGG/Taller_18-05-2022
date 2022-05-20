import React from 'react';
import {Tablita} from './Tablita';
import {Footer} from './Footer';
import {Boton} from './Boton';
import {Formulario} from './Formulario';
import {Head} from './Head';

export function Aplicacion(){
    return(
        <React.Fragment>
            <Head/>
            <Tablita/>
            <Formulario/>
            <Tablita/>
            <Boton/>
            <Footer/>
        </React.Fragment>
    )
}