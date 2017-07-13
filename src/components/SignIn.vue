<template>
	<div class="nrow">
        <div class="header-second">
            <div class="sign"></div>
            <div class="header-second-hl"></div>
            <div class="header-second-sound"></div>
            <div class="swiper-up">
                <div id="m-index-up" class="swiper-container-vertical swiper-container-flip">
                    <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
                    	<div class="swiper-slide up swiper-slide-active" turl="http://m.weidao.com/weidao/product/mobile/content/201512/32090.html" style="">
                    		<div class="btitle">开春回暖吃鸡蛋</div>
                    		<div class="btext">开春回暖，老张家的散养土鸡下蛋了！以纯粮、虫子、野草为食，辅以玉米粒、青菜等喂养，生长缓慢却营养均衡、天然健康。</div>
                        </div>
                        <div class="swiper-slide up swiper-slide-next" turl="http://m.weidao.com/weidao/product/mobile/content/201703/33966.html" style="">
                         	<div class="btitle">辉山梦享+安睡配方奶粉来啦！</div>
                         		<div class="btext">夜间0点-3点采奶，天然褪黑素，让爸妈睡个安心觉！</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
	export default {
		name : 'SignIn'
	}
</script>

<style>
	.nrow {
	    margin: 0 .8rem 0 .8rem;
	    position: relative;
	}
	.header-second {
	    flex-direction: row;
	    display: flex;
	    align-items: center;
	    justify-content: space-between;
	    height: 2.35rem;
	    border-bottom: .5px solid #ddd;
	}
	.sign {
	    color: #191919;
	    background: url(http://img.weidao.com/mindex/sigin@3x.png) center no-repeat;
	    background-size: 3.2rem 1.4rem;
	    width: 3.2rem;
	    height: 1.4rem;
	}
	.header-second-sound {
	    background: url(http://img.weidao.com/mindex/Page%201@3x.png) center no-repeat;
	    background-size: .65rem .75rem;
	    width: .65rem;
	    height: .75rem;
	}
	.swiper-up {
	    width: 65%;
	    height: 40px;
	    line-height: 1;
	    overflow: hidden;
	}
	#m-index-up {
		width: 100%;
		height: 100%;
	}
	.swiper-slide.up {
	    padding: 0.2rem;
	}
	.swiper-slide {
	    -webkit-transform-style: preserve-3d;
	    -ms-transform-style: preserve-3d;
	    transform-style: preserve-3d;
	    -webkit-flex-shrink: 0;
	    flex-shrink: 0;
	    width: 100%;
	    height: 100%;
	    position: relative;
	}
	.btitle {
	    font-size: 0.7rem;
	    font-weight: 600;
	    margin-bottom: .2rem;
	}
	.btext {
	    font-size: 0.6rem;
	    width: 85%;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.swiper-wrapper{animation: bounce-in 10s 5s infinite;}
	@keyframes bounce-in {
	  0% {
	    transform: translate3D(0,0,0);
	  }
	  10% {
	    transform: translate3D(0,-36px,0);
	  }
	  20% {
	    transform: translate3D(0,-36px,0);
	  }
	  30% {
	    transform: translate3D(0,-36px,0);
	  }
	  40% {
	    transform: translate3D(0,-36px,0);
	  }
	  50% {
	    transform: translate3D(0,-36px,0);
	  }
	  60% {
	    transform: translate3D(0,-36px,0);
	  }
	  70% {
	    transform: translate3D(0,0,0);
	  }
	  80% {
	    transform: translate3D(0,0,0);
	  }
	  90% {
	    transform: translate3D(0,0,0);
	  }
	  100% {
	    transform: translate3D(0,0,0);
	  }
	}
	




</style>