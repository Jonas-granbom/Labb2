Vue.component('serviced-bikes', {
    template: `<div>  <button v-on:click=servicedBikes()> Finish bike </button> {{ counter }} bikes serviced</div>`,
    data: function () {
        return {
            counter: 0

        }
    },
    methods: {
        servicedBikes() {
            this.counter += 1;

        }
    }

})
;

var app = new Vue({
    el: '#bike-service',
    data: {
        newItem: '',
        newBike: '',
        listItems: [],
        bike: ''
    }

    ,
    methods:
        {
            addItem: function () {
                this.listItems.push(this.newItem)
            }
            ,
            removeItem: function (index) {
                this.listItems.splice(index, 1)
            }
            ,
            addBike: function () {
                this.bike = this.newBike
            }
        }
})