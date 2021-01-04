//movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//items
const title=document.querySelector('.title');
const sneaker=document.querySelector('.sneaker img');
const purchase=document.querySelector('.purchase button');
const description=document.querySelector('.info h3');
const sizes=document.querySelector('.sizes');

//Moving animation event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX)/10;
    let yAxis = (window.innerHeight / 2 - e.pageY)/10;
    card.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate in
container.addEventListener('mouseenter', (e) =>{
    card.style.transition = 'none'; 
    //popout
    title.style.transform= 'translateZ(150px)';
});

//Animate out
container.addEventListener('mouseleave', (e) => {
    card.style.transition= 'all 1.5 ease';
    card.style.transform= `rotateY(0deg) rotateX(0deg)`;
    //pop in
    title.style.transform= 'translateZ(0px)';
});