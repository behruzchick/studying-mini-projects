let dropBtn = document.querySelector('.drop');
let listCont = document.querySelector('.disp-cont');
let listLinks = document.querySelector('.disp')
let dropL = document.querySelector('.drop-l');
let tText = document.querySelector('.p-text');
let inp = document.querySelector('.inp');


 dropBtn.addEventListener('mouseover', f1);
      function f1() {
        listCont.style = 'display:block;'
        listLinks.style = 'display:block;'
      }

 

 let btn = dropBtn.addEventListener('mouseover', f1);

 let l = listCont.addEventListener('mouseover', f5)
 let l2 = listLinks.addEventListener('mouseover', f5)
    

    
        
    dropBtn.addEventListener('mouseout', (e) => {
            if(l){
                  listCont.style = 'display:none;'
                  listLinks.style = 'display:none;'
            }
    });


           

        
        inp.addEventListener('click', fInptut);

           function fInptut(){
            tText.innerHTML = ''
           }



        //    -----------med

           let menBtn = document.querySelector('.fa-bars').addEventListener('click', menFunc);
           let nav = document.querySelector('.hm');
           let ulList = document.querySelector('.hm');
           let xBtn = document.querySelector('.x-btn');
           
          function menFunc(){


             ulList.classList.toggle('ham-bg');
             ulList.style = 'display:block;'
             xBtn.style = 'display:block;'
            
          }
          xBtn.addEventListener('click', closeHam);

               function closeHam(){
                nav.style = 'display:none;'
                xBtn.style = 'display:none;'
               }  
               
       function f4(){

       } 
       function f5(){

       } 
