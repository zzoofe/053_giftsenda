import 'simplebar/dist/simplebar.min'

const filterTitle = document.querySelectorAll(`.b-filter-box__title`)

filterTitle.forEach(function(e) {
    e.addEventListener(`click`, function(e) {
        e.preventDefault()
        const el = e.target
        const panel = el.nextElementSibling
        el.classList.toggle(`is-active`)
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null
        } else {
            panel.style.maxHeight = panel.scrollHeight + `px`
        }
    })
})

