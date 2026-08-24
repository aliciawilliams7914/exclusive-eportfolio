function contact(event) {
event.preventDefault();
const loading = document.querySelector('.modal__overlay--loading');
const success = document.querySelector('.modal__overlay--success');
loading.classList += " modal__overlay--visible";
emailjs
    .sendForm(
    'service_fabjeea',
    'template_6woheuf',
    event.target,
    'user_DQkaMsn_hRekzl4C8'
).then(() => { 
    loading.classList.remove("modal__overlay--visible"); 
    success.classList += " modal__overlay--visible";
}).catch(() => {
    loading.classList.remove("modal__overlay--visible");
    alert( 
        "The email service is temporarily unavailable. Please contact me directly at alicia.williams219@gmail.com"
    );
})
}
 
let isModalOpen = false;
function toggleModal() {
     isModalOpen = !isModalOpen;
    if (isModalOpen) {
        return document.body.classList.remove("modal--open");
    }
   
    // toggle modal
    document.body.classList += " modal--open;"
}











