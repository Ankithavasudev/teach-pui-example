// JS file for Learn More Page

let images = ['assets/LearnMore/Learnmore_coverimg.jpg', 'assets/LearnMore/Learnmore_coverimg2.jpg', 'assets/LearnMore/Learnmore_coverimg3.jpg'];
let altimages = ['Renacer de Chamanga Community House, Acuetemos Ecuador', 'Rowing Boathouse for Row New York', '1.3-mile-long, art-filled corridor at Crenshaw Boulevard, LA, USA'];

let index = 0;

// Cover images Carousel: 3 images
function imageCarousel() {
    index = index + 1;
    if (index == images.length) {
        index = 0;
    }
    let newImg = document.getElementById("coverImage");
    newImg.src = images[index];
    newImg.alt = altimages[index];
    // console.log(newImg.alt);
}

setInterval(function(){imageCarousel()}, 2500);

// Textillate JS Library animation for text on cover images
$('.caption2').textillate({  
    in: { effect: 'fadeInLeft',
        sync: 'true',
        initialDelay: 0,
        },
    sync: 'true',
        },   
);

$('.caption1').textillate({  
    in: { effect: 'fadeInRight',
        sync: 'true',
        // minDisplayTime: 500,
        initialDelay: 0,
        },
    sync: 'true',
        },   
);

// Counting animation: Homeless Population
let counts1 = setInterval(updated1, 10);
let upto1=149999500;

function updated1() {
    let count = document.getElementById("counter1");
    count.innerHTML=++upto1;
    if (upto1===150000000)
    {
        clearInterval(counts1);
    }
}

// Counting animation: Lacking access to clean water
let counts2 = setInterval(updated2);
let upto2=1699999000;

function updated2() {
    let count = document.getElementById("counter2");
    count.innerHTML=++upto2;
    if (upto2===1700000000)
    {
        clearInterval(counts2);
    }
}

// let numberContainer4 = document.querySelector("#counter4");
// window.addEventListener('scroll', () => {
//     const scrolled = window.scrollY;
//     const elementPosition = numberContainer4.offsetTop;
    
//     if(scrolled == elementPosition){
//         let counts4 = setInterval(updated4);
//         let upto4=0;
//     }
// })

// Need to figure out how to trigger on scroll!
// Counting animation: Countries in crises 
let container4 = document.querySelector("#counter4");
console.log(container4.scrollTop);
if (container4.scrollTop == 0) {
    let counts4 = setInterval(updated4, 40);
    let upto4=0;

    function updated4() {
        let count = document.getElementById("counter4");
        count.innerHTML=++upto4;
        if (upto4===69)
        {
            clearInterval(counts4);
        }
    }
}

// window.addEventListener('scroll', (updated4()));



