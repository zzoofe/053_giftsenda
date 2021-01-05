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
