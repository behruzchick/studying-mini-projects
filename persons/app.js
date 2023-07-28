let img = document.querySelector('.img');
let text = document.querySelector('.text');
let btns = document.querySelector('.btn_div');
let allBtn = [
    leftBtn = document.querySelector('.left_block'),
    rightBtn = document.querySelector('.right_block')
]
let block = document.querySelector('.persons');
let allPerson = [

    {
        id:1,
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore obcaecati aliquid neque accusantium sint, itaque repudiandae fuga velit assumenda,  minus soluta omnis nam ipsum sit ad explicabo ullam. Quos amet velit corporis error non libero nihil, ipsam aliquam aspernatur, facere nemo sequi, aperiam deserunt atque veniam quas? Iure esse fuga nostrum sed saepe rerum nobis cum officiis nisi possimus.",
        img:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Jake",
        next:"next"

    } ,
    {
        id:2,
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus modi libero, doloribus et perferendis blanditiis nihil quas natus error, illo at distinctio optio. Alias sequi magni dignissimos aperiam tempora tempore saepe officiis eligendi odio, ea necessitatibus veniam id!",
        img:"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?cs=srgb&dl=pexels-stefan-stefancik-91227.jpg&fm=jpg",
        name:"Jake",
        next:"prev"

    }  ,
     {
        id:3,
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus modi libero, doloribus et perferendis blanditiis nihil quas natus error, illo at distinctio optio magni. Alias sequi magni dignissimos blanditiis aperiam tempora tempore saepe officiis eligendi odio, ea necessitatibus veniam id!",
        img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&w=1000&q=80",
        name:"Jeyson",
        next :"prev"

    },
]


    allBtn.forEach(function(btn) {
        btn.addEventListener('click', (e) => {
            let data = e.currentTarget.dataset.id;
            let fillter = allPerson.filter(fill => fill.next === data);
            console.log(data)
            console.log(fillter)
          let j =  fillter.map((p1) => {
                return `
                <div class="img_block">
                <img class="img" src="${p1.img}" alt="">
            </div>
            <div class="name_block" style="margin-top: 10px;">
                <h1>${p1.name}</h1>
            </div>
            <div class="about_block">
                <h3 class="text">${p1.text}</h3>
            </div>
                `
            })
            j = j.join("");
            block.innerHTML = j;
        })
    })


