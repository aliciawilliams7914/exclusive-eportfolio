// template_6woheuf
// aliciawilliams7914
// user_DQkaMsn_hRekzl4C8

function contact(event) {
    event.preventDefault();
    // emailjs
    // .sendForm(
    // 'service_aliciawilliams7914',
    // 'template_6woheuf',
    // event.target,
    // 'user_DQkaMsn_hRekzl4C8'
// ).then(() => {
    // console.log('this worked')
// })
const loading = document.querySelector('. modal__overlay--loading')
const success = document.querySelector('.modal__overlay--success')
loading.classList += " modal__overlay--visible"
SetTimeout(() => {
    loading.classList.remove("modal__overlay--visible"); 
    success.classList += " modal__overlay--visible";

    console.log('it worked 1') 
}, 1000);

}












