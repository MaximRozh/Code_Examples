
Vue.component('color-block', {
    props: ['blockColor'],
    data() {
        return {
            blockHeight: 100
        }
    },
    mounted() {
        this.blockHeight = localStorage.getItem(this._uid);
        },
    watch:{
        blockHeight(newName) {
            localStorage.setItem(this._uid, newName);
            this.blockHeight = newName
        }
    },
    
    template: `<div class="container">
                    <transition name="changeWidth">
                        <div class="block" 
                            :style="{
                                background: blockColor, 
                                height: blockHeight + 'px'
                            }"
                        ></div>
                    </transition>
                    <input id="kiks" class="range" type="range" min="100" max="300" value="100"
                        v-model="blockHeight"       
                    >
                </div>`
})

const app = new Vue({
    el: '#app'
})
