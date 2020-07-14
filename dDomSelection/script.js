//document.querySelector() -> element

const p4 = document.querySelector('#b p');
p4.style.backgroundColor = 'black';
p4.style.color = 'white';

const p2 = document.querySelector('section#b ul li:nth-child(2)');
p2.style.backgroundColor = 'yellow';


//documnet.querySelectorAll()

const p = document.querySelectorAll('p');
for(let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue';
}