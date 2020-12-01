import SimpleBar from 'simplebar'
import 'choices.js/public/assets/scripts/choices.min'
import datepicker from 'js-datepicker'
import './vanillaSelectBox'

const vanillaSelect = document.querySelectorAll(`.js-vanillaSelectBox`)
const choices = document.querySelectorAll(`.js-choice`)
const choicesSearch = document.querySelectorAll(`.js-choice-search`)
const choicesTag = document.querySelectorAll(`.js-choice-tag`)
const date = document.querySelectorAll(`.inp-date`)
const filterTitle = document.querySelectorAll(`.b-filter-box__title span`)
const filterBtn = document.querySelector(`.b-filterBtn span`)
const filter = document.querySelector(`.b-filter`)
const burger = document.querySelector(`.burger`)


// let selectBox = new vanillaSelectBox(`#brandsOne`, {
//     "maxHeight": 200,
//     "search": true,
//     "placeHolder": "Choose a brand..."
// })

// if (vanillaSelect) {
//     vanillaSelect.forEach(function (e) {
//         console.log(111)
//         const selectBox = new vanillaSelectBox(e, {
//                 "maxHeight": 200,
//                 "search": true,
//                 "placeHolder": "Choose a brand..."
//         })
//     })
// }

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
    filterTitle.forEach(function (e) {
        e.addEventListener(`click`, function (e) {
            e.preventDefault()
            const el = e.target
            const panel = el.parentElement.nextElementSibling
            el.classList.toggle(`is-active`)
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

burger.addEventListener(`click`, function (e) {
    this.classList.toggle(`open`)
})
