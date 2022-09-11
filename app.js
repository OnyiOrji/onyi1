// template_k73xlke - temp ID
// service_hiq03yq - service ID
// H3Ypoai3lKjQmf5Mj - user ID

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    emailjs
        .sendForm(
            'service_hiq03yq',
            'template_k73xlke',
            event.target,
            'H3Ypoai3lKjQmf5Mj'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly on email@gmail.com"
        )
    })

    loading.classList += " modal__overlay--visible";
    setTimeout(() => {
        console.log('it worked')
    }, 1000);
}
