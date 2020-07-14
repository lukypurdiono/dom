// DOM Selection

// document.getElementById() -> element
const judul = document.getElementById('judul');

judul.style.color = 'white';
judul.style.backgroundColor = 'black';
judul.style.textAlign = 'center';
judul.innerHTML = 'My New Posts';

// document.getElementsByTagName () -> HTMLCollection
const p = document.getElementsByTagName('p');
//dalam method getElementsByTagName mengembalikan HTMLCollection, sehingga nilai dalam bentuk array.
//untuk memanipulasi DOM harus ditetapkan index yang akan diubah p[0]

//menggunakan manual per index
// p[0].style.backgroundColor = 'black';
// p[0].style.color = 'white';
// p[1].style.backgroundColor = 'black';
// p[1].style.color = 'white';

//menggunakan perulangan
for( let i = 1; i < p.length; i++){
    p[i].style.backgroundColor = 'black';
    p[i].style.color = 'white';
}

//document.getElementsByClassName()

const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Judul Artikel 1';
p1.style.backgroundColor = 'black';
p1.style.color = 'white';