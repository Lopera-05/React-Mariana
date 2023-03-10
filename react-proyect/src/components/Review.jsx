import React from 'react'; // se llama el react
import '../stylesheets/Review.css' // se llaman los estilos 
function Review (props){
    return (
        <div className="box-container">
            <p>{props.texto}</p>
            <div className='box-user'>
            <img src={require(`../images/${props.imagen}.jpg`)}alt="" className='img-rounded' srcset="" />
            <div>
                <h3>{props.nombre}</h3>
                <p>{props.cargo}</p>
            </div>
            </div>
        </div>
    );
}
export default Review;

//`Hola mundo ${nombre} estoy estudiando ${tema}` 