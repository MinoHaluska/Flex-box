
const container = document.querySelector('.moveContainer');

for(let i = 0; i <= 18; i++){
    const blocks = document.createElement('div');
    blocks.classList.add('block');
    container.appendChild(blocks);
}

let myContainerWidth = document.querySelector('.moveContainer').scrollWidth;
let myContainerHeight = document.querySelector('.moveContainer').scrollHeight;



function animateBlocks(){
    
    anime({
        targets: '.block',
        translateX: function(){
            return anime.random(-(myContainerWidth/2),(myContainerWidth/2));
        },
        translateY: function(){
            return anime.random(-(myContainerHeight),(myContainerHeight));
        },
        scale: function(){
            return anime.random(1,3);
        },

        easing: 'linear',
        duration: 9000,
        delay: anime.stagger(10),
        complete: animateBlocks
    })
}

animateBlocks();