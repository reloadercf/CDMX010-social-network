// leer los post de local storage
// import {onNavigate} from './main.js'

export function posts (target) {
    const template = `<div><button type="submit" class="miniboton" id="createBtn">Crear Publicación</button></div>
            <h2>Bienvenida usted</h2>`;
            
    target.innerHTML = template
    
      //
    const boton = document.querySelector('.miniboton')
    boton.addEventListener('click',()=>{
        console.log("hola");
    })
};

// export const postDom= document.getElementById('createBtn')

// postDom.addEventListener('click', (e) => {
//     e.preventDefault();
//     onNavigate('/create-post')
//     // console.log(postDom);
//   })
// export const createBtn= document.querySelector ('button')

// createBtn.addEventListener('click', function(){
//     onNavigate('/muro')
// });


