//event Handler
//tidak direkomendasikan

//addEventsListener() yang direkomendasikan

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){
    const elBaru = document.createElement('p');
    const txBaru = document.createTextNode('Item 4');

    elBaru.appendChild(txBaru);

    p4.appendChild(elBaru);
});

//menentukan target mana apabila di klik akan menambahkan li baru
const item1 = document.querySelector('section#b ul li');

//method addEventListener
item1.addEventListener('click', function(){
    //membuat element baru
    const liBaru = document.createElement('li');
    //membuat text baru
    const teBaru = document.createTextNode('Item Next');

    //text baru disimpan dalam elemen baru
    liBaru.appendChild(teBaru);

    //tentukan lokasi penyimpanan elemen baru
    const targetBaru = document.querySelector('section#b ul');

    targetBaru.appendChild(liBaru);
});