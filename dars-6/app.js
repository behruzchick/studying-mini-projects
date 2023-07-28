const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "https://simplyhomecooked.com/wp-content/uploads/2022/08/buttermilk-pancakes-2.jpg",
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/htoyiqwv/c26dd28b-e700-42c9-89f3-fb6171e1a86d.jpg",
        desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "https://www.menu.anneson.com/images/item-3.jpeg",
        desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "https://www.menu.anneson.com/images/item-4.jpeg",
        desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "https://www.menu.anneson.com/images/item-5.jpeg",
        desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "https://www.menu.anneson.com/images/item-6.jpeg",
        desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "https://www.menu.anneson.com/images/item-7.jpeg",
        desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "https://www.menu.anneson.com/images/item-8.jpeg",
        desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "https://www.menu.anneson.com/images/item-9.jpeg",
        desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    },
    {
        id: 10,
        title: "bison steak",
        category: "dinner",
        price: 22.99,
        img: "https://www.menu.anneson.com/images/item-7.jpeg",
        desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    },
];

// const newMenu1 = menu.filter(sale => sale.price >= 15)
// const newArray = menu.filter(type => type.category == "shakes")
// console.log(newArray);

// function filter(){
//  let fill =  menu.filter(menu.price.length >= 15);

// }
let sectionCenter = document.querySelector(".section-center")

window.addEventListener("DOMContentLoaded", function () {
    displayMenuItem(menu)
})

function displayMenuItem(breakFastFillter) {
    let displayMenu = breakFastFillter.map((item) => {
        return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$ ${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`
    })
    displayMenu = displayMenu.join("")

    sectionCenter.innerHTML = displayMenu;
}

let allBtn = document.querySelector('.all');
let BreakfastBtn = document.querySelector('.breakfast');
let lunchBtn = document.querySelector('.lunch');
let shakesBtn = document.querySelector('.shakes');
let priceBtn = document.querySelector('.price');
let priceBtn2 = document.querySelector('.price2');
allBtn.addEventListener('click', function () {
    const allArray = menu;
    const allMap = allArray.map((f5) => {
        return `<article class="menu-item">
            <img src=${f5.img} alt=${f5.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${f5.title}</h4>
                <h4 class="price">$ ${f5.price}</h4>
              </header>
              <p class="item-text">
                ${f5.desc}
              </p>
            </div>
          </article>`
    })
    let allMenuMap = allMap.join("")
    sectionCenter.innerHTML = allMenuMap;
});

BreakfastBtn.addEventListener('click', breakFastFn)

function breakFastFn() {
    const newArray = menu.filter(type => type.category == "breakfast")
    const breakfastMap = newArray.map((f1) => {
        return `<article class="menu-item">
            <img src=${f1.img} alt=${f1.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${f1.title}</h4>
                <h4 class="price">$ ${f1.price}</h4>
              </header>
              <p class="item-text">
                ${f1.desc}
              </p>
            </div>
          </article>`
    })
    const withoutCommas = breakfastMap.join("");
    sectionCenter.innerHTML = withoutCommas;
}




lunchBtn.addEventListener('click', (e) => {
    const newArray3 = menu.filter(lunch => lunch.category == "lunch")
    const lunchfastMap = newArray3.map((f2) => {
        return `<article class="menu-item">
            <img src=${f2.img} alt=${f2.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${f2.title}</h4>
                <h4 class="price">$ ${f2.price}</h4>
              </header>
              <p class="item-text">
                ${f2.desc}
              </p>
            </div>
          </article>`
    })
    let lunchfastMaps = lunchfastMap.join("");
    sectionCenter.innerHTML = lunchfastMaps;
});
    
shakesBtn.addEventListener('click', (e) => {
    const NewArray4 = menu.filter(shakes => shakes.category == "shakes")
    const shakesMap = NewArray4.map((f3) => {
        return `<article class="menu-item">
            <img src=${f3.img} alt=${f3.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${f3.title}</h4>
                <h4 class="price">$ ${f3.price}</h4>
              </header>
              <p class="item-text">
                ${f3.desc}
              </p>
            </div>
          </article>`
    })
    let ShakesMap = shakesMap.join("");
    sectionCenter.innerHTML = ShakesMap;
});

priceBtn.addEventListener('click', (e) => {
    const NewArray5 = menu.filter(bigPrice => bigPrice.price >= 15);
    const PriceNewMap = NewArray5.map((f6) => {
        return `<article class="menu-item">
            <img src=${f6.img} alt=${f6.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${f6.title}</h4>
                <h4 class="price">$ ${f6.price}</h4>
              </header>
              <p class="item-text">
                ${f6.desc}
              </p>
            </div>
          </article>`
    })
    let priceMap = PriceNewMap.join("");
    sectionCenter.innerHTML = priceMap;
});



priceBtn2.addEventListener('click', (e) => {
  const NewArray6 = menu.filter(smallPrice => smallPrice.price < 13);
  const SmallPriceMAp = NewArray6.map((f7) => {
      return `<article class="menu-item">
          <img src=${f7.img} alt=${f7.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${f7.title}</h4>
              <h4 class="price">$ ${f7.price}</h4>
            </header>
            <p class="item-text">
              ${f7.desc}
            </p>
          </div>
        </article>`
  })
  let SmallPrice = SmallPriceMAp.join("");
  sectionCenter.innerHTML = SmallPrice;
});






// let NameNewProduct = document.querySelector('.name_product');
// let ImgNewProduct = document.querySelector('.img_product');
// let DescriptionNewProduct = document.querySelector('.description_product');
// let priceNewProduct = document.querySelector('.price_product');

// let btnAddNewProduct = document.querySelector('.add_breakfast_prodcut');

//   btnAddNewProduct.addEventListener('click', (e) => {
//     let newBreakFastProduct = menu.push(
//       {
//         id: 11,
//         title: NameNewProduct.value,
//         category: "breakfast",
//         price:priceNewProduct.value,
//         img: ImgNewProduct.value,
//         desc: DescriptionNewProduct.value,
//     },

//     )   
//      const SkeletNewProduct = newBreakFastProduct((f8) => {
//       return `<article class="menu-item">
//           <img src=${f8.img} alt="" class="photo" />
//           <div class="item-info">
//             <header>
//               <h4>${f8.title}</h4>
//               <h4 class="price">$ ${f8.price}</h4>
//             </header>
//             <p class="item-text">
//               ${f8.desc}
//             </p>
//           </div>
//         </article>`
//   })
    
//     // let joinStr = newBreakFastProduct.join("");
//     sectionCenter.innerHTML = SkeletNewProduct;
//   })







