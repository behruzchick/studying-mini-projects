
const button = document.querySelector('button').addEventListener('mouseover' ,openmenu);
 document.querySelector('button').addEventListener('mouseout' ,closeMenu);
const dropList = document.querySelector('.drop');


console.log("ddd");

        function openmenu(){
            dropList.classList.remove('displayed')
            let menu = document.querySelector('.menu').innerHTML = `
            <a class="text" href="">Link</a>
            <a class="text" href="">Link 1</a>
            <a class="text" href="">Link 2</a>
            <a class="text" href="">Link 3</a>
            <a class="text" href="">Link 4</a>
            `
            dropList.classList.toggle('hovered');
        }
       function closeMenu() {
            let menu = document.querySelector('.menu').innerHTML = ""

        }
        
        // function closeMenu(){
            
        //     if(document.querySelector('button').addEventListener('mouseover' ,openmenu)){
        //      let menu = document.querySelector('.menu').innerHTML =  `
        //     <a class="text" href="">Link</a>
        //     <a class="text" href="">Link 1</a>
        //     <a class="text" href="">Link 2</a>
        //     <a class="text" href="">Link 3</a>
        //     <a class="text" href="">Link 4</a>

        //     `

        //     }else{

        //     let menu = document.querySelector('.menu').innerHTML = ""

        //     }

        // }
            
        