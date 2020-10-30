// let' do the fun stuff, i.e animations !!!!
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// moving animation Event
container.addEventListener('mousemove', (e) => {
    // console.log(e.pageX, e.pageY);
    let xAxis = (window.innerWidth /2 - e.pageX) / 25;
    let yAxis = (window.innerHeight /2 - e.pageY) /25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

} );