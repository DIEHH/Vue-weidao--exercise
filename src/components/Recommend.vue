<template>
	<div class="reco-cont">
		<div class='reco-item'>
			<div class='item-cont'>
				<div class='item-header'>
					{{ people }}收藏
				</div>
				<div class="item-img">
					<a :href="href">
						<img :src="src" alt="">
					</a>
				</div>
				<div class="item-text">
					<p> {{ title }} </p>
					<p> {{ text }} </p>
				</div>
				<p class="price">
					<span> {{ price }} </span>
					<span> {{ letter }} </span>
					<i> {{ cost }} </i>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name : 'Recommend',
		data(){
			return {
				people : 212,
				href : "http://m.weidao.com/weidao/product/mobile/content/201609/33174.html",
				src : "http://image.weidao.com/upload/image//upload/image/201609/e6ab383e-9f04-42ed-b0c1-75ba47e6bfd0.jpg",
				title : "丽芝士纳宝帝奶酪威化饼干58g*5",
				text : "印尼进口 浓浓芝士香",
				price : 9.9,
				letter : "元/件",
				cost : "25元"

			}
		}

	}
</script>

<style scoped>
	.reco-cont{
    	padding: 0 .3rem;
	}
	.reco-item{
		width:46%;
    	height:15.92rem;
    	float:left;
	}
	.item-cont{
		width:100%;
		height:15rem;
		background: #fff;
		box-sizing:border-box;
		border: .5px solid rgba(0,0,0,.1);
	}
	.item-header{
		height:2.2rem;
		width:100%;
	    padding:.5rem .75rem .5rem 1.6rem;
	    box-sizing:border-box;
	    text-align: left;
	    font-size: .6rem;
   		color: #999;
   		border-bottom: 1px solid #eee;
	}
	.item-img img{
		width:100%;
	}
	.item-text{
	    padding:0.3rem;
	}
	.item-text p{
	    word-wrap: normal;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    overflow: hidden;
	    text-align: left;
	}
	.item-text p:nth-child(1){
	    font-size: 0.7rem;
	    color:#666;
	}


	.item-text p:nth-child(2){
	    font-size: 0.4rem;
	    color:#999;
	}
	.price{
		text-align: center;	
	}
	.price span{
		color: #EA4335;
		font-size: 0.8rem;
	}
	.price i{
	   font-style: normal;
	   color: #999;
 	   font-size: .5rem;
	}
</style>
