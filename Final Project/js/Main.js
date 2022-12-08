// JS file for Main Page

// Textillate JS Library animation for text on cover images
$('.caption1').textillate({ 
    in: { effect: 'fadeInRight',
        sync: 'true',
        initialDelay: 0,
        },
    sync: 'true',
        }  
);

$('.caption2').textillate({ 
    loop: true, 
    in: { effect: 'fadeInLeft',
        sync: 'true',
        initialDelay: 0,
        },
    out: { effect: 'fadeOutRight',
    sync: 'true',
        },   
});

//Display Shelter Projects
function displayShelter(value) {
    let title = document.querySelector("#projectName1");
    // removing placeholder once an Image is selected
    if (title.innerHTML == 0) {
        let para = document.querySelector(".placeholderText");
        para.remove();
    }; 
    // console.log("Image " + value  + " was Clicked");
    console.log(shelter[value]);
    let project = shelter[value];
    //project Title
    let projectName = document.querySelector("#projectName1");
    projectName.innerHTML = project.name;
    //project Year
    let projectYear = document.querySelector("#projectYear1");
    projectYear.innerHTML = "Year: "+ project.year;
    //project Location
    let projectLocation = document.querySelector("#projectLocation1");
    projectLocation.innerHTML = "Location: " + project.location;
    //project Architect
    let projectArchitect = document.querySelector("#projectArchitect1");
    projectArchitect.innerHTML = "Designer: " + project.architect;
    //project Description
    let projectDescription = document.querySelector("#projectDescription1");
    projectDescription.innerHTML = project.description;
    //project Images
    let projectImage1 = document.querySelector("#shelterImage1");
    projectImage1.src = "assets/Shelter/Shelter_" + value + ".1.jpg";
    projectImage1.style.width='100%';
    projectImage1.style.height='auto';
    projectImage1.alt = project.altText1;
    console.log(projectImage1.alt);
    let projectImage2 = document.querySelector("#shelterImage2");
    projectImage2.src = "assets/Shelter/Shelter_" + value + ".2.jpg";
    projectImage2.style.width='100%';
    projectImage2.style.height='auto';
    projectImage2.alt = project.altText2;
    console.log(projectImage2.alt);
}

//Display Community Projects
function displayCommunity(value) {
    let title = document.querySelector("#projectName2");
    // removing placeholder once an Image is selected
    if (title.innerHTML == 0) {
        let para = document.querySelector(".placeholderText2");
        para.remove();
    }; 

    console.log(community[value]);
    let project = community[value];
    //project Title
    let projectName = document.querySelector("#projectName2");
    projectName.innerHTML = project.name;
    //project Year
    let projectYear = document.querySelector("#projectYear2");
    projectYear.innerHTML = "Year: " + project.year;
    //project Location
    let projectLocation = document.querySelector("#projectLocation2");
    projectLocation.innerHTML = "Location: " + project.location;
    //project Architect
    let projectArchitect = document.querySelector("#projectArchitect2");
    projectArchitect.innerHTML = "Designer: " + project.architect;
    //project Description
    let projectDescription = document.querySelector("#projectDescription2");
    projectDescription.innerHTML = project.description;
    //project Images
    let projectImage1 = document.querySelector("#communityImage1");
    projectImage1.src = "assets/Community/Community_" + value + ".1.jpg"
    projectImage1.style.width='100%';
    projectImage1.style.height='auto';
    projectImage1.alt = project.altText1;
    console.log(projectImage1.alt);
    let projectImage2 = document.querySelector("#communityImage2");
    projectImage2.src = "assets/Community/Community_" + value + ".2.jpg"
    projectImage2.style.width='100%';
    projectImage2.style.height='auto';
    projectImage2.alt = project.altText2;
    console.log(projectImage2.alt);
}

//Display Water & Energy Projects
function displayWater(value) {
    let title = document.querySelector("#projectName3");
    // removing placeholder once an Image is selected
    if (title.innerHTML == 0) {
        let para = document.querySelector(".placeholderText3");
        para.remove();
    }; 

    console.log(water[value]);
    let project = water[value];
    //project Title
    let projectName = document.querySelector("#projectName3");
    projectName.innerHTML = project.name;
    //project Year
    let projectYear = document.querySelector("#projectYear3");
    projectYear.innerHTML = "Year: " + project.year;
    //project Location
    let projectLocation = document.querySelector("#projectLocation3");
    projectLocation.innerHTML = "Location: " + project.location;
    //project Architect
    let projectArchitect = document.querySelector("#projectArchitect3");
    projectArchitect.innerHTML = "Designer: " + project.architect;
    //project Description
    let projectDescription = document.querySelector("#projectDescription3");
    projectDescription.innerHTML = project.description;
    //project Images: src + altTet
    let projectImage1 = document.querySelector("#waterImage1");
    projectImage1.src = "assets/Water/Water_" + value + ".1.jpg"
    projectImage1.style.width='100%';
    projectImage1.style.height='auto';
    projectImage1.alt = project.altText1;
    console.log(projectImage1.alt);
    let projectImage2 = document.querySelector("#waterImage2");
    projectImage2.src = "assets/Water/Water_" + value + ".2.jpg"
    projectImage2.style.width='100%';
    projectImage2.style.height='auto';
    projectImage2.alt = project.altText2;
    console.log(projectImage2.alt);
}

//Display Political,Policy and Planning Projects
function displayPolitics(value) {
    let title = document.querySelector("#projectName4");
    // removing placeholder once an Image is selected
    if (title.innerHTML == 0) {
        let para = document.querySelector(".placeholderText4");
        para.remove();
    }; 
    
    console.log(politics[value]);
    let project = politics[value];
    //project Title
    let projectName = document.querySelector("#projectName4");
    projectName.innerHTML = project.name;
    //project Year
    let projectYear = document.querySelector("#projectYear4");
    projectYear.innerHTML = "Year: " + project.year;
    //project Location
    let projectLocation = document.querySelector("#projectLocation4");
    projectLocation.innerHTML = "Location: " + project.location;
    //project Architect
    let projectArchitect = document.querySelector("#projectArchitect4");
    projectArchitect.innerHTML = "Designer: " + project.architect;
    //project Description
    let projectDescription = document.querySelector("#projectDescription4");
    projectDescription.innerHTML = project.description;
    //project Images: src, altText
    let projectImage1 = document.querySelector("#politicsImage1");
    projectImage1.src = "assets/Politics/Politics_" + value + ".1.jpg"
    projectImage1.style.width='100%';
    projectImage1.style.height='auto';
    projectImage1.alt = project.altText1;
    console.log(projectImage1.alt);
    let projectImage2 = document.querySelector("#politicsImage2");
    projectImage2.src = "assets/Politics/Politics_" + value + ".2.jpg"
    projectImage2.style.width='100%';
    projectImage2.style.height='auto';
    projectImage2.alt = project.altText2;
    console.log(projectImage2.alt);
}