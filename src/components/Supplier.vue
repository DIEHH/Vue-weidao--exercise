<template>
	<div class="fx-swiper-container swiper-container-horizontal" id="m-settled">
        <mt-swipe class="slide-su" :auto="4000" id="m-settled-sw" >
	        <mt-swipe-item class="swiper-slide" >
		        <a href="/weidao/business/brandShow.jhtml?id=-9903" external="">
		        	<img class="settled-img" src="http://img.weidao.com/mindex_master_enter/3.png">
		        </a>
	        </mt-swipe-item>
	        <mt-swipe-item class="swiper-slide" >
		        <a href="/weidao/business/brandShow.jhtml?id=-9901" external="">
		        	<img class="settled-img" src="http://img.weidao.com/mindex_master_enter/1.png">
		        </a>
	        </mt-swipe-item>
	        <mt-swipe-item class="swiper-slide" >
		        <a href="/weidao/business/brandShow.jhtml?id=-9907" external="">
		        	<img class="settled-img" src="http://img.weidao.com/mindex_master_enter/4.png">
		        </a>
	        </mt-swipe-item>
	        <mt-swipe-item class="swiper-slide" >
		        <a href="/weidao/business/brandShow.jhtml?id=-9908" external="">
		        	<img class="settled-img" src="http://img.weidao.com/mindex_master_enter/8.png">
		        </a>
	        </mt-swipe-item>
	        <mt-swipe-item class="swiper-slide" >
		        <a href="/weidao/business/brandShow.jhtml?id=-9902" external="">
		        	<img class="settled-img" src="http://img.weidao.com/mindex_master_enter/2.png">
		        </a>
	        </mt-swipe-item>
	        <mt-swipe-item class="swiper-slide" >
		        <a href="/weidao/business/brandShow.jhtml?id=-9904" external="">
		        	<img class="settled-img" src="http://img.weidao.com/mindex_master_enter/5.png">
		        </a>
	        </mt-swipe-item>
	        <mt-swipe-item class="swiper-slide">
		        <a href="/weidao/business/brandShow.jhtml?id=-9905" external="">
		        	<img class="settled-img" src="http://img.weidao.com/mindex_master_enter/6.png">
		        </a>
	        </mt-swipe-item>
	        <mt-swipe-item class="swiper-slide">
		        <a href="/weidao/business/brandShow.jhtml?id=-9906" external="">
		        	<img class="settled-img" src="http://img.weidao.com/mindex_master_enter/7.png">
		        </a>
	        </mt-swipe-item>
        </mt-swipe>
	</div>
</template>

<script>
	import Vue from 'vue'
	import { Swipe, SwipeItem } from 'mint-ui'

	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);


	export default {
		name : 'Supplier',
		components : {
			Swipe,
			SwipeItem
		}
	}
	
</script>

<style>
.slide-su{
	height:1rem;
}#m-settled{
	padding-top:0;
}
	.fx-swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
    padding-top:0 !important;
}.settled-img {
    width: 100%;
    height: 93px;
    margin: 1.2rem 0rem 1.05rem 0rem;
}
</style>