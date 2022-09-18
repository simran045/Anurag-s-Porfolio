var navbar = document.querySelector(".nav-bar");
var navbarOpen = false;
var logo = document.querySelector(".logo");
var body = document.querySelector("body");


logo.addEventListener('click',onLogoClick);


function onLogoClick(){
    if(!navbarOpen){
        navbar.style.display="block";
        navbarOpen=true;
    }else{
        navbar.style.display="none";
        navbarOpen=false;
    }
}


const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C', 'C++', 'React',
    'Java', 'git',
     'Node.js','MySQL', 'jQuery','OOPS','Firebase','Visual Studio Code'
];

var tagCloud = TagCloud('.sphere', myTags,{

    radius: window.innerWidth/4,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: true
    
  });;
// window.addEventListener('resize',(e)=>{
//     if(e.width<=700){
//         tagCloud.update({
//             radius:100
//         });
//     }else{
//         tagCloud.update({
//             radius:250
//         });
//     }
// })


var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.sphere').style.color = random_color;