import '../css/components.css';
import webpacklogo from '../assets/img/webpack-logo.png'

export const saludar = ( name ) => {
    console.log("Creando eiqueta h1");

    const h1 = document.createElement('h1');

    h1.innerText = `Hola ${name}. como estas?`;

    document.body.append(h1);

    /**------------img--------------- */
    /*const img = document.createElement('img');

    img.src = webpacklogo;

    document.body.append(img);*/
}