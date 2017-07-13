<template>
	<ul>
		<li class="pdct-list">
			<div class="pdct-img">
				<a :href="list.href">
					<img :src="list.src" alt="">
				</a>
			</div>
			<div class="pdct-contant">
				<p class="pdct-name">{{list.name}}</p>
				<p class="pdct-text">{{list.text}}</p>
				<div class="pdct-price">
					<p class='pdct-price-number'>{{list.price}}</p>
					<p class="leb">{{list.leb}}</p>
				</div>
				<div class="icon" pid="33044"></div>
			</div>
		</li>
	</ul>
</template>

<script>
	export default {
		name : 'TabList',
		props:['list']
	}
</script>

<style>
	.pdct-list {
	    flex-direction: row;
	    display: flex;
	    align-items: center;
	    justify-content: space-between;
	    height: 5.3rem;
	}
	.pdct-img {
	    width: 4.35rem;
	    height: 4.35rem;
	}
	.pdct-img img {
	    width: 100%;
	    height: auto;
	}
	.pdct-contant {
	    flex-direction: column;
	    display: flex;
	    position: relative;
	    width: 11.75rem;
	    border-bottom: .5px solid #ddd;
	    padding: .55rem 0 .3rem 0;
	}
	.pdct-name {
	    font-size: .7rem;
	    color: #191919;
	    line-height: 1rem;
	    width: 11rem;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.pdct-text {
	    font-size: .6rem;
	    color: #A7A7A7;
	    line-height: 1rem;
	    margin-bottom: .2rem;
	    width: 11rem;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.pdct-price {
	    flex-direction: row;
	    display: flex;
	    align-items: flex-end;
	    justify-content: flex-start;
	    color: #FF432b;
	    margin-bottom: .3rem;
	}
	.pdct-price-number {
	    font-size: .9rem;
	    line-height: 1rem;
	}
	.leb {
	    font-size: .5rem;
	}
	.icon{
		position: absolute;
	    right: 0;
	    top: 2.1rem;
	    background: url(http://img.weidao.com/mindex/gwc.png) center center no-repeat!important;
	    background-size: 1.5rem!important;
	    width: 1.5rem!important;
	    height: 1.5rem !important;
	}
</style>