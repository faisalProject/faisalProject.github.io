document.addEventListener('DOMContentLoaded', () => {
    var hamburger_menu = document.querySelector('.hamburger-menu');
    var aside = document.querySelector('aside');
    hamburger_menu ? hamburger_menu.addEventListener('click', () => {
        aside.classList.toggle('active');
        document.querySelector('body').classList.toggle('active')
    }) : null

    var blur = document.querySelectorAll('.blur');

    blur ? blur.forEach(item => {
        item.addEventListener('click', () => {
            // alert('ok')
        })
    }) : null

    var more_complete_service = document.querySelectorAll('.more-complete-service');
    var service_detail_card = document.querySelectorAll('.service-detail-card');
    more_complete_service ? more_complete_service.forEach( (item, i) => {
        item.addEventListener('click', () => {
            service_detail_card[i].classList.add('active');
            document.querySelector('body').classList.add('active-2');
        })
    } ): null

    var rectangle = document.querySelectorAll('.rectangle');

    rectangle.forEach( (item, i) => {
        item.addEventListener('click', () => {
            service_detail_card[i].classList.remove('active');
            document.querySelector('body').classList.remove('active-2');
        })
    } )
    
    var button_close_popup = document.querySelectorAll('.button-close-popup');
    button_close_popup.forEach( (item, i) => {
        item.addEventListener('click', () => {
            service_detail_card[i].classList.remove('active');
            document.querySelector('body').classList.remove('active-2');
        })
    } )

    var card_popup = document.querySelectorAll('.card-popup');
})