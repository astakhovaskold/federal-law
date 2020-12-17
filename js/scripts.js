var app = new Vue({
  el: '#app',
  data: {
  	price: 100,
    moral: 15000,
    date_from: null,
    date_to: null
	},
	methods: {
		onSubmit() {
		
		}
	},
	computed: {
		date: function() {
			var date1 = new Date(this.date_from)
			var date2 = new Date(this.date_to)
			var days = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24))
			var bankPoint = 6 // ставка рефинансирования ЦБ РФ 2020
			var person = 1/150 // для физлиц
			var corporate = 1/300 // для юрлиц
			return days * (bankPoint * person) / 100
		},
		fine: function() {
			return Math.round(this.price * this.date) / 2
		},
		total: function() {
			return Math.round(this.price * this.date) * 1 + this.fine * 1 + this.moral * 1
		}
	}
});