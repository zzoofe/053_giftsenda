import SimpleBar from 'simplebar'
import 'choices.js/public/assets/scripts/choices.min'
import datepicker from 'js-datepicker'
import MicroModal from 'micromodal'
import Quill from 'quill'
import Swiper from 'swiper/swiper-bundle'
import '../js/multSelect'
import '../js/class'

const choices = document.querySelectorAll(`.js-choice`)
const edit = document.querySelectorAll(`.el-edit`)
const choicesSearch = document.querySelectorAll(`.js-choice-search`)
const choicesTag = document.querySelectorAll(`.js-choice-tag`)
const date = document.querySelectorAll(`.inp-date`)
const dateLink = document.querySelectorAll(`.link-date`)
const dateLinkBt = document.querySelectorAll(`.link-date-bt`)
const filterTitle = document.querySelectorAll(`.b-filter-box__title span`)
const filterBtn = document.querySelector(`.b-filterBtn span`)
const filter = document.querySelector(`.b-filter`)
const burger = document.querySelector(`.burger`)
const tabby = document.querySelector(`.tabby`)
const tabs = document.querySelectorAll(`.tab`)
const tabContents = document.querySelectorAll(`.tab-content`)
const imgBtn = document.querySelectorAll(`.b-productDetail__image__small a`)
const imgLarge = document.querySelector(`.b-productDetail__image__large img`)
const pageBarBtn = document.querySelector(`.b-pageBar__btn`)
const pageBar = document.querySelector(`.b-pageBar`)
const swiperSelector = document.querySelectorAll(`.swiper-container`)
const areaEditor = document.querySelector(`.editor`)
const search = document.querySelector(`.b-search`)
const setAll = document.querySelectorAll(`.el-setAll`)
const chooseTitle = document.querySelectorAll(`.b-chooseGift__title`)
const searchOpen = document.querySelector(`.b-recipients__icon`)
const sendEmail = document.querySelector(`.sendEmail`)

MicroModal.init({
    onShow: () => document.body.classList.add('howdy'),
    onClose: () => document.body.classList.remove('howdy'),
    awaitCloseAnimation: true,
    openClass: 'open'
})

if (areaEditor) {
    const editor = new Quill(`.editor`, {
        theme: `snow`
    })
}

swiperSelector.forEach(function (e) {
    const swiper = new Swiper(e, {
        slidesPerView: 5,
        spaceBetween: 0,
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
                spaceBetween: 0,
            },
            550: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 0,
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
            searchResultLimit: 1,
            itemSelectText: ``,
            callbackOnInit: () => {
                const drop = e.attributes[0].ownerElement.parentElement.nextSibling
                const scroll = new SimpleBar(drop)
            },
        })

        console.log(choicesSearch)
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

if (dateLink) {
    dateLink.forEach(function (e) {
        const picker = datepicker(e, {
            onShow: instance => {
                console.log(e)
                let coords = e.getBoundingClientRect()
                // console.log(coords.left)
                console.log(picker)
                picker.calendarContainer.style.left = coords.left + `px`
                picker.calendarContainer.style.top = coords.top + `px`
            },
            formatter: () => {
                const value = date.toLocaleDateString(`en-US`)
                input.value = value
            },
            position: `c`,
        })
    })
}

if (dateLinkBt) {
    dateLinkBt.forEach(function (e) {
        const picker1 = datepicker(e, {
            formatter: () => {
                const value = date.toLocaleDateString(`en-US`)
                input.value = value
            },
            position: `br`
        })
    })
}

if (filterTitle) {
    const boxOpen = document.querySelectorAll(`.b-filter-box__frame.is-open`)

    if (boxOpen) {
        boxOpen.forEach(function (e) {
            console.log(e)
            e.style.maxHeight = e.scrollHeight + `px`
        })

    }

    filterTitle.forEach(function (e) {
        e.addEventListener(`click`, function (e) {

            const el = e.target
            const panel = el.parentElement.nextElementSibling
            el.classList.toggle(`is-active`)

            if (panel.classList.contains(`is-open`)) {
                panel.classList.remove(`is-open`)
            }

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null
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

if (search) {
    const searchInput = search.querySelector(`.inp`)
    const searchIcon = search.querySelector(`.b-search__icon`)
    const searchClear = search.querySelector(`.b-search__icon__close`)

    searchInput.addEventListener(`input`, function (e) {
        if (e.target.value.length > 0) {
            searchIcon.classList.add(`is-clear`)
        } else {
            searchIcon.classList.remove(`is-clear`)
        }
    })

    searchClear.addEventListener(`click`, function (e) {
        searchInput.value = ''
        searchIcon.classList.remove(`is-clear`)
    })
}

if (setAll) {
    setAll.forEach( (e) => {
        const setAllLink = e.querySelector(`.el-setAll__link`)
        const setAllBg = e.querySelector(`.el-setAll__bg`)

        setAllLink.addEventListener('click', () => {
            e.classList.toggle(`is-open`)
        })

        setAllBg.addEventListener(`click`, () => {
            e.classList.remove(`is-open`)
        })
    })
}

if (chooseTitle) {
    chooseTitle.forEach(function (e) {
        const parent = e
        const list = e.nextElementSibling

        if (e.classList.contains(`is-open`)) {
            list.style.maxHeight = list.scrollHeight + `px`
        }

        e.addEventListener(`click`, function (e) {
            const { type } = e.target.dataset
            if (type === `col`) {
                if (list.style.maxHeight) {
                    list.style.maxHeight = null
                    parent.classList.remove(`is-open`)
                } else {
                    list.style.maxHeight = list.scrollHeight + `px`
                    parent.classList.add(`is-open`)
                }
            }
        })
    })

}

if (searchOpen) {
    searchOpen.addEventListener(`click`, function (e) {
        const rSearch = searchOpen.nextElementSibling
        const rFrame = document.querySelector(`.b-recipients__title`)
        //rSearch.classList.toggle(`is-open`)

        if (rSearch.style.minWidth) {
            rSearch.style.minWidth = null
            rSearch.classList.remove(`is-open`)
            searchOpen.classList.remove(`is-open`)
        } else {
            rSearch.style.minWidth = (rFrame.scrollWidth-10) + `px`
            rSearch.classList.add(`is-open`)
            searchOpen.classList.add(`is-open`)
        }

        console.log(rSearch)
    })
}

if (sendEmail) {
    sendEmail.addEventListener(`click`, function (e) {
        const sendEmailFrame = document.querySelector(`.b-sendEmailFrame`)

        if (sendEmailFrame.style.maxHeight) {
            sendEmailFrame.style.maxHeight = null
        } else {
            sendEmailFrame.style.maxHeight = sendEmailFrame.scrollHeight + `px`
        }
    })
}

