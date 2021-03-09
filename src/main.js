//
import {bienvenida} from './components/welcome.js'
import {posts} from './components/posts.js'
import {createPosts} from './components/createposts.js'

const appElement =document.getElementById('app')
const sesion=document.getElementById('sesion')
const form= document.getElementById('form')
const useremail= document.getElementById('useremail')
const password= document.getElementById('password')
const postDom=document.getElementById('createBtn')

// router
//let welcome=bienvenida();
//let post= posts();
//let muro=createPosts();

const routes = {
    '/' : bienvenida,
    '/posts' : posts,
    '/createPosts' : createPosts,
  };

const welcomeComponent = routes[window.location.pathname];
welcomeComponent(appElement)

  function onNavigate(pathname){
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname
    )

    const component = routes[pathname] 
    component(appElement)
  }

sesion.addEventListener('click',()=>{
  onNavigate('/posts')
  // el nodo padre se llama urls y el nodo hijo sesion
  // borrar el elmento con el id sesion y crear 2 elementos hijos, uno para cerrar sesion y otro para crear post 
  // borras con un remove child
  // creas elementos con appenChild
})
