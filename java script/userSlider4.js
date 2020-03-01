
let numOfOpinion=document.getElementsByClassName("users__opinion")
let widthOfOpinion =numOfOpinion[0].offsetWidth
let n = numOfOpinion.length
let m=0
let counter=0
let usersSlider=document.querySelector("#users__slider")
let usersBullets = document.getElementsByClassName("users__bullets")

//clone first & last slide

let firstSlide = numOfOpinion[0]
let lastSlide = numOfOpinion [n-1]

let cloneLast = lastSlide.cloneNode(true)

usersSlider.insertBefore(cloneLast,firstSlide)

usersSlider.appendChild(numOfOpinion[0].cloneNode(true))

//create bullets DOM
while(m<n){
    let createAnchor=document.createElement('div')
    createAnchor.setAttribute('class','users__bullets-link')
    createAnchor.setAttribute('id',m)
    usersBullets[0].appendChild(createAnchor)
    m++
}
let linksArray=document.getElementsByClassName('users__bullets-link')
//initial first Slider's Bullet
if(counter===0){
    linksArray[counter].classList.add('users__bullets-link-active')
}
//transform slider with bullets------------------------
document.querySelectorAll('.users__bullets-link').forEach(function(item){
    item.addEventListener('click',function(e){
        usersSlider.classList.add('users__slider-shift')
        let k = ((-widthOfOpinion) * e.target.id ) - widthOfOpinion
        usersSlider.style.left=k+'px';
        counter = e.target.id

        for(let i=0;i<n;i++){
            linksArray[i].className = linksArray[i].className.replace("users__bullets-link-active","");
        }

        linksArray[counter].className+=" users__bullets-link-active"
    })
})

//translate slider with arrows-------------------------------


document.querySelector("#users__prev").addEventListener('click',back)

document.querySelector("#users__next").addEventListener('click',forward)


function back(){
    sliderWait(widthOfOpinion)
}

function forward(){
    sliderWait(-widthOfOpinion)
}



usersSlider.addEventListener('transitionend', checkIndex)



const showSlider = (widthOfOpinion) => {
    
    var posInitial=usersSlider.offsetLeft

    usersSlider.classList.add('users__slider-shift')
    
    for(let i=0;i<n;i++){
        linksArray[i].className = linksArray[i].className.replace("users__bullets-link-active","");
    }

    if(widthOfOpinion>0){
       
        usersSlider.style.left = (posInitial + widthOfOpinion) +'px'
        counter--       
    }

    if(widthOfOpinion<0){
        
        usersSlider.style.left = (posInitial + widthOfOpinion) +'px'
        counter++       
    }
     if(counter>=0 && counter<n){

        linksArray[counter].classList.add('users__bullets-link-active')
       
    }
    else if(counter ==-1){

        linksArray[n-1].classList.add('users__bullets-link-active')
    }
    else if(counter == n){

        linksArray[0].classList.add('users__bullets-link-active')
    }
}


function checkIndex(){

    usersSlider.classList.remove('users__slider-shift')
    
    if(counter ==-1){
        usersSlider.style.left = -(n*widthOfOpinion) + "px"
        counter = n-1
    }

    if(counter == n){
        usersSlider.style.left = -(widthOfOpinion) + "px"
        counter = 0
    }       
}


async function sliderWait(movement){
    await checkIndex()
    showSlider(movement)
}



