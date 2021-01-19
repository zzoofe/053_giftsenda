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
