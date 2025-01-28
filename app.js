//OPEN AND CLOSE MOBILE MENU BUTTON - POPUP (MENU) APPEARS AND DISAPPEARS
var openBtn = document.querySelector(".open-btn");
var closeBtn = document.querySelector(".close-btn");
var popup = document.querySelectorAll(".popup");

//WHEN BUTTON IS CLICKED, MENU APPEARS

openBtn.addEventListener('click', function (){
    for(let x = 0; x < popup.length; x++ ){
        popup[x].classList.add('visible');
    }
})


//WHEN BUTTON IS CLICKED, MENU APPEARS

closeBtn.addEventListener('click', function (){
    for(let x = 0; x < popup.length; x++ ){
        popup[x].classList.remove('visible');
    }
})

//SMOOTH SCROLL TO NEXT SECTION WHEN NAVBAR AND CONTACTS BUTTON IS CLICKED

let btnMore = document.querySelector("#div1", "#div2", "#div3", "#div4", "#div5");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
