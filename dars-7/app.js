const obj = [
   {
        id:0,
        category:'history',
        moun:"Chimgan",
        title:"Turizm",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam qui magnam suscipit, hic laborum nulla fuga tenetur iure doloribus tempora, voluptate est officiis corrupti error magni. Harum facere reiciendis ipsum.",
        img:"https://images.unsplash.com/photo-1589405858862-2ac9cbb41321?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"

    },
    {
        id:1,
        category:"vision",
        moun:"Chortoq",
        title:"Vision",
        text:"Uzbekistan has an area of 448,978 square kilometres (173,351 sq mi). It is the 56th largest country in the world by area and the 40th by population.[48] Among the CIS countries, it is the fourth largest by area and the second largest by population.[49]",
        img:"https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=pexels-pixabay-417173.jpg&fm=jpg"
    },
   {
        id:2,
        category:"oazis",
        title:"Oazis",
        moun:"Samoviy Mountains",
        text:"The Aral Sea was once the fourth-largest inland sea on Earth, humidifying the surrounding air and irrigating the arid land.[54] Since the 1960s, when the overuse of the Aral Sea water began, it has shrunk to about 10% of its former area and divided into parts, with only the southern part of the western lobe of the South Aral Sea remaining permanently in Uzbekistan",
        img:"https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-1287145.jpg&fm=jpg"
    },

];
    let imgBlcok = document.querySelector('.img_block');
    let img = document.querySelector('.img');
    let textDiv = document.querySelector('.text_div');
    let main = document.querySelector('.main');
    let btnDiv = document.querySelector('.btn_div');
    let addBtn = document.querySelector('.add');
    let allBtn = document.querySelectorAll('.btn'); 

    allBtn.forEach(function(btn) {
        btn.addEventListener('click', function(e){
            let current = e.currentTarget.dataset.id;
            let fillter = obj.filter(type => type.category === current);
            let categorySet = fillter.map((p1) => {
                return `
                <div class="main">
                <div class="img_block">
                    <img class="img" src="${p1.img}" alt="">
                    <h1>${p1.moun}</h1>
                </div>
                <div class="content">
                <h1>${p1.title}</h1>
                    <div class="text_div">
                        <p>${p1.text}</p>
                    </div>
                </div>
                </div>

                `
            });           
         categorySet = categorySet.join("");
         main.innerHTML = categorySet;
        })
    })
