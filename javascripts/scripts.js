var plano = document.querySelector('.ocultar01');
var plano2 = document.querySelector('.ocultar02');
var plano3 =  document.querySelector('.ocultar03');
var plano4 =  document.querySelector('.ocultar04');
var plano5 =  document.querySelector('.ocultar05');
var plano6 =  document.querySelector('.ocultar06');
var plano7 =  document.querySelector('.ocultar07');
var plano8 =  document.querySelector('.ocultar08');

var btn = document.querySelector('#botao1');
var btn2 = document.querySelector('#botao2');

plano.style.display =  'block'
plano2.style.display ='none';
plano3.style.display ='none';
plano4.style.display ='none';
plano5.style.display ='none';
plano6.style.display ='none';
plano7.style.display ='none';
plano8.style.display ='none';


btn.addEventListener('click',function() {

if(plano.style.display === 'block') {
    plano.style.display = 'none';
    plano2.style.display ='none';
    plano3.style.display ='none';
    plano4.style.display ='none';
    plano5.style.display ='none';
    plano6.style.display ='none';
    plano7.style.display ='none';
    plano8.style.display ='block';
    
}
else if(plano8.style.display ==='block'){
    plano.style.display = 'none';
    plano2.style.display ='none';
    plano3.style.display ='none';
    plano4.style.display ='none';
    plano5.style.display ='none';
    plano6.style.display ='none';
    plano7.style.display ='block';
    plano8.style.display ='none';
    
}
else if(plano7.style.display ==='block'){
    plano.style.display = 'none';
    plano2.style.display ='none';
    plano3.style.display ='none';
    plano4.style.display ='none';
    plano5.style.display ='none';
    plano6.style.display ='block';
    plano7.style.display ='none';
    plano8.style.display ='none';
}
else if(plano6.style.display ==='block'){
    plano.style.display = 'none';
    plano2.style.display ='none';
    plano3.style.display ='none';
    plano4.style.display ='none';
    plano5.style.display ='block';
    plano6.style.display ='none';
    plano7.style.display ='none';
    plano8.style.display ='none';
}
else if(plano5.style.display ==='block'){
    plano.style.display = 'none';
    plano2.style.display ='none';
    plano3.style.display ='none';
    plano4.style.display ='block';
    plano5.style.display ='none';
    plano6.style.display ='none';
    plano7.style.display ='none';
    plano8.style.display ='none';
}
else if(plano4.style.display ==='block'){
    plano.style.display = 'none';
    plano2.style.display ='none';
    plano3.style.display ='block';
    plano4.style.display ='none';
    plano5.style.display ='none';
    plano6.style.display ='none';
    plano7.style.display ='none';
    plano8.style.display ='none';
}
else if(plano3.style.display ==='block'){
    plano.style.display = 'none';
    plano2.style.display ='block';
    plano3.style.display ='none';
    plano4.style.display ='none';
    plano5.style.display ='none';
    plano6.style.display ='none';
    plano7.style.display ='none';
    plano8.style.display ='none';
}
else if(plano2.style.display ==='block'){
    plano.style.display = 'block';
    plano2.style.display ='none';
    plano3.style.display ='none';
    plano4.style.display ='none';
    plano5.style.display ='none';
    plano6.style.display ='none';
    plano7.style.display ='none';
    plano8.style.display ='none';
}

});
btn2.addEventListener('click',function() {

    if(plano.style.display === 'block') {
        plano.style.display = 'none';
        plano2.style.display ='block';
        plano3.style.display ='none';
        plano4.style.display ='none';
        plano5.style.display ='none';
        plano6.style.display ='none';
        plano7.style.display ='none';
        plano8.style.display ='none';
        
    }
    else if(plano2.style.display ==='block'){
        plano.style.display = 'none';
        plano2.style.display ='none';
        plano3.style.display ='block';
        plano4.style.display ='none';
        plano5.style.display ='none';
        plano6.style.display ='none';
        plano7.style.display ='none';
        plano8.style.display ='none';
        
    }
    else if(plano3.style.display ==='block'){
        plano.style.display = 'none';
        plano2.style.display ='none';
        plano3.style.display ='none';
        plano4.style.display ='block';
        plano5.style.display ='none';
        plano6.style.display ='none';
        plano7.style.display ='none';
        plano8.style.display ='none';
    }
    else if(plano4.style.display ==='block'){
        plano.style.display = 'none';
        plano2.style.display ='none';
        plano3.style.display ='none';
        plano4.style.display ='none';
        plano5.style.display ='block';
        plano6.style.display ='none';
        plano7.style.display ='none';
        plano8.style.display ='none';
    }
    else if(plano5.style.display ==='block'){
        plano.style.display = 'none';
        plano2.style.display ='none';
        plano3.style.display ='none';
        plano4.style.display ='none';
        plano5.style.display ='none';
        plano6.style.display ='block';
        plano7.style.display ='none';
        plano8.style.display ='none';
    }
    else if(plano6.style.display ==='block'){
        plano.style.display = 'none';
        plano2.style.display ='none';
        plano3.style.display ='none';
        plano4.style.display ='none';
        plano5.style.display ='none';
        plano6.style.display ='none';
        plano7.style.display ='block';
        plano8.style.display ='none';
    }
    else if(plano7.style.display ==='block'){
        plano.style.display = 'none';
        plano2.style.display ='none';
        plano3.style.display ='none';
        plano4.style.display ='none';
        plano5.style.display ='none';
        plano6.style.display ='none';
        plano7.style.display ='none';
        plano8.style.display ='block';
    }
    else if(plano8.style.display ==='block'){
        plano.style.display = 'block';
        plano2.style.display ='none';
        plano3.style.display ='none';
        plano4.style.display ='none';
        plano5.style.display ='none';
        plano6.style.display ='none';
        plano7.style.display ='none';
        plano8.style.display ='none';
    }

    });
