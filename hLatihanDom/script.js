//cara membuat button
// const button = document.createElement('button');
// const textButton = document.createTextNode('Warna JS');

// button.appendChild(textButton);

// const h1 = document.getElementsByTagName('h1')[0];
// h1.appendChild(button);

const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function (){
    document.body.classList.toggle('biru-muda');
}

const newButton = document.createElement('button');
const newTextButton = document.createTextNode('ACAK WARNA BACKGROUND');
newButton.appendChild(newTextButton);
newButton.setAttribute('type', 'button');

tUbahWarna.after(newButton);

newButton.addEventListener('click', function(){
    //untuk mengacak nomor rgb dengan nilai antara 1 sampai 255
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +' )';
});

sHijau.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +' )';
});

sBiru.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +' )';
});

document.body.addEventListener('mousemove', function(){
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);

    document.body.style.backgroundColor = 'rgb('+ xPos +' , '+ yPos +', 100)';
});