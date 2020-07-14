//DOM Manipulation
// document.createElement();
// document.createTextNode;
// node.appendChild();
// node.insertBefore();
// parentNode.removeChild();
// parentNode.replaceChild();


//menambahkan paragraf baru dibawah paragraf 3

//buat elemen baru
const el = document.createElement('p');

//buat tulisan/text
const tks = document.createTextNode('Paragraf baru');

//simpan tulisan/teks ke dalam elemen
el.appendChild(tks);

//simpan elemen yang sudah ada tulisan ke dalam section A
const sectionA = document.getElementById('a');
sectionA.appendChild(el);

el.style.backgroundColor = 'lightBlue';






//membuat elemen LI baru
const newLi = document.createElement('li');

//membuat tulisan ke dalam LI baru
const textLi = document.createTextNode('item 3/2');

//simpan tulisan ke dalam elemen
newLi.appendChild(textLi);


const ul = document.querySelector('section#b ul');
const li = ul.querySelector('li:nth-child(2)');
 
ul.insertBefore(newLi, li);
newLi.style.backgroundColor = 'yellow';


//removeChild();

const tagA = document.getElementsByTagName('a')[0];
sectionA.removeChild(tagA);

//replaceChild();


const hBaru = document.createElement('h2');
const textBaru = document.createTextNode('text Baru');
hBaru.appendChild(textBaru);

const B = document.getElementById('b');
const pOld = B.querySelector('p');

B.replaceChild(hBaru, pOld);
hBaru.style.backgroundColor = 'black';



