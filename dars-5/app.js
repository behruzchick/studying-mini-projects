let btn = document.querySelector('.btn');
let outDiv = document.querySelector('.out');
let xBtn = document.querySelector('.x-btn');
    btn.addEventListener('click', function(){
        outDiv.classList.toggle('anim');
        outDiv.style = 'display:block;'
        btn.style = 'display:none;'
        xBtn.style = 'display:block;'
    })
    xBtn.addEventListener('click', function(){
        outDiv.style = 'display:none;'
        btn.style = 'display:block;'
        xBtn.style = 'display:none;'
    })