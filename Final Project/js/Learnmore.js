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
        initialDelay: 0,
        },
    sync: 'true',
        },   
);

// Counting animation: Homeless Population
let counters = document.querySelectorAll('.count');
let speed = 500;

function counterScroll() {
    console.log("counterRun");
    counters.forEach((counter) => {
        let updateCount = () => {
            let target = parseInt(counter.getAttribute('data-target'));
            let count = parseInt(counter.innerText);
            let increment = Math.trunc(target/speed);

            if (count<target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
    updateCount();
    })
}
window.onscroll = counterScroll();

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

// Counting animation: Countries in crises 
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