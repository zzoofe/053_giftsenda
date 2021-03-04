import SimpleBar from 'simplebar'
import 'choices.js/public/assets/scripts/choices.min'
import datepicker from 'js-datepicker'
import MicroModal from 'micromodal'
import Quill from 'quill'
import Swiper from 'swiper/swiper-bundle'
import '../js/multSelect'
import '../js/class'
import Vue from 'vue/dist/vue'
import vSelect from 'vue-select'
import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import './component/components'

Vue.component('v-calendar', Calendar)
Vue.component('v-date-picker', DatePicker)
Vue.component('v-select', {
    extends: vSelect,
    methods: {
        // toggleDropdown(event) {
        //     setTimeout(() => {
        //         const drop1 = this.$el.lastElementChild
        //         const scroll = new SimpleBar(drop1)
        //     }, 10)
        // },
        // clear() {
        // }
    }
})

vSelect.props.components.default = () => ({
    Deselect: {
        render: createElement => createElement(`span`),
    },
    OpenIndicator: {
        render: createElement => createElement(`span`),
    },
})

new Vue({
    data() {
        return {
            activeItem: `sendas`,
            modalMenu: false,
            readonly: true,
            titleEdit: `Edit`,
            date: new Date(),
            options: [
                `Angola Cambodia Faroe Islands`,
                `Angola`,
                `Belize`,
                `Cambodia`,
                `Denmark`,
                `Ecuador`,
                `Faroe Islands Faroe Islands`,
                `Georgia`,
                `Haiti`,
                `India`,
                `Jamaica`,
                `Kenya`,
                `Liberia`,
                `Madagascar`
            ],
            langsdata: [1, 2, 3, 4, 5],
            isCheckAll: false,
            checkSelect: [],
            isSelect: false,
            personShow: false
        }
    },
    methods: {
        edit() {
            this.titleEdit = this.readonly ? `Save` : `Edit`
            this.readonly = this.readonly ? false : true
        },
        modalNavShow() {
            this.modalMenu = true
        },
        modalNavHide() {
            this.modalMenu = false
        },
        isActive(menuItem) {
            return this.activeItem === menuItem
        },
        setActive(menuItem) {
            this.activeItem = menuItem
        },

        checkAll() {
            this.isCheckAll = !this.isCheckAll
            this.isSelect = !this.isSelect
            this.checkSelect = []

            if (this.isCheckAll) {
                for (var key in this.langsdata) {
                    this.checkSelect.push(this.langsdata[key])
                }
            }
        },
        updateCheckall() {
            if (this.checkSelect.length == this.langsdata.length) {
                this.isCheckAll = true
            } else {
                this.isCheckAll = false
            }
        },

    },
}).$mount(`.wrap`)

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
const cardbtn = document.querySelector(`.js-card-btn`)
const frameNext = document.querySelectorAll(`.js-next`)
const framePrev = document.querySelectorAll(`.js-prev`)
const indMess = document.querySelector(`.js-indMess`)
const clear = document.querySelector(`.clear`)
const allcheck = document.querySelector(`.js-all-check`)

