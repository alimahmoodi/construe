const radioSignUp = document.querySelector('#form-select-2')
const radioLogIn = document.querySelector('#form-select-1')
document.querySelectorAll('.form__label').forEach(function(item){
    item.addEventListener('click',function(e){
        let array = e.path
        // console.log(array)
        array.forEach(function (item){
        if( item.id == 'form__label--log-in'){
            radioLogIn.checked = true
        }
        else if(item.id == 'form__label--sign-up'){
            radioSignUp.checked = true
        }
    })
    })
})

let signUp =document.querySelector('.form__sign-up')

let logIn=document.querySelector('.form__log-in')

let signUpHeight = signUp.offsetHeight

let logInHeight = logIn.offsetHeight
console.log(logInHeight)
console.log(signUpHeight)

if(signUpHeight > logInHeight){
    logIn.style.height = signUpHeight + 'px'
}
else if(signUpHeight < logInHeight){
    signUp.style.height = logInHeight + 'px'

}