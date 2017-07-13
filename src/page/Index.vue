<template>
	<div>
		<Banner	/>
		<Choice />
		<SignIn />
		<PersonalMade />
		<ToDo />
		<NewProducts />
		<div class="fx-swiper-container swiper-container-horizontal" id="m-settled">
	        <mt-swipe class="slide-su" :show-indicators="false">
		        <mt-swipe-item class="swiper-slide-su" >
			        <a href="/weidao/business/brandShow.jhtml?id=-9903" external="">
			        	<img class="settled-img" src="http://img.weidao.com/mindex_master_enter/3.png">
			        </a>
		        </mt-swipe-item>
		        <mt-swipe-item class="swiper-slide-su" >
			        <a href="/weidao/business/brandShow.jhtml?id=-9901" external="">
			        	<img class="settled-img" src="http://img.weidao.com/mindex_master_enter/1.png">
			        </a>
		        </mt-swipe-item>
		        <mt-swipe-item class="swiper-slide-su" >
			        <a href="/weidao/business/brandShow.jhtml?id=-9907" external="">
			        	<img class="settled-img" src="http://img.weidao.com/mindex_master_enter/4.png">
			        </a>
		        </mt-swipe-item>
		        <mt-swipe-item class="swiper-slide-su" >
			        <a href="/weidao/business/brandShow.jhtml?id=-9908" external="">
			        	<img class="settled-img" src="http://img.weidao.com/mindex_master_enter/8.png">
			        </a>
		        </mt-swipe-item>
		        <mt-swipe-item class="swiper-slide-su" >
			        <a href="/weidao/business/brandShow.jhtml?id=-9902" external="">
			        	<img class="settled-img" src="http://img.weidao.com/mindex_master_enter/2.png">
			        </a>
		        </mt-swipe-item>
		        <mt-swipe-item class="swiper-slide-su" >
			        <a href="/weidao/business/brandShow.jhtml?id=-9904" external="">
			        	<img class="settled-img" src="http://img.weidao.com/mindex_master_enter/5.png">
			        </a>
		        </mt-swipe-item>
		        <mt-swipe-item class="swiper-slide-su">
			        <a href="/weidao/business/brandShow.jhtml?id=-9905" external="">
			        	<img class="settled-img" src="http://img.weidao.com/mindex_master_enter/6.png">
			        </a>
		        </mt-swipe-item>
		        <mt-swipe-item class="swiper-slide-su">
			        <a href="/weidao/business/brandShow.jhtml?id=-9906" external="">
			        	<img class="settled-img" src="http://img.weidao.com/mindex_master_enter/7.png">
			        </a>
		        </mt-swipe-item>
	        </mt-swipe>
		</div>
		<Tab  />
		<div>
			
		</div>
		<PageFooter />
	</div>
</template>

<script>
	import Vue from 'vue'
	import { Swipe, SwipeItem } from 'mint-ui'
	import PageFooter from '../components/PageFooter'
	import Banner from '../components/Banner'
	import SignIn from '../components/SignIn'
	import Choice from '../components/Choices'
	import PersonalMade from '../components/PersonalMade'
	import ToDo from '../components/ToDo'
	import NewProducts from '../components/NewProducts'
	import Tab from '../components/tab'

	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);


	export default {
		name : 'Index',
		components : {
			'PageFooter' : PageFooter,
			'Banner' : Banner,
			'SignIn' : SignIn,
			'Choice' : Choice,
			'PersonalMade' : PersonalMade,
			'ToDo' : ToDo,
			'NewProducts' : NewProducts,
			'Tab' : Tab
		},
		data(){
			return {
				msg : ''
			}
		},
		created(){
		//这其中的this指向vue实例
			var _this = this
			fetch('/login', {
				method: 'GET'
			})
			.then(function(response) {
			    return response.text()
			}).then(function(res) {
				_this.msg = JSON.parse(res).msg
			})
		}
	}


</script>

<style scoped>
	.content{
		padding-top:2.2rem;padding-bottom:2.5rem
	}
	.slide-su{
		height: 6.9rem;
		padding-left: .35rem;
	}
	.swiper-slide-su{
		width:18rem;
	}
	.fx-swiper-container {
	    margin: 0 auto;
	    position: relative;
	    overflow: hidden;
	    z-index: 1;
	    border-top: 1px solid #eee;
	    border-bottom: 1px solid #eee;
	}
	.settled-img {
	    width: 100%;
	    height: 93px;
	    margin: 1.2rem 0rem 1.05rem 0rem;
	}
</style>