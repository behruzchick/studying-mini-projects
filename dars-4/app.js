// function fync(){
//     console.log(this)
// }
// fync()


// function func(){
//         return{
//          name : "Behruz",
//            ref(){
//               return this
//              }   
//        }
// }






// let user = func()
// console.log(user.ref().name);
// function fync(){
//     console.log(this)
// }
// fync()
// function fync(){
//     console.log(this)
// }
// fync()





// let btn = document.querySelector('.b-1');
// let btn2 = document.querySelector('.b-2');
// btn.onclick = f1;

//   function f1(color, num){
//     console.log(this);
//     this.bagckroundColor = color
//   }

// // f1.call(btn);  

// // btn2.onclick =  function(){
// //   f1.apply([btn, '#00000', 5555])
// // }

// let a = f1.bind(btn, 'red' , 34324);
// let b = f1.bind(btn2, 'blue', 4243);

// btn2.onclick = f1;

// function hello(){
//   console.log(this);
// }

// let user = {
//     name:'Behruz',
//     age:16,
//     greet: function (job , hobby , hobby2){
//       console.group(`${this.name} info`);
//       console.log(`Name is ${this.name}`);
//       console.log(`Age is ${this.age}`);
//       console.log(`Hobyy is ${this.hobby}`);
//       console.log(`Hoby is ${this.hobby2}`);
//     },
//     say:hello.bind()

// }


