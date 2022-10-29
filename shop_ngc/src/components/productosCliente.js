import React, { Fragment } from 'react';

const ListaCliente = () => {
    return(
        <Fragment>
            <h1  id = "encabezado_productos"> Productos Disponibles </h1>
            <section id="productos" className='container mt-3'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src="./imagenes/fresas.png" alt="Fresas"></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='http://localhost:3000'> Fresas </a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating_inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 5 Reviews</span>
                                </div>
                                <p className='card-text'> $6.500 x Kg </p>
                                    
                                
                            </div>
                        </div>
                    </div>
                    </div>
            </section>
            <section id="productos" className='container mt-3'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src="./imagenes/berenjena.png" alt="Berenjena"></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='http://localhost:3000'> Berenjena </a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 5 Reviews</span>
                                </div>
                                <p className='card-text'> $15.500 x Kg </p>
                                    
                                
                            </div>
                        </div>
                    </div>
                    </div>
            </section>
            <section id="productos" className='container mt-3'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src="./imagenes/cebolla.png" alt="Cebolla Blanca"></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='http://localhost:3000'> Cebolla Blanca </a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 5 Reviews</span>
                                </div>
                                <p className='card-text'> $2.500 x Kg </p>
                                    
                                
                            </div>
                        </div>
                    </div>
                    </div>
            </section>
            <section id="productos" className='container mt-3'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src="./imagenes/piña.png" alt="Piña Oro Miel"></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='http://localhost:3000'> Piña Oro Miel </a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 5 Reviews</span>
                                </div>
                                <p className='card-text'> $4.000 x Kg </p> 
                                    
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>
       
        
    );
}
 
export default ListaCliente;