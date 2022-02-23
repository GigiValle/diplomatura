import React from 'react';
import '../styles/components/pages/IndexPage.css';


const IndexPage = (props) => {
    return (
        <main className="holder">

        <div className='homeimg'>
            <img src='images/home/köln01.jpg' alt="Köln"/>
        </div>

        <div className='columnas'>
         <div class="columnas">
                <div className="bienvenidos left">
                 <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sed quam culpa a harum nemo dolore
                    saepe quisquam nulla perferendis, tempore asperiores quas similique distinctio debitis sequi optio
                    omnis corporis?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ducimus, reprehenderit molestias
                    dolores nihil voluptate, inventore id odio ut eius tempora odit quae voluptatum blanditiis nam autem
                    perferendis minus! Perspiciatis.</p>
                <h2 className="infohome">Información que encontrarás en el sitio</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sed quam culpa a harum nemo dolore
                    saepe quisquam nulla perferendis, tempore asperiores quas similique distinctio debitis sequi optio
                    omnis corporis?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ducimus, reprehenderit molestias
                    dolores nihil voluptate, inventore id odio ut eius tempora odit quae voluptatum blanditiis nam autem
                    perferendis minus! Perspiciatis.</p>
                </div>
            <div className="testimonios right">
                <h2>Testimonios de Migrantes</h2>
                <div class="testimonio">
                    <span className="cita">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                    <span className="autor">Juan Perez - Arg.</span>
                </div>
                <div className="testimonio">
                    <span className="cita">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                    <span className="autor">Fulanito Van Hausen - Chile</span>
                </div>
                <div className="testimonio">
                    <span className="cita">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                    <span className="autor">Menganito - Uruguay</span>
                </div>
            </div>
        </div>
     </div>
        </main>

        
    );
}

export default IndexPage;