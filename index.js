function contact(event) {
event.preventDefault();
const loading = document.querySelector('. modal__overlay--loading')
const success = document.querySelector('.modal__overlay--success')
loading.classList += " modal__overlay--visible";


    emailjs
    .sendForm(
    'service_aliciawilliams7914',
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












