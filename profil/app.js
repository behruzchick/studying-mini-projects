let btn = document.querySelector('.btn');
let inp = document.querySelector('.inp');
let img = document.querySelector('.img');


    btn.addEventListener('click', function(){
        if(inp.style = 'display:block;'){

        }else{
            inp.style = 'display:none;'
        }
        
        img.setAttribute('src', inp.value)
    })