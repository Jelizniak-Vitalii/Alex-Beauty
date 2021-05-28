

//                  Settings
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });

//                  Settings End

let buttonCallBackSvg = document.querySelector('.button-callBack');
let feedBackButton = document.querySelector('.feedback__button');

let burgerMenu = document.querySelector('.burger-menu');
let buttonFormClose = document.querySelector('.form__close')


feedBackButton.addEventListener('click', ()=>{
    document.querySelector('.section-form').classList.toggle('active');
    document.querySelector('.form').classList.toggle('active');
    document.body.classList.toggle('lock');
})

burgerMenu.addEventListener('click',() => {
    document.querySelector('.background-menu').classList.toggle('active');
    document.body.classList.toggle('lock');
    document.querySelector('.button-callBack').classList.toggle('close');
    document.querySelector('.burger-menu').classList.toggle('active');
});

buttonCallBackSvg.addEventListener('click',()=>{
    document.querySelector('.section-form').classList.toggle('active');
    document.querySelector('.form').classList.toggle('active');
    document.body.classList.toggle('lock');
    document.querySelector('.button-callBack').classList.toggle('close');
})
buttonFormClose.addEventListener('click',()=>{
    document.querySelector('.section-form').classList.toggle('active');
    document.querySelector('.form').classList.toggle('active');
    document.body.classList.toggle('lock');
    document.querySelector('.button-callBack').classList.toggle('close');
})


