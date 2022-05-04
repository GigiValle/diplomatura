import React, {useState} from 'react';
import axios from 'axios';
import '../../src/styles/components/pages/ContactoPage.css';




const ContactoPage = (props) => {
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData =>({
            ...oldData,
            [name]: value
        })); 
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http//localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }




    return (

        <main className="holder">
  
        <div className="columna left">
            <h2>Contacto</h2>
            <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                </p>
                <p>
                    <label for="email">E-Mail</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                </p>
                <p>
                    <label for="telefono">Teléfono</label>
                    <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                </p>
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}
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

