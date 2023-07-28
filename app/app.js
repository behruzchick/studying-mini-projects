let add = document.querySelector('.add')
let input = document.querySelector('.input');
// let p = document.querySelector('.out-p');
// let deletebtn = document.querySelector('.delete')
let outDiv = document.querySelector('.out');   





    add.addEventListener('click', (e) => {

    if(input.value <= ''){
        input.style.borderColor = 'red'
        input.setAttribute('placeholder', "Поля не должен быть пустым!")
        return false;
    }else{
        input.style.borderColor = 'black'
        
    }

    let value = input.value;
    let span = document.createElement('div');
    span.classList.add('.text-s');

        span.innerHTML = `
        <div class="act">
             <div class="h">
                  <p class="out-p">${value}</p>
                  <button class="delete"><i class="fa-solid fa-trash"></i></button>
             </div>
            <div class="but">
               <button class="edit"><i class="fa-solid fa-pen"></i></button>
               
            </div>
        </div>
        `
        outDiv.appendChild(span);  



      let deletebtn = span.querySelector('.delete');

       deletebtn.addEventListener('click', (e) => {
           span.remove();
       })
    
       let editBtn = span.querySelector('.edit');
       let p = span.querySelector('.out-p');


       editBtn.addEventListener('click', (e) => {
        
        let check = document.querySelector('.check');
        let inp = document.createElement('input');
        inp.classList.toggle('edit-inp')
        
        editBtn.style = 'visibility: hidden;'

        check.style = 'display:block;'

        check.addEventListener('click', (e) => {
            
            p.innerText = inp.value
            inp.remove()
            check.style = 'display:none;'
            editBtn.style = 'visibility: visible;'

        })

            
    
        
        span.appendChild(inp);
       })
        let pin = span.querySelector('.like');





    })

        let clearBtn = document.querySelector('.x-btn');

        clearBtn.addEventListener('click', (e) => {
            let clear = ''
            input.value = clear;
        })


















        

        

//   deletebtn.addEventListener('click', (e)=> {
//     p.classList.toggle('displayed');
//     deletebtn.classList.toggle('displayed');


// })