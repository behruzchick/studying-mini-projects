let fastFoodBtn = document.querySelector('.fast_food');
let drinksBtn = document.querySelector('.drinks_btn');
let desertsBtn = document.querySelector('.deserts_btn');

let foodCard1 = document.querySelector('.food-card-1');
let desertCard = document.querySelector('.food-card-3');
let drinkCard = document.querySelector('.food-card-2');


fastFoodBtn.addEventListener('click', function () {
    foodCard1.style = 'display:block; display:flex;'

    drinkCard.style = 'display:none;'
    desertCard.style = 'display:none;'

    fastFoodBtn.style = 'backround:white; color:black;'
    fastFoodBtn.classList.add('active');
    drinksBtn.style = ''
    drinksBtn.classList.remove('active');
    desertsBtn.style = ''
    desertsBtn.classList.remove('active');

})
drinksBtn.addEventListener('click', function () {
    drinkCard.style = 'display:block; display:flex;'

    fastFoodBtn.style = ''
    fastFoodBtn.classList.remove('active');
    

    desertsBtn.style = ''
    desertsBtn.classList.remove('active');

    drinksBtn.style = 'backround:white; color:black;'
    drinksBtn.classList.add('active');
    desertCard.style = 'display:none;'
    foodCard1.style = 'display:none;'
})

desertsBtn.addEventListener('click', function () {
    desertCard.style = 'display:block; display:flex;'

    fastFoodBtn.style = ''
    fastFoodBtn.classList.remove('active');
    drinksBtn.style = ''
    drinksBtn.classList.remove('active');

    desertsBtn.style = 'backround:white; color:black;'
    desertsBtn.classList.add('active');


    drinkCard.style = 'display:none;'
    foodCard1.style = 'display:none;'
})



let container = document.querySelector('.conatainer');
let plusBtn = document.querySelector('.plus_btn');
let out = document.querySelector('.out');
let header = document.querySelector('.header');
plusBtn.addEventListener('click', function () {
    out.innerHTML = `
        <div class="out-block">
        <h2 style="color:black">New product</h2>
            <div class="product_select">
                <button class="select_foods">Foods</button>
                <button class="select_drinks">Drinks</button>
                <button class="select_deserts">Deserts</button>
            </div>
            <div class="new_product_actions">
                <input type="text" class="url_img" placeholder="Url image">
                <input type="text" class="name_product" placeholder="Name product">
                <input type="text" placeholder="Sale" class="sale">
            </div>
            <button class="new_project_btn">Add product</button>
    </div>
        `
    let newFoodsBtn = out.querySelector('.select_foods').addEventListener('click', function f1(){})
    let newDrinksBtn = out.querySelector('.select_drinks');
    let newDesertsBtn = out.querySelector('.select_deserts');

    let newFoodsImg = out.querySelector('.url_img');
    let newFoodsName = out.querySelector('.name_product');
    let newFoodsSale = out.querySelector('.sale');

    let newProjBtn = out.querySelector('.new_project_btn');
    let block = document.querySelector('.block-1');

    newProjBtn.addEventListener('click', function(){
        if(f1()){
            foodCard1.appendChild(newBlock)
        }
        function f1(){

            // newFoodsBtn.style = 'background:dimgray;'

            let newBlock = document.createElement('div');
            newBlock.classList.add('.block-1');
            newBlock.innerHTML = `
            <img src="${newFoodsImg.value}"
               alt="">
                 <h3>
                ${newFoodsName.value}
                 </h3>
             <p>${newFoodsSale.value}$</p>
            `
        }
    })


    header.appendChild(out);

})

