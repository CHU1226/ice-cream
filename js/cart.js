var vm = new Vue({
	el: "#app",
	data: {
		products: [
			{
				name: "經典香草",
				content: "採用馬加斯加的香草豆莢下去取出香草籽，連帶香草莢，下去熬煮讓冰淇淋充分帶有天然的淡淡香草味，每一份都帶有許多的香草籽，非一般市面化學香精可比，讓天然的味道充滿每一分味蕾。",
				price: 60,
				thumb: "img/product1.png",
				amount: 0,
				amountShow: 1,
				id: "tab1",
			},
			{
				name: "蘭姆葡萄",
				content: "蘭姆酒是由甘蔗釀造蒸餾而成的酒，我們用葡萄乾泡入蘭姆酒，讓每一顆葡萄乾都吸入飽滿的蘭姆酒後才下去製作，搭配鮮奶讓冰淇淋每一口都有淡淡的蘭姆香喔。",
				price: 60,
				thumb: "img/product2.png",
				amount: 0,
				amountShow: 1,
				id: "tab2",
			},
			{
				name: "奶油蜜糖",
				content: "我們是用白蘭地奶酒下去調配製成冰淇淋，吃起來有淡淡酒香但是沒有酒氣，更因為它裡面還有 巧克力 焦糖 香草	奶油等元素，淡淡清香爽口的冰淇淋一直是少女的最愛。",
				price: 60,
				thumb: "img/product3.png",
				amount: 0,
				amountShow: 1,
				id: "tab3",
			},
			{
				name: "黑芝麻",
				content: "採用台灣黑芝麻，黑芝麻有著保健養身的功效，我們將新鮮黑芝麻，研磨成粉過篩後加入鮮奶中熬煮製做出的冰淇淋，不僅沒有油耗味更有著芝麻香。",
				price: 50,
				thumb: "img/product4.png",
				amount: 0,
				amountShow: 1,
				id: "tab4",
			},
			{
				name: "香蕉可可",
				content: "用烤過後的香蕉加入鮮奶裡在加入些許巧克力讓味道產生變化，熬煮製作而成的冰淇淋每一口有天然香蕉的香，又有巧克力的味道輔佐在後，是一般外面吃不到的天然冰淇淋。",
				price: 50,
				thumb: "img/product5.png",
				amount: 0,
				amountShow: 1,
				id: "tab5",
			},
			{
				name: "香濃芋頭",
				content: "採用大甲芋頭去蒸煮過後打成泥加入鮮奶，再熬煮做成冰淇淋，每一口都有細細的芋頭顆粒外更有著芋頭天然的微香。",
				price: 50,
				thumb: "img/product6.png",
				amount: 0,
				amountShow: 1,
				id: "tab6",
			},
			{
				name: "苦甜巧克力",
				content: "我們是用委內瑞拉 72%的巧克力下去調製而成。跟一般甜膩的巧克力不同，除了有濃厚的巧克力味道外，我們還加入了橙酒，不僅更能帶出巧克力的味道外更有些許橙香。",
				price: 60,
				thumb: "img/product7.png",
				amount: 0,
				amountShow: 1,
				id: "tab7",
			},
			{
				name: "戀戀草莓",
				content: "上面鋪著我們自己做的酒香草莓丁，滿滿的酒香草莓丁搭配著草莓冰淇淋，草莓的酸與冰淇淋的甜完美融合，是夏季最新上架的商品。",
				price: 60,
				thumb: "img/product8.png",
				amount: 0,
				amountShow: 1,
				id: "tab8",
			},
			{
				name: "芒果雪酪",
				content: "芒果雪酪是我們目前口味中唯一一種不加牛奶製成的冰淇淋，為不能吃牛奶的客人朋友們開發出的冰淇淋。每一口不僅有濃郁的芒果香氣更有著水果的清爽口感。",
				price: 50,
				thumb: "img/product9.png",
				amount: 0,
				amountShow: 1,
				id: "tab9",
			},
			{
				name: "甜蜜蘋果",
				content: "採用新鮮的蘋果打成泥後加入鮮奶中熬煮，在製成冰淇淋時，再調入細碎蘋果，除了可以吃到蘋果的清香外更可吃到蘋果的顆粒。",
				price: 50,
				thumb: "img/product10.png",
				amount: 0,
				amountShow: 1,
				id: "tab10",
			},
		]
	},
	methods: {
		minusOne(product){
			product.amountShow--
			product.amountShow = (product.amountShow < 1) ? 1 : product.amountShow
		},
		addOne(product){
			product.amountShow++
			product.amountShow = (product.amountShow > 9) ? 9 : product.amountShow
		},
		addToCart(product){
			product.amount += product.amountShow
		},
		remove(product){
			product.amount = 0
		},
	},
	computed: {
		productInCart(){
			return this.products
			.filter(p => p.amount)
			.map(p => {
				p.sum = p.price*p.amount
				p.num = p.amount
				return p
			})
			
		},
		total(){
			return this.productInCart
			.reduce((sum,p)=> (sum+p.sum),0)
		},
		num(){
			return this.productInCart
			.reduce((num,p)=> (num+p.num),0)
		}
	}
})


















