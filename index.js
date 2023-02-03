const btn=document.querySelectorAll('.list-item')
const container=document.querySelectorAll('.container')
const item_list=document.querySelector('.item-list')
const alt_list=document.querySelector('.alt-list')
const dark_btn=document.querySelector('#dark-btn')
const light_btn=document.querySelector('#light-btn')
const dark_btn1=document.querySelector('#dark-btn1')
const light_btn1=document.querySelector('#light-btn1')
//  console.log(container)
// const height=container.getBoundingClientRect().height
// const top1=container.getBoundingClientRect().top.toFixed()

// window.addEventListener('scroll',(e)=>{
//     console.log(e)

const btn_click=()=>{
    // console.log('hello1')
    // alt_list.classList.remove('show-menu')
    // alt_list.style.display='grid'
    item_list.classList.add('hide')
    alt_list.classList.remove('hide')
}

const show_btn_click=()=>{
    // console.log('clicked')
    alt_list.classList.add('hide')
    item_list.classList.remove('hide')
    // item_list.classList.add('hide')
    // alt_list.classList.remove('show-menu')
    // alt_list.style.display='none'
}


const change_darkmode=()=>{
    // console.log('executed')
    dark_btn.classList.add('hide')
    dark_btn1.classList.add('hide')
    var r = document.querySelector(':root')
    var rs = getComputedStyle(r)
  let val=rs.getPropertyValue('--light-mode-primary')
  let val2=rs.getPropertyValue('--light-text-color')
  r.style.setProperty('--dark-mode-primary', val);
  r.style.setProperty('--dark-text-color', val2);
  r.style.setProperty('--input-text-color-dark','#565151');
  r.style.setProperty('--input-color-dark','#dad6de');
  
  light_btn.classList.remove('hide')
  light_btn1.classList.remove('hide')
}


const change_lightmode=()=>{
    console.log('hello345')
    light_btn.classList.add('hide')
    light_btn1.classList.add('hide')
    var r = document.querySelector(':root')
    var rs = getComputedStyle(r)
  let val=rs.getPropertyValue('--dark-mode-primary')
  console.log(val)
  let val2=rs.getPropertyValue('--dark-text-color')
  r.style.setProperty('--dark-mode-primary', '#2f1c42');
  r.style.setProperty('--dark-text-color', '#fefefe');
  r.style.setProperty('--input-text-color-dark','aliceblue')
  r.style.setProperty('--input-color-dark','#3e0c64')
 
  dark_btn.classList.remove('hide')
  dark_btn1.classList.remove('hide')
}

// })
let pos;
// btn.forEach((link,id) => {
//     //console.log(element)
//     link.addEventListener('click',()=>{
//     console.log('hello',id)
//     console.log(link)
//     // let pos=(id*550)+10+10;
//     //console.log(pos)
//     window.scrollTo({
//         top:480
//     })
// });
// })
var offsety;
var containerheight

btn.forEach((link,id)=>{
    link.addEventListener('click',(e)=>{
        let pos=0;
        // let temp=container[id]
        // containerheight = temp.getBoundingClientRect().height
        // console.log(containerheight)

        const id = e.currentTarget.getAttribute("href").slice(1)+`s`;
        //console.log(id)
        const element=document.getElementById(id)
        // console.log(element)
        let containerheight = element.getBoundingClientRect().height
        let navheight=item_list.getBoundingClientRect().height
        link.classList.add('active')
        clear_btn(id)
        console.log(element.offsetTop)
         pos=element.offsetTop
        //  console.log(pos)
         if(id===0){
            pos=0
         }
         pos=pos-navheight;
        //  pos=(height*id);
        window.scrollTo({
            top:pos
        })
    })
})

// window.addEventListener('scroll',()=>{
//     console.log(containerheight)
//     console.log('hello')

// })

const clear_btn=(id1)=>{
    btn.forEach((link,id)=>{
        if(id1!==id){
            link.classList.remove('active')
        }
    })
}



// window.scrollTo({
//     top:490
// })

