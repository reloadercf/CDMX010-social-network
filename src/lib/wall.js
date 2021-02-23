//This is the wall
export const wall = () => {
    let html3 =`
    <div class='wall'>
        <div>
            <img src='src/assets/logo-jalo.png'>
            <img src='src/assets/logo-jalo.png'>
        </div>
        <div>
            <form>
                <input type='text' placeholder='Escribe...'></input>
                <button id='hold'>Publicar</button>
            </form>
        </div>
        <div>
            <form>
                <input type='text' placeholder='Escribe...'></input>
                <button id='hold'>Publicar</button>
            </form>
        </div>
        <div>
            <form>
                <section id='theText'></section>
            </form>
            <img src='src/assets/me-enviaja.png'>
        </div>    
    </div>
    `
    return html3
} 

//faltan las promesas