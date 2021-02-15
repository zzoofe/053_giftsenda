import Vue from 'vue/dist/vue'

Vue.component(`button-counter`, {
    data: () => {
        return {
            count: 0
        }
    },
    template: `
        <div class="el-qua">
            <div @click="count>0 ? count-- : ''" class="el-qua__btn">-</div>
            <input type="text" :value="count" class="el-qua__inp">
            <div @click="count++" class="el-qua__btn">+</div>
        </div>
    `
})

Vue.component(`color`, {
    data: () => {
        return {
            show: false,
            colorSel: ``
        }
    },

    methods: {
        open() {
            this.show = !this.show
        },

        select(color) {
            this.colorSel = color
            this.show = false
        }
    },

    template: `
        <div
            :class="{ 'is-open': show }"
            class="form-color">
            <div class="form-color__label" @click="open">
                <span class="form-color__label__title">Color</span>
                <span :style="{ 'background-color': colorSel }" class="form-color__label__select"></span>
            </div>
            <div class="form-color__list">
                <ul>
                    <li>
                        <input id="color1" type="radio" name="color" class="js-color">
                        <label for="color1"><span @click="select('rgb(0, 102, 153)')" style="background: rgb(0, 102, 153);"></span></label>
                    </li>
                    <li>
                        <input id="color2" type="radio" name="color" class="js-color">
                        <label for="color2"><span @click="select('rgb(227, 70, 70)')" style="background: rgb(227, 70, 70);"></span></label>
                    </li>
                    <li>
                        <input id="color3" type="radio" name="color" class="js-color">
                        <label for="color3"><span @click="select('rgb(68, 195, 141)')" style="background: rgb(68, 195, 141);"></span></label>
                    </li>
                    <li>
                        <input id="color4" type="radio" name="color" class="js-color">
                        <label for="color4"><span @click="select('rgb(255, 230, 1)')" style="background: rgb(255, 230, 1);"></span></label>
                    </li>
                    <li>
                        <input id="color5" type="radio" name="color" class="js-color">
                        <label for="color5"><span @click="select('rgb(205, 145, 145)')" style="background: rgb(205, 145, 145);"></span></label>
                    </li>
                    <li>
                        <input id="color6" type="radio" name="color" class="js-color">
                        <label for="color6"><span @click="select('rgb(255, 186, 105)')" style="background: rgb(255, 186, 105);"></span></label>
                    </li>
                    <li>
                        <input id="color7" type="radio" name="color" class="js-color">
                        <label for="color7"><span @click="select('rgb(108, 112, 133)')" style="background: rgb(108, 112, 133);"></span></label>
                    </li>
                    <li>
                        <input id="color8" type="radio" name="color" class="js-color">
                        <label for="color8"><span @click="select('rgb(255, 105, 105)')" style="background: rgb(255, 105, 105);"></span></label>
                    </li>
                </ul>
            </div>
            <div class="form-color__bg" @click="open"></div>
        </div>
    `
})
