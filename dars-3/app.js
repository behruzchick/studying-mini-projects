let box = document.querySelector('.box');
let leftBtn = document.querySelector('.left');
let rightBtn = document.querySelector('.right')
let upBtn = document.querySelector('.up');
let bottomBtn = document.querySelector('.bottom');
let main = document.querySelector('.main');
  leftBtn.addEventListener('click', (e) => {
    
   box.style.marginRight  =  400 + 'px'
     
  })
  rightBtn.onclick = function(){
     box.style.marginLeft = 400 + 'px'
    
}
upBtn.onclick = function(){
  box.style.marginBottom += 200 + 'px'
 
}
bottomBtn.onclick = function(){
  box.style.marginTop += 200 + 'px'
 
}
      

