<template>
	<div class="cont">
		<div class="nrow" v-for='(ls,idx) in List'>
			<div class="body-header">
				<div class="baby-title"> {{ ls.title }} </div>
				<div class="baby-tab">
	                <div class="baby-contant">
	                    <div class="baby-tab-contant"  @click="handleChange" v-for="(l,idx) in ls.list"> {{ l }} </div>
	                </div>
	            </div>
			</div>
			<TabList v-if="idx == 0" v-for="(list,index) in item1" :list="list" :key="list.id" />
			<TabList v-if="idx == 1" v-for="(list,index) in item2" :list="list" :key="list.id" />
			<TabList v-if="idx == 2" v-for="(list,index) in item3" :list="list" :key="list.id" />
			<TabList v-if="idx == 3" v-for="(list,index) in item" :list="list" :key="list.id" />
			<TabList v-if="idx == 4" v-for="(list,index) in item" :list="list" :key="list.id" />
			<TabList v-if="idx == 5" v-for="(list,index) in item" :list="list" :key="list.id" />
		</div>
	</div>
</template>

<script>
	import TabList from './TabList'	



	export default {
		name: 'Tab',
		data(){
			return {
				List : [
					{title : '基础营养',list : ['全面膳食','免疫调节','肠胃健康','护肝明目','骨骼强健','清热祛火','解压助眠']},

					{title : '母婴儿童',list : ['健康备孕','产后护养','孕妈营养','婴幼儿','儿童成长']},

					{title : '魅力女神',list : ['美容养颜','滋养补血','内分泌','关爱妇科']},

					{title : '精英男士',list : ['提升精力','解酒护肝','前列腺']},

					{title : '减脂瘦身',list : ['减脂达人','增肌塑形']},

					{title : '慢病研究所',list : ['心脏保镖','关节健康','调节血糖']}
				],


				item1 : [
					{src : 'http://image.weidao.com/upload/image//upload/image/201608/f824e867-ee64-4363-b590-7eb3157793d7.jpg',href : 'http://m.weidao.com/weidao/product/mobile/content/201607/33044.html',name: '五常有机稻花香2.5kg',text : '不掺一粒假米，不抛光更营养', price : '69', leb: '元/件'},
					{src : 'http://image.weidao.com/upload/image//upload/image/201705/923169af-5f26-4450-8433-9a0e44c1a7b8.jpg',href : 'http://m.weidao.com/weidao/product/mobile/content/201705/34119.html',name: '硒禾味道富硒猪五花肉500g',text : '肥瘦相间，肉质鲜嫩有嚼头', price : '69', leb: '元/件'},
					{src : 'http://image.weidao.com/upload/image//upload/image/201705/d9934a27-01f0-4cf6-a797-8ed58140368c.jpg',href : 'http://m.weidao.com/weidao/product/mobile/content/201705/34120.html',name: '硒禾味道富硒猪里脊500g',text : '肥瘦相间，肉质鲜嫩有嚼头', price : '69', leb: '元/件'},
					{src : 'http://image.weidao.com/upload/image//upload/image/201702/12b42285-5f5d-47ca-9ee2-317922a8b41a.jpg',href : 'http://m.weidao.com/weidao/product/mobile/content/201702/33889.html',name: '云南纯手工玫瑰牛轧糖90g',text : '好吃不塞牙', price : '24.9', leb: '元/件'}


				],
				item2 : [
					{src : 'http://image.weidao.com/upload/image//upload/image/201704/b0081abc-15ac-43db-827c-94e25d6ca334.jpg',href : 'http://m.weidao.com/weidao/product/mobile/content/201703/33957.html',name: '【包邮】简万豪华刺身拼盘[三文鱼(180±20g)+北极贝5只+北极甜虾10只+ 金枪鱼（180±20g）]',text : '刺身拼盘，极致享受', price : '258', leb: '元/件'},
					{src : 'http://image.weidao.com/upload/image//upload/image/201610/8b9ffbe8-a4f5-4bcd-bf95-6b7943343055.jpg',href : 'http://m.weidao.com/weidao/product/mobile/content/201601/32342.html',name: '加拿大浓缩即食海参65g',text : '7年野生精品，有肉香的海参', price : '239', leb: '元/件'},
					{src : 'http://image.weidao.com/upload/image//upload/image/201703/4ac0cbe8-0808-499e-bd34-6fb4c9672c44.jpg',href : 'http://m.weidao.com/weidao/product/mobile/content/201703/33912.html',name: '内蒙古敖汉旗有机绿豆380g',text : '非转基因，自然生长，原味原色', price : '19.8', leb: '元/件'},
					{src : 'http://image.weidao.com/upload/image//upload/image/201703/4ac0cbe8-0808-499e-bd34-6fb4c9672c44.jpg',href : 'http://m.weidao.com/weidao/product/mobile/content/201703/33912.html',name: '内蒙古敖汉旗有机黑豆380g',text : '非转基因，自然生长，原味原色', price : '17.8', leb: '元/件'}

				],
				item3 : [
					{src : 'http://image.weidao.com/upload/image//upload/image/201702/12b42285-5f5d-47ca-9ee2-317922a8b41a.jpg',href : 'http://m.weidao.com/weidao/product/mobile/content/201702/33889.html',name: '云南纯手工玫瑰牛轧糖90g',text : '香浓牛奶混合玫瑰', price : '24.9', leb: '元/件'},
					{src : 'http://image.weidao.com/upload/image//upload/image/201703/0e049929-6c16-4825-bdd3-5664d31355cd.jpg',href : 'http://m.weidao.com/weidao/product/mobile/content/201703/33930.html',name: '【包邮】手作鲜煮酸梅汤3袋装',text : '酸爽醇厚，桂香扑鼻', price : '48', leb: '元/件'},
					{src : 'http://image.weidao.com/upload/image//upload/image/201610/04f4df90-c911-4964-9817-bf2d8e793def.jpg',href : 'http://m.weidao.com/weidao/product/mobile/content/201512/32050.html',name: 'Ocean Spray CRAISINS 蔓越莓干',text : '不含防腐剂，色素和人造香精', price : '69', leb: '元/件'},
					{src : 'http://image.weidao.com/upload/image//upload/image/201610/8b9ffbe8-a4f5-4bcd-bf95-6b7943343055.jpg',href : 'http://m.weidao.com/weidao/product/mobile/content/201601/32342.html',name: '加拿大浓缩即食海参65g',text : '7年野生精品，有肉香的海参', price : '239', leb: '元/件'}

				]


			}
		},
		components: {
			'TabList' : TabList

		},
		methods:{
			handleChange(){

			}
		}
	}
</script>

<style>
	.cont{
		padding-bottom:2.5rem;
	}
	.active{
		color:red;
	}	
	.body-header {
	    border-top: .5px solid #ddd;
	    border-bottom: .5px solid #ddd;
	    height: 3.1rem;
	    flex-direction: row;
	    display: flex;
	    align-items: center;
	    justify-content: space-between;
	}
	.baby-title {
	    font-size: .8rem;
	    color: #191919;
	    font-weight: bold;
	}
	.baby-tab {
	    width: 10.5rem;
	    overflow-x: hidden;
	    overflow: scroll;
	}
	.baby-contant {
	    white-space: nowrap;
	}
	.baby-tab-contant {
	    font-size: .6rem;
	    font-weight: bold;
	    color: #A7A7A7;
	    line-height: 2.85rem;
	    border-bottom: 5px solid;
	    border-color: transparent;
	    margin: 0 .55rem;
	    display: inline-block;
	}
</style>