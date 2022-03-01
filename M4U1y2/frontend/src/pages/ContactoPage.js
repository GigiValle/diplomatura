import React from 'react';
import '../../src/styles/components/pages/ContactoPage.css';


const ContactoPage = (props) => {
    return (

        <main className="holder">
  
        <div className="columna left">
            <h2>Contacto</h2>
            <form action="" method="" class="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="email">E-Mail</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="telefono">Teléfono</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>
                <p className="acciones">
                    <input type="submit" value="Enviar"/>
                </p>
            </form>
        </div>

        <div className="columna right">
            <h2>Redes Sociales</h2>
            <p>También podés visitar mis redes sociales:</p>
            <ul>
                <li>Whatsapp: 12 345 6789</li>
                <li>E-Mail: contacto@emigrando.com</li>
                <li>Facebook: Emigrando a Alemania</li>
                <li>Instagram: @emigrandoaalemania</li>
            </ul>
        </div>

    </main>

    );
}


export default ContactoPage;

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Contacto Página');
});

module.exports = router;