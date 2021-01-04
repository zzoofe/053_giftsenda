import SimpleBar from 'simplebar'
import 'choices.js/public/assets/scripts/choices.min'
import datepicker from 'js-datepicker'
import '../js/multSelect'
import MicroModal from 'micromodal'
import Quill from 'quill'
import Swiper from 'swiper/swiper-bundle'

MicroModal.init({
    onShow: () => document.body.classList.add('howdy'),
    onClose: () => document.body.classList.remove('howdy'),
    awaitCloseAnimation: true,
    openClass: 'open'
})


const choices = document.querySelectorAll(`.js-choice`)
const edit = document.querySelectorAll(`.el-edit`)
const choicesSearch = document.querySelectorAll(`.js-choice-search`)
const choicesTag = document.querySelectorAll(`.js-choice-tag`)
const date = document.querySelectorAll(`.inp-date`)
const filterTitle = document.querySelectorAll(`.b-filter-box__title span`)
const filterBtn = document.querySelector(`.b-filterBtn span`)
const filter = document.querySelector(`.b-filter`)
const burger = document.querySelector(`.burger`)
const tabby = document.querySelector(`.tabby`)
const tabs = document.querySelectorAll(`.tab`)
const tabContents = document.querySelectorAll(`.tab-content`)
const quaPlus = document.querySelector(`.el-qua__btn--plus`)
const quaMinus = document.querySelector(`.el-qua__btn--minus`)
const countEl = document.querySelector(`.el-qua input`)
const imgBtn = document.querySelectorAll(`.b-productDetail__image__small a`)
const imgLarge = document.querySelector(`.b-productDetail__image__large img`)
const pageBarBtn = document.querySelector(`.b-pageBar__btn`)
const pageBar = document.querySelector(`.b-pageBar`)
const swiperSelector = document.querySelectorAll(`.swiper-container`)
const areaEditor = document.querySelector(`.editor`)

if (areaEditor) {
    const editor = new Quill(`.editor`, {
        theme: `snow`
    })
}

swiperSelector.forEach(function (e) {
    const swiper = new Swiper(e, {
        slidesPerView: 5,
        spaceBetween: 3,
        pagination: {
            el: `.swiper-pagination`,
        },
        navigation: {
            nextEl: `.swiper-button-next`,
            prevEl: `.swiper-button-prev`,
        },
        breakpoints: {
            200: {
                slidesPerView: 3,
                spaceBetween: 3,
            },
            550: {
                slidesPerView: 4,
                spaceBetween: 3,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 3,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 3,
            },
        }
    })
})

if (choices) {
    choices.forEach(function (e) {
        const choice = new Choices(e, {
            searchEnabled: false,
            searchChoices: false,
            itemSelectText: ``,
            callbackOnInit: () => {
                const drop = e.attributes[0].ownerElement.parentElement.nextSibling
                const scroll = new SimpleBar(drop)
            },
        })
    })

    choicesSearch.forEach(function (e) {
        const choicesSearch = new Choices(e, {
            searchEnabled: true,
            searchChoices: true,
            itemSelectText: ``,
            callbackOnInit: () => {
                const drop = e.attributes[0].ownerElement.parentElement.nextSibling
                const scroll = new SimpleBar(drop)
            },
        })
    })

    choicesTag.forEach(function (e) {
        const choicesSearch = new Choices(e, {
            searchEnabled: true,
            searchChoices: true,
            itemSelectText: ``,
            removeItemButton: true,
            callbackOnInit: () => {
                const drop = e.attributes[0].ownerElement.parentElement.nextSibling
                const scroll = new SimpleBar(drop)
            },
        })
    })
}

if (date) {
    date.forEach(function (e) {
        const picker = datepicker(e, {
            formatter: (input, date, instance) => {
                const value = date.toLocaleDateString(`en-US`)
                input.value = value
            },
        })
    })
}

if (filterTitle) {
    const boxOpen = document.querySelector(`.b-filter-box__frame.is-open`)
    if (boxOpen) {
        boxOpen.style.maxHeight = boxOpen.scrollHeight + `px`
    }

    filterTitle.forEach(function (e) {
        e.addEventListener(`click`, function (e) {
            e.preventDefault()
            const el = e.target
            const panel = el.parentElement.nextElementSibling
            el.classList.toggle(`is-active`)

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null

                if (panel.classList.contains(`is-open`)) {
                    panel.classList.remove(`is-open`)
                }

            } else {
                panel.style.maxHeight = panel.scrollHeight + `px`
            }
        })
    })
}

if (filterBtn) {
    filterBtn.addEventListener(`click`, function (e) {
        if (filter.style.maxHeight) {
            filter.style.maxHeight = null
            filter.style.overflow = null
        } else {
            filter.style.maxHeight = filter.scrollHeight + `px`
            setTimeout(() => filter.style.overflow = `visible`, 500)
        }
    })
}

if (burger) {
    burger.addEventListener(`click`, function (e) {
        this.classList.toggle(`open`)
    })
}

if (tabs) {
    tabs.forEach(button => {
        button.addEventListener('click', event => {
            const tabTheme = button.getAttribute('data-theme')
            if (button.classList.contains('is-selected')) {
                return
            } else {
                tabs.forEach(tab => {
                    if (tab.classList.contains('is-selected')) {
                        tab.classList.remove('is-selected')
                    }
                })
                button.classList.add('is-selected')
            }

            tabContents.forEach(section => {
                const contentTheme = section.getAttribute('data-theme')
                if (contentTheme === tabTheme) {
                    section.classList.add('is-selected')
                } else {
                    section.classList.remove('is-selected')
                }
            })
        })
    })
}

if (imgBtn) {
    imgBtn.forEach(function (e) {
        e.addEventListener(`click`, function (e) {
            imgBtn.forEach(function (e) {
                console.log(111)
                e.classList.remove(`is-active`)
            })
            let src = this.getAttribute(`data-src`)
            this.classList.add(`is-active`)
            imgLarge.setAttribute(`src`, src)
        })
    })
}

let count = 1

if (quaPlus) {
    quaPlus.addEventListener(`click`, function (e) {
        count++
        countEl.value = count
    })
}

if (quaMinus) {
    quaMinus.addEventListener(`click`, function (e) {
        if (count > 1) {
            count--
            countEl.value = count
        }
    })
}

if (edit) {
    edit.forEach(function (e) {
        e.addEventListener(`click`, function (e) {
            e.preventDefault()
            let ed = this.parentElement.querySelector(`.text-edit`)
            ed.setAttribute('contenteditable', 'true')
            ed.focus()
            // console.log(this.parentElement)
        })
    })
}

if (pageBar) {
    pageBar.addEventListener(`click`, function (e) {
        pageBar.classList.toggle(`is-open`)
    })
}
