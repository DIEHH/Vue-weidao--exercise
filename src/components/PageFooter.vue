<template>
	<nav class="place">
		<router-link to="/"><i class="iconfont icon-shouye"></i><span>首页</span></router-link>
		<router-link to="/classify"><i class="iconfont icon-fenlei"></i><span>分类</span></router-link>
		<router-link to="/cart"><i class="iconfont icon-gouwuche"></i><span>购物车</span></router-link>
		<router-link to="/mine"><i class="iconfont icon-wode"></i><span>我的</span></router-link>
	</nav>
</template>


<script>

export default {
	name : 'Footer'
}

</script>


<style scoped>
	.place{position:fixed;bottom:0;width:100%;border-top:1px solid #999;padding-top:0.2rem;font-weight:600;height: 2.5rem;text-align: center;line-height: 1;max-width:640px;left:0;right:0;margin:auto;z-index: 999;background:#fff;}
	.place span{font-size:0.5rem;}
	nav a{color:#000;display:block;width:25%;height: 2.5rem;float:left;color:#999;}
	.place i{font-size:1.2rem;display:block;}
	.router-link-exact-active{color:#000;}
</style>