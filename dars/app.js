// let age = 14;

// if(age >= 16){
//     console.log('Passport ol')
// }else{
//     console.log('Yoshingiz kichkina!');
// }
// const button = document.querySelector('button');

//    button.addEventListener('click', (e) =>{

 

//         let output = document.querySelector('.output');
//         let input = document.querySelector('input');
        

//         if(input.value >= 16 && status == false){
//             output.innerHTML = "Забери"
//         } 
//         else if(input.value == 16){
//             output.innerHTML = "Забери"
//         }else{
//             output.innerHTML = "ТЫ еще маленький"
//         }
//       }) 
// let i = 0;

// while(i < 10){
//     console.log(i);
//     i++;
// }


function passStol(age, status){
            if(age <= 16 && status == false){   
                 for(let i =0; i < 16; i++){
                    console.log(i + " Hali kichkinasan")
                } 
            }else if (age < 16  && status == false){
                console.log('Yoshing yetmaydi');             
            }else {

                
            }
        }


    


passStol(13, false);