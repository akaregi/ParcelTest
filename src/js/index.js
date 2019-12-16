import css from '../scss/style'
import fa_js from '@fortawesome/fontawesome-free/js/all'
import fa_css from '@fortawesome/fontawesome-free/css/all'

document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    if ($navbarBurgers.length <= 0) {
        return
    }

    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
        })
    })
})
