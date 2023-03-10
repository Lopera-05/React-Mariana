import React from 'react';
import '../stylesheets/Card.css'

function Card (props){
    return (
        <main className='container'>
        <div className='diamante'>
            <img src={require(`../images/${props.imagenprincipal}.jpg`)} alt="" srcset="" />
        </div>
        <div className='info'>
            <h2>{props.textoprincipal}</h2>
            <p className='parrafo'>{props.parrafoinicial}
            </p>
            <div className='texto'>
                <div className='icono1'>
                <img src={require(`../images/${props.imgEdad}`)}alt="" className='icono' srcset="" />
                    <p className='tit-color'>{props.edad}</p>
                </div>
                <div className='icono2'>
                <img src={require(`../images/${props.imgCarrera}`)}alt="" className='reloj' srcset="" />
                    <p className='titulo2'>{props.profesion}</p>
                </div>
            </div>
        </div>
        <div className='linea'>
        </div>
        <div className='info-hombre'>
        <img src={require(`../images/${props.avatar}.jpg`)}alt="" className='julie' srcset="" />
            <p>{props.nombre}</p>
        </div>
    </main>
    );
}
export default Card;