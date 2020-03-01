

// let arrayOfImg=document.getElementsByClassName("interface__img-container")
// let widthOfImg =arrayOfImg[0].offsetWidth

// let numOfImg = arrayOfImg.length
// let o = 0
// let interFacecounter = 0
// // let interfaceBullets = document.getElementsByClassName("interface__bullets")
// let interFaceSlider=document.querySelector("#interface__slider")
// let interFacelinks=document.getElementsByClassName('interface__bullets')

// while(o<numOfImg){
//     let createAnchor=document.createElement('div')
//     createAnchor.setAttribute('class','interface__bullets-link')
//     createAnchor.setAttribute('id',o)
//     interFacelinks[0].appendChild(createAnchor)
//     o++
// }

// let interFacelinksArray= document.getElementsByClassName('interface__bullets-link')



// for(let k=0 ; k<numOfImg ; k++){
//     interFaceSlider.appendChild(arrayOfImg[k].cloneNode(true))
// }

// for(let p=0;p<numOfImg;p++){
//     let l =1
//     interFaceSlider.insertBefore(arrayOfImg[numOfImg-l].cloneNode(true),arrayOfImg[0])
//     l++
// }

// document.querySelector("#interface__prev").addEventListener('click',function(e){
    
//   interFaceshowSlider(widthOfImg)
// })

// document.querySelector("#interface__next").addEventListener('click',function(e){
//    interFaceshowSlider(-widthOfImg) 
// })

// // interFaceSlider.addEventListener('transitionend', checkIndex)

// var interFaceposInitial=interFaceSlider.offsetLeft

// function interFaceshowSlider(widthOfImg){

//     interFaceposInitial=interFaceSlider.offsetLeft
  

//    interFaceSlider.classList.add('users__slider-shift')
   
//    for(let i=0;i<numOfImg;i++){
//       interFacelinksArray[i].className = interFacelinksArray[i].className.replace(" interface__bullets-link-active","");
//    }

//    if(widthOfImg>0){
      
//     interFaceSlider.style.left = (interFaceposInitial + widthOfImg+40) +'px'
//     interFacecounter--       
//    }

//    if(widthOfImg<0){
       
//     interFaceSlider.style.left = (interFaceposInitial + widthOfImg-40) +'px'
//     interFacecounter++       
//    }

//     if(interFacecounter>=0 && interFacecounter<numOfImg){
//       interFacelinksArray[interFacecounter].className+=" interface__bullets-link-active"
     
//    }
//    else if(interFacecounter ==-1){
//     interFacelinksArray[n-1].className+=" interface__bullets-link-active"
//    }
//    else if(interFacecounter == numOfImg){
//     interFacelinksArray[0].className+=" interface__bullets-link-active"
//    }
// }

// function checkIndex(){
//   interFaceSlider.classList.remove('users__slider-shift')
   
//    if(interFacecounter ==-1){
//     interFaceSlider.style.left = -(numOfImg*widthOfImg) + "px"
//        interFacecounter = numOfImg-1
//    }
//    if(interFacecounter == numOfImg){
//     interFaceSlider.style.left = -(widthOfImg) + "px"
//        interFacecounter = 0
//    }    
// }


//-----------------------------------------------------------------
// $('.interface__slider').slick({
//     infinite: true,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     dots:true,
//     centerMode:true,

//     responsive :[{

//       breakpoint:600,
//       setting:{
//         slidesToShow:1,
//         slidesToScroll: 1,
//         dots:true,
//         infinite: true,
        
//       }
//     }
      
//     ]  
//   });

$('.interface__slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  dots:true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
        dots:true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        dots:true,
      }
    }
  ]
});
      