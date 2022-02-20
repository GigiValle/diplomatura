import React from 'react';

const TrabajarPage = (props) => {
    return (

        <main className="holder">
 
        <div className="trabajar">
            <h2>Trabajar en Alemania</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laudantium accusamus at sapiente nemo numquam hic exercitationem iusto tempore quasi aliquid veritatis veniam sunt fugit, reprehenderit cupiditate expedita cumque doloribus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi molestiae id reprehenderit culpa voluptate, iusto, distinctio est libero eligendi eaque, velit harum modi praesentium ipsam tempora magnam delectus dicta repudiandae.</p>
            <img className="imgtrabajar" src="images/trabajar/work.jpg" alt=""/>
        </div>

        <h2 className="h2busqueda">Top 5 de sitios de búsqueda laboral</h2>
       <div className="busquedas">
        <div className="busqueda">
            <img src="images/trabajar/Publishing-auf-LinkedIn-1-1024x535.png" alt=""/>
            <h5>Linkedin</h5>
            <h6>Buscá en Linkedin</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates assumenda.</p>
            <a href="https://de.linkedin.com " target="_blank" rel="noreferrer">Click aquí</a>
        </div>
        <div className="busqueda">
            <img src="images/trabajar/Glassdoor-Logotipo-2007-2017.jpg" alt=""/>
            <h5>Glassdoor</h5>
            <h6>Buscá en Glassdoor</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates assumenda.</p>
            <a href="https://www.glassdoor.de/index.htm" target="_blank" rel="noreferrer">Click aquí</a>
        </div>
        <div className="busqueda">
            <img src="images/trabajar/Indeed-Logo.png" alt=""/>
            <h5>Indeed</h5>
            <h6>Buscá en Indeed</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates assumenda.</p>
            <a href="https://de.indeed.com" target="_blank" rel="noreferrer">Click aquí</a>
        </div>
        <div className="busqueda">
            <img src="images/trabajar/xing-logo.jpg" alt=""/>
            <h5>Xing</h5>
            <h6>Buscá en Xing</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates assumenda.</p>
            <a href="https://www.xing.com" target="_blank" rel="noreferrer">Click aquí</a>
        </div>
        <div className="busqueda">
            <img src="images/trabajar/monsterred.jpg" alt=""/>
            <h5>Monster</h5>
            <h6>Buscá en Monster</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates assumenda.</p>
            <a href="https://www.monster.de" target="_blank" rel="noreferrer">Click aquí</a>
        </div>

       </div>

    </main>

    );
}

export default TrabajarPage;