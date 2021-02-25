//
import {bienvenida} from './components/welcome.js'
import {posts} from './components/posts.js'

let nodoDom=document.getElementById('app')
const sesion=document.getElementById('sesion')

// router
let welcome=bienvenida()

const routes = {
    '/' : welcome,
    '/post' : posts(),
    
  };

  nodoDom.innerHTML = routes[window.location.pathname];

  function onNavigate(pathname){
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname
    )
    nodoDom.innerHTML=routes[pathname]
  }

sesion.addEventListener('click',()=>{
  onNavigate('/post')
})