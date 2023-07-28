let input = document.querySelector('.input');
let buy = document.querySelector('.buy');
let run = document.querySelector('.sale');
let summa = document.querySelector('.summa');
let procent = document.querySelector('.procent');
let maxSumma = document.querySelector('.max-input');



       

                    buy.addEventListener('click', (e) => {
                        summa.innerText = input.value + "$";
                       
                    })
                    
                    run.addEventListener('click', (e) => {
                        let clear = '';
                         
                        while(input.value < maxSumma.value){
                            
                        

                            if(input.value < maxSumma.value){
                               summa.innerText = maxSumma.value + "$";
                            // summa.write(input.value);
                                     
                            }else{
                               
                                summa.innerText = maxSumma.value + "$"
                            }
                            
                            
                            input.value += 5;
                            
                        }
                        input.value = '';
                    })




