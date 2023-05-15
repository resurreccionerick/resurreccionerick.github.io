let menu = document.querySelector('.menu-icon')
let navbar = document.querySelector(".navbar")

menu.onclick = () => {
    navbar.classList.toggle('open-menu');
    menu.classList.toggle("move");
};

function preloadImages(images) {
    for (let i = 0; i < images.length; i++) {
      const img = new Image();
      img.src = images[i];
    }
  }

  preloadImages([
    'img/pic-bg.jpg',
  ]);


function validate(){
    let name = document.querySelector('.name');
    let email = document.querySelector('.email');
    let msg = document.querySelector('.message');
    let sendBtn = document.querySelector('.send-btn');

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(name.value == "" || email.value == "" || msg == ""){
            emptyError();
        }else{
            sendEmail(name.value, email.value, msg.value);
            success();
        }
    });
}
validate();

function sendEmail(name,email,msg){
        emailjs.send("service_12g7efb","template_qqkkcy8",{
        to_name: name,
        from_name: email,
        message: msg,
        });
}

function emptyError(){
    swal({
        title: "Error!",
        text: "Fields cannot be empty.",
        icon: "error",
      });
}

function success(){
    swal({
        title: "Email successfully sent!",
        text: "I'll try to reply in 24hrs. Thank you!",
        icon: "success",
      });
}

//header background change on scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
});

//scroll up
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY > 0);
});

$(document).ready(function() {
    $('.work-item-popup').magnificPopup({
      type: 'image',
      gallery: { enabled: true }
    });
  });

