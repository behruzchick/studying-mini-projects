let out = document.querySelector('.out')
let c = document.querySelector('.c');
let equal = document.querySelector('.equal')  

let main1 = document.querySelector('.main-1');
let alltn = document.querySelector('.calc-buttons');



    let btns= [
            
             del = document.querySelector('.del'),
             seven = document.querySelector('.seven'),
             eight = document.querySelector('.eight'),      
             nine = document.querySelector('.nine'),
             fore = document.querySelector('.for'),
             five = document.querySelector('.five'),
             six = document.querySelector('.six'),
             one = document.querySelector('.one'),
             two = document.querySelector('.two'),
             three = document.querySelector('.three'),
             nol = document.querySelector('.nol'),
             nol2 = document.querySelector('.nol-2'),
             toch = document.querySelector('.tochka'),
             multl = document.querySelector('.mult'),
             dec = document.querySelector('.decrement'),
             inc = document.querySelector('.increment'),
      

    ]

    btns.forEach(function(btn){

        btn.addEventListener('click' ,(e) => {  
            let current = e.currentTarget.dataset.id;
            let f = out.innerHTML += current;

        })   
                 c.addEventListener('click', function(){
                 out.innerText = ''
             })
             equal.addEventListener('click',(e) => {
                if(f === "+"){

                }
             })
    })
