const skils =[{
  img: 'technology.png',
  skillName: 'Team work and colaboration',
  details:'a grate time player and team leader , built and collabolated with other muiltiplpe time'
},{
  img:'illustrator.png',
  skillName: '',
  details: ''
},{
  img:'app-development.png',
  skillName:'' ,
  details:''
},{
  img:'software-engineer.png',
  skillName:'',
  details:' '
},{
  img:'database.png',
  skillName: 'A database administrator intern',
  details: 'worked with data bases for a while and proficient in designing databases'

}
];


let postHTML = '';

skils.forEach((skil)=>{
  postHTML += `<div class="main-skil">
      <img src="${skil.img}" alt="" class="skil-img">
      <h3 class="skil-title">${skil.skillName}</h3>
      <p>${skil.details}</p>
    </div>`

});

document.querySelector('.skills-container').innerHTML = postHTML;

const technology = [
  {
    img:'icons8-html-96.png',
    info:'used HTML for the bone stracture of the site'
  },{
    img: 'icons8-css-96.png',
    info: 'css to give the site some styles'
  },{
    img: 'icons8-javascript-96.png',
    info:'javascript to make it more interacive '
  }
];
let pushHTML = ''
technology.forEach((tech)=>{
  pushHTML +=`
      <div>
        <img src=${tech.img} alt="">
        <p class="technology-detail">${tech.info}</p>
      </div>
  `
});
document.querySelector('.technologies-used').innerHTML = pushHTML;