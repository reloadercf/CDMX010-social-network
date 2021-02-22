// let counter = 0;
// let btnLike = document.getElementById('btnLikes')

// btnLike.addEventListener('click', (countingClicks) => {
//     countingClicks()
// } )

// function countingClicks(){
//     document.getElementById('likeNumber').innerHTML = ++counter;
// }

export const likeFacebook = () => {
    let counter = 0;
    let imgLike =  document.getElementById('imgLikes');
    let numerOfLikes = document.getElementById('likeNumber');
    // let statusLike = false;

    imgLike.addEventListener('click', e => {
        console.log('Le di like')       
            imgLike.src="./images/likeRelleno.png";        
            numerOfLikes.innerText = ++counter;
            if(counter >= 2){
                console.log('Le quite un like')
                imgLike.src="./images/like.png";
                numerOfLikes.innerText = counter -2;
            }
            // } else if (counter >= 2) {
            //     console.log('Le quite un like')
            //     imgLike.src="./images/like.png";
            //     numerOfLikes.innerText = counter -2;
            // }
            // while(counter =2){
            //     console.log('Le quite un like')
            //     imgLike.src="./images/like.png";
            //     numerOfLikes.innerText = counter -2;
            // }
          
        
    } )
}