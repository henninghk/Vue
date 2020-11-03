var app = new Vue({
    el: '#app',
    data: {
        product: 'Sssssssocks',
        raskemann: 'trykkher',
        passord: 'hei',
        brukernavn:'heit',
    },
    cart: 0,
    metods:{
        addToCarter:function(){
            this.cart =+ 1
        }
    }
})