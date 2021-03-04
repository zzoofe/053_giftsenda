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

Vue.component(`table-step`, {
    data: () => {
        return {
            isCheckAll: false,
            show: false,
            colorSel: ``,
            array: [1, 2, 3, 4, 5],
        }
    },

    methods: {
        checkAll() {
            this.show = !this.show
        }
    },

    template: `
      <div>
      <table>
          <tbody>
            <tr>
                <th>
                    <input
                        id="cht1a"
                        type="checkbox"
                        class="form-check-1"
                        @click="checkAll"
                        v-model='isCheckAll'
                    >
                    <label for="cht1a">
                    </label>
                </th>
                <th>Name</th>
                <th>Company</th>
                <th>Email</th>
                <th>Coyntry</th>
                <th>Tags</th>
                <th>Sendas</th>
                <th>Owner</th>
                <th></th>
            </tr>

            <table-step-tr
                v-for="item in array"
                :key="item"
                :item="item"
                :is-sel="show">
            </table-step-tr>
          </tbody>
      </table>
      </div>
    `
})

Vue.component(`table-step-tr`, {
    data() {
        return {
            isSelect: false
        }
    },

    props: {
        item: Number,
        isSel: Boolean,
    },

    methods: {

    },

    template: `
        <tr :class="{sel: isSel}">
        <td>
            <input :id="item"
                   type="checkbox"
                   class="form-check-1"
                   :value="item"
                   @click="isSelect = !isSelect"
                   v-model='isSel'
                   >
            <label :for="item" ></label>
        </td>
        <td>Ivanov</td>
        <td>DSSS inc</td>
        <td>test@mail.ru</td>
        <td>Russia</td>
        <td>#gold_partner</td>
        <td>223</td>
        <td>Ivan Ivanov</td>
        <td>
            <a href="#" class="el-edit">
                <svg>
                    <use xlink:href="img/sprite.svg#edit"></use>
                </svg>
            </a>
        </td>
        </tr>
    `

})

Vue.component(`list-checkbox`, {
    data: () => {
        return {
            isCheckAll: false,
            show: false,
            colorSel: ``,
            person: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        }
    },

    methods: {
        checkAll() {
            this.show = !this.show
        }
    },

    template: `
        <div class="form-listCheck">
            <div class="form-listCheck__scroll" data-simplebar>
                <ul class="form-listCheck__list">
                    <list-checkbox-item :id="item" v-for="item in this.person" />
                </ul>
            </div>
        </div>
    `
})


Vue.component(`list-checkbox-item`, {
    props: {
        id: Number
    },
    data: () => {
        return {
            isCheckAll: false,
            show: false,
            colorSel: ``,
        }
    },

    methods: {
        checkAll() {
            this.show = !this.show
        }
    },

    template: `
        <li class="form-listCheck__item">
            <input type="checkbox" :id="id">
            <label :for="id">
                <span class="bx-name">Ivan Ivanov</span>
                <span class="bx-desc">Lorem ipsum dolor sit amet, consectetur consec adipiscing</span>
                <span class="bx-status">Saved</span>
            </label>
        </li>
    `
})
