class Quantity {
    constructor(selector) {
        this.$el = selector
        this.input = this.$el.querySelector(`.el-qua__inp`)
        this.init()
    }

    init() {
        this.clickHandler = this.clickHandler.bind(this)
        this.$el.addEventListener(`click`, this.clickHandler)
    }

    clickHandler(event) {
        const { type } = event.target.dataset
        if (type === `minus`) {
            if (this.input.value > 0) {
                this.input.value--
            }
        } else if (type === `plus`) {
            this.input.value++
        }
    }
}

const quantity = document.querySelectorAll(`.el-qua`)

if (quantity) {
    quantity.forEach(function (e) {
        const qua = new Quantity(e)
    })
}

class SearchFilter {
    constructor(selector) {
        this.$el = selector
        this.input = this.$el.querySelector(`.js-search-filter-input`)
        this.ul = this.$el.querySelector(`.js-search-filter-list`)
        this.li = this.ul.querySelectorAll(`li`)

        this.init()
    }

    init() {
        this.clickHandler = this.clickHandler.bind(this)
        this.input.addEventListener(`input`, this.clickHandler)
    }

    clickHandler(event) {
        const filter = event.target.value.toUpperCase()
        for (let i = 0; i < this.li.length; i++) {
            let label = this.li[i].getElementsByTagName(`label`)[0]
            let txtValue = label.textContent || label.innerText

            if (txtValue.toUpperCase().includes(filter)) {
                this.li[i].style.display = ``
                this.li[i].classList.add(`show`)

            } else {
                this.li[i].style.display = `none`
                this.li[i].classList.remove(`show`)
            }
        }
    }
}

const searchFilter = document.querySelectorAll(`.js-search-filter`)
if (searchFilter) {
    searchFilter.forEach(function (e) {
        const sFilter = new SearchFilter(e)
    })
}

class Color {
    constructor(selector) {
        this.$el = selector
        this.label = this.$el.querySelector(`.form-color__label`)
        this.bg = this.$el.querySelector(`.form-color__bg`)
        this.color = this.$el.querySelector(`.form-color__label__select`)
        this.unit()
    }
    unit() {
        this.open = this.open.bind(this)
        this.label.addEventListener(`click`, () => {
            this.open()
        })
        this.bg.addEventListener(`click`, () => {
            this.close()
        })
    }

    open() {
        this.$el.classList.toggle(`is-open`)
    }

    close() {
        this.$el.classList.remove(`is-open`)
    }
    selectColor(radio) {
        const parent = radio.target.nextElementSibling
        const colorStyle = parent.querySelector(`span`).style.backgroundColor
        this.color.style.backgroundColor = colorStyle
        this.close()
    }
}

const formColor = document.querySelectorAll(`.form-color`)
if (formColor) {
    const radioColor = document.querySelectorAll(`.js-color`)
    formColor.forEach(function (e) {
        const selectColor = new Color(e)
        window.color = selectColor
    })
    radioColor.forEach((e)=>{
        e.addEventListener(`click`, (e)=>{
            window.color.selectColor(e)
        })
    })
}


