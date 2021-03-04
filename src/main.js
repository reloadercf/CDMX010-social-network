//
import {bienvenida} from './components/welcome.js'
import {posts} from './components/posts.js'
import {createPosts} from './components/createposts.js'

let nodoDom=document.getElementById('app')
const sesion=document.getElementById('sesion')
const postDom=document.getElementById('createBtn')

// router
let welcome=bienvenida();
let post= posts();
let muro=createPosts();


const routes = {
    '/' : welcome,
    '/posts' : post,
    '/createPosts' : muro,
  };

  nodoDom.innerHTML = routes[window.location.pathname];

  function onNavigate(pathname){
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname
    )
    nodoDom.innerHTML=routes[pathname]
  //   btnCreate();
  }

sesion.addEventListener('click',()=>{
  onNavigate('/posts')
  // el nodo padre se llama urls y el nodo hijo sesion
  // borrar el elmento con el id sesion y crear 2 elementos hijos, uno para cerrar sesion y otro para crear post 
  // borras con un remove child
  // creas elementos con appenChild
})

// window.onload= function(){
// postDom.addEventListener('click',()=>{
//    onNavigate('/muro')
//  });
// }
postDom.addEventListener('click', function(){
  // e.preventDefault();
  onNavigate('/createPosts')
})


