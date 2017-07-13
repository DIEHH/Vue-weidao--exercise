<template>
	<div class="cont cart-cont">
		<div class='cart-head'>
			<h1>购物车</h1>
		</div>
		<div class="cart-content">
				<a href=""><i></i>还是空的，去逛逛吧</a>
		</div>
		<div class="reco">
			<div class="recommend">
				<div class="bor"></div>
				<span>为您推荐</span>
			</div>
			<Recommend />
		</div>

		<PageFooter />
	</div>
</template>

<script>
import PageFooter from '../components/PageFooter'
import Recommend from '../components/Recommend'


export default {
	name : 'Cart',
	components:{
		'PageFooter' : PageFooter,
		'Recommend' : Recommend
	}
}


</script>

<style scoped>
	html,body{
		height:100%;
	}
	.cart-cont{
		background-color: #efeff4;
		text-align: center;
		height:100%;
	}
	.cart-head{
		height:2.2rem;
		background:#000;
	}
	.cart-head{
		height:2.2rem;
		line-height:2.2rem;
		color:#fff;
	}
	.cart-content{
		padding-top:2.2rem;
	    height: 4.65rem;
	    background: url(http://image.weidao.com/upload/userfiles/files/shop_images/m_category/m-cart-empty1.png) center 0px no-repeat;
    	background-size: 100% 100%;
	}
	.cart-content a{
		color:#a0a0a0;
		display:block;
		width:10rem;
		height:1.9rem;
		line-height: 1.9rem;
		margin:0 auto;
		border:1px solid #a4a4a4;
		border-radius: 25px;
		font-size: .76rem;
	}
	.reco{

	}
	.recommend{
		height:2.2rem;

	}
	.bor{
		height:1.1rem;
		border-bottom:1px solid #a4a4a4;
		box-sizing:border-box;
	}
	.recommend span{    
		font-size: .7rem;
	    color: #999;
	    background: #EFEFF4;
	    display: block;
	    width: 4rem;
	    margin: -0.6rem auto 0;
	}
	
</style>