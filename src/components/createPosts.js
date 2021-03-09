// vista con cuadrito de text area y boton de publicar
export function createPosts(target){
    const html = `<textarea placeholder="¿Cómo te sientes hoy de maravillos@?" cols="25" rows="8"></textarea>
            <br><br><button>Publicar</button>`

            target.innerHTML = html

};
