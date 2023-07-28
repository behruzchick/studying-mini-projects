let name1 = document.querySelector('.name');
let pass = document.querySelector('.pass'); 
let check = document.querySelector('#btn-c');
let btn = document.querySelector('.btn');
let closeCheck = document.querySelector('.close-eyes')
check.addEventListener('click', function f1(){
    pass.setAttribute('type', 'text');
    check.style = 'display:none;'
    closeCheck.style = 'display:block;'
});
closeCheck.addEventListener('click', function(){
    pass.setAttribute('type', 'password');
    check.style = 'display:block;'
    closeCheck.style = 'display:none;'
})
    



    
    btn.addEventListener('click', function() {
        
           let name = name1.value;
           let password = pass.value;
         Object ={
            name,
            password
        }
        console.log(Object)
        if(pass.value.length <= 8){
            pass.style = 'border:3px solid red'
        }else{
            pass.style = 'border: 1px solid dimgray;'
        }
        
    })



    

