class DropDown {
    constructor(selector) {
        this.$el = document.querySelector(selector)
        this.init()
    }

    init() {
        this.clickHandler = this.clickHandler.bind(this)
        this.$el.addEventListener(`click`, this.clickHandler)
        this.$el.insertAdjacentHTML(
            `beforeend`,
            `<div class="form-multSelect__over" data-type="over"></div>`
        )
    }

    clickHandler(event) {
        const { type } = event.target.dataset
        if (type === `title`) {
            this.toggle()
        } else if (type === `over`) {
            this.close()
        }
    }

    get isOpen() {
        return this.$el.classList.contains(`is-open`)
    }

    toggle() {
        this.isOpen ? this.close() : this.open()
    }

    open() {
        this.$el.classList.add(`is-open`)
    }

    close() {
        this.$el.classList.remove(`is-open`)
    }
}

const multSelect = document.querySelector(`.form-multSelect`)
if (multSelect) {
    window.drop = new DropDown(`.form-multSelect`)
}
