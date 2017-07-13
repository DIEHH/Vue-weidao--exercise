<template>
	<div class="login-cont">
		<div class="header">
			<p>&lt;</p>
			<p>登录</p>
			<p>找回密码</p>
		</div>
		<div class="inp">
			<input type="text" placeholder="手机" />
			<input type="password" placeholder="密码" />
		</div>
	</div>
</template>

<script>
	

export default {
	name : "Login",

}

</script>

<style scoped>
	.login-cont{
		height:33.35rem;
		background:#eee;
	}
	.header{
		height:2.2rem;
		background: #000;
		color:#fff;
		display: flex;
		justify-content:space-between;
		line-height: 2.2rem;
		padding:0 0.5rem;
	}
	.header p:nth-child(1){
		font-size:1.2rem;
	}
	.header p:nth-child(3){
		font-size:0.5rem;
		font-weight: 600;
		margin-left:-1.7rem;
	}
	.inp{
		padding:0.5rem;
		height:4.9rem;
	}
	.inp input{
		height:2.2rem;
		border:0;
		width:100%;
		margin-bottom: 0.5rem;
		text-indent: 1rem;
		font-size: 0.7rem;
		color: #555;
	}
</style>
