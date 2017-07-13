<template>
	<div class="content">
		<div class="header">
			<i></i>
			<p></p>
			<span></span>
		</div>


		<PageFooter />
	</div>
</template>

<script>
import PageFooter from '../components/PageFooter'

export default {
	name : 'Mine',
	components:{
		'PageFooter' : PageFooter
	}
}


</script>

<style scoped>
	.header{
		display:flex;
		justify-content:space-between;
		height:2.2rem;
		width:100%;
		padding:0 0.5rem;
		background: #1b1b1b;
		color:#fff;
		line-height:;
	}
	

</style>