MicroModal.init({
    onShow: () => {
        document.body.classList.add('howdy')

        let swiper = new Swiper(`.swiper-container-modal`, {
            slidesPerView: 5,
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
    },
    onClose: () => document.body.classList.remove('howdy'),
    awaitCloseAnimation: true,
    openClass: 'open',
    closeTrigger: `data-micromodal-close`
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

import {general} from "./general";

if (allcheck) {
    allcheck.addEventListener('click', () => {
        console.log(111)
    })
}

if (choices) {

    general.choiceInit();

    choicesSearch.forEach(function (e) {
        const choicesSearch = new Choices(e, {
            searchEnabled: true,
            searchChoices: true,
            searchResultLimit: 3,
            searchFloor: -1,
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

if (dateLink) {
    dateLink.forEach(function (e) {
        const picker = datepicker(e, {
            onShow: instance => {
                let coords = e.getBoundingClientRect()
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
            setTimeout(() => {
                e.style.maxHeight = e.scrollHeight + `px`
            }, 1000)
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

    if(searchIcon) {
        searchInput.addEventListener(`input`, function (e) {
            if (e.target.value.length > 0) {
                searchIcon.classList.add(`is-clear`)
            } else {
                searchIcon.classList.remove(`is-clear`)
            }
        })

        if(searchClear) {
            searchClear.addEventListener(`click`, function (e) {
                searchInput.value = ''
                searchIcon.classList.remove(`is-clear`)
            })
        }
    }
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
                    list.classList.remove(`is-open`)
                    parent.classList.remove(`is-open`)
                } else {
                    list.style.maxHeight = list.scrollHeight + `px`
                    parent.classList.add(`is-open`)

                    setTimeout(() => {
                        list.classList.add(`is-open`)
                    }, 300)
                }
            }
        })
    })

}

if (searchOpen) {
    searchOpen.addEventListener(`click`, function (e) {
        const rSearch = searchOpen.nextElementSibling
        const rFrame = document.querySelector(`.b-recipients__title`)

        if (rSearch.style.minWidth) {
            rSearch.style.minWidth = null
            rSearch.classList.remove(`is-open`)
            searchOpen.classList.remove(`is-open`)
        } else {
            rSearch.style.minWidth = (rFrame.scrollWidth-10) + `px`
            rSearch.classList.add(`is-open`)
            searchOpen.classList.add(`is-open`)
        }
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

if (indMess) {
    indMess.addEventListener(`click`, function (e) {
        const sendEmailFrame = document.querySelector(`.b-design__select__drop`)

        if (sendEmailFrame.style.maxHeight) {
            sendEmailFrame.classList.remove(`is-show`)
            sendEmailFrame.style.maxHeight = null
        } else {
            sendEmailFrame.style.maxHeight = sendEmailFrame.scrollHeight + `px`
            sendEmailFrame.classList.add(`is-show`)
        }
    })
}

if (cardbtn) {
    const cardInput = document.querySelectorAll(`.js-card-data`)
    cardbtn.addEventListener(`click`, function () {
        if (cardbtn.text === `Edit`) {
            cardbtn.text = `Save`
            cardInput.forEach(function (e) {
                e.classList.remove(`inp_readonly`)
                e.removeAttribute(`readonly`)
            })
        } else if (cardbtn.text === `Save`) {
            cardbtn.text = `Edit`
            cardInput.forEach(function (e) {
                e.classList.add(`inp_readonly`)
                e.setAttribute(`readonly`, `readonly`)
            })
        }
    })
}

if (clear) {
    clear.addEventListener(`click`, function () {

    })
}

if (frameNext) {
    frameNext.forEach((e) => {
        e.addEventListener(`click`, () => {
            const frame = e.closest(`.b-mdFrame__box`)
            frame.classList.remove(`is-visible`)
            frame.nextElementSibling.classList.add(`is-visible`)
            document.querySelector(`.b-textBlock`).classList.add(`is-hide`)
        })
    })

    framePrev.forEach((e) => {
        e.addEventListener(`click`, () => {
            const frame = e.closest(`.b-mdFrame__box`)
            frame.classList.remove(`is-visible`)
            frame.previousElementSibling.classList.add(`is-visible`)
        })
    })
}


const formInput = document.querySelectorAll(`.form-input .inp`)
formInput.forEach((e) => {
    e.addEventListener(`input`, () => {
        if (e.value.length > 0) {
            e.classList.add(`length`)
        } else {
            e.classList.remove(`length`)
        }
    })
})
const textBlock = document.querySelector(`.b-textBlock`)

if (textBlock) {
    const textBlockhide = textBlock.querySelector(`.js-hide`)
    const blockTitle = document.querySelector(`.b-textBlock__title`)

    blockTitle.addEventListener(`click`, (e) => {
        textBlock.classList.remove(`is-hide`)
        textBlock.classList.add(`is-show`)
    })

    textBlockhide.addEventListener(`click`, () => {
        textBlock.classList.remove(`is-show`)
        textBlock.classList.add(`is-hide`)
    })
}

const jsone = document.querySelector(`.js-one`)
    if (jsone) {
    jsone.addEventListener(`click`, (e) => {
        textBlock.classList.remove(`is-hide`)
    })
}
