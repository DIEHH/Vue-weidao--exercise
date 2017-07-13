<template>
	<div class="swipe">
		<mt-swipe class="slideBox" :auto="4000">
		  <mt-swipe-item class="slide"><img src="http://image.weidao.com/upload/image//upload/image/201707/056f30fb-d69f-4aa4-8cfc-265ae7c56a8f.jpg" alt=""></mt-swipe-item>
		  <mt-swipe-item class="slide"><img src="http://image.weidao.com/upload/image//upload/image/201707/9b75ff61-2ad6-4549-90d5-ef04071a8c55.jpg" alt=""></mt-swipe-item>
		  <mt-swipe-item class="slide"><img src="http://image.weidao.com/upload/image//upload/image/201707/f37abbb7-a455-4c0b-a7e2-5bb0e41d7a7c.jpg" alt=""></mt-swipe-item>
		  <mt-swipe-item class="slide"><img src="http://image.weidao.com/upload/image//upload/image/201707/7a44bbe4-46c0-46aa-a0d8-af9afac92fb5.jpg" alt=""></mt-swipe-item>
		  <mt-swipe-item class="slide"><img src="http://image.weidao.com/upload/image//upload/image/201707/c8e80a99-1d62-4bb3-8d14-2ddac2d65086.jpg" alt=""></mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	import Vue from 'vue'
	import { Swipe, SwipeItem } from 'mint-ui'

	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);


	export default {
		name : 'Banner',
		components : {
			Swipe,
			SwipeItem
		}
	}

</script>


<style>
	.slideBox {    
    	position: relative;
		width: 100%;
    	height: 6.5rem;
        color: #fff;
        font-size: 30px;
        text-align: center;
	    box-sizing: content-box;
    }
    .mint-swipe:after{
    	content: "";
	    height: 0;
	    display: block;
	    clear: both;
	    visibility: hidden;
    }
    .slide{
	    text-align: center;
	    height: auto;
	    width: 414px;
	    margin-right: 30px
    }
    .mint-swipe-item img{
	    width: 100%;
	    height: auto;
	    max-width: 640px;
	    margin-top: -1rem;
    }
 </style>