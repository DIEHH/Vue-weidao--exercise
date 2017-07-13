<template>
	<div class="nrow header-tools">
        <div class="tool-health"></div>
        <div class="tool-vip"></div>
        <div class="tool-conpany" ></div>
        <div class="tool-q-a" ></div>
    </div>
</template>

<script>
	export default {
		name : 'Choice'
	}
</script>

<style>
	.nrow {
	    margin: 0 .8rem 0 .8rem;
	    position: relative;
	}
	.header-tools {
	    padding: 2rem 0 .7rem;
	    flex-direction: row;
	    display: flex;
	    align-items: center;
	    justify-content: space-around;
	    border-bottom: .5px solid #ddd;
	}
	.tool-health {
	    background: url(http://img.weidao.com/mindex/health.png) center no-repeat;
     	background-size: 1.65rem 2.75rem;
	    width: 1.65rem;
	    height: 2.75rem;
	}
	.tool-vip {
	    background: url(http://img.weidao.com/mindex/vip.png) center no-repeat;
		background-size: 1.65rem 2.75rem;
	    width: 1.65rem;
	    height: 2.75rem;;
	}
	.tool-conpany {
	    background: url(http://img.weidao.com/mindex/conpany.png) center no-repeat;
	    background-size: 1.65rem 2.75rem;
	    width: 1.65rem;
	    height: 2.75rem;	
	}
	.tool-q-a {
	    background: url(http://img.weidao.com/mindex/q-a.png) center no-repeat;
	   background-size: 1.65rem 2.75rem;
	    width: 1.65rem;
	    height: 2.75rem;
	}
</style>