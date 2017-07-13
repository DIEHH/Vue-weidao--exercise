<template>
	<div>
		<div class="personal-made">
	        <div class="members-icon">
	        	<div class="member-icon1"  data-m="1" style="z-index: 719; left: 0px;"></div>
	        	<div class="member-icon2 m_hidden"  data-m="2" style="z-index: 718; left: 7px;"></div>
	        	<div class="member-icon3 m_hidden"  data-m="3" style="z-index: 717; left: 14px;"></div>
	        	<div class="member-icon0 hidden" data-m="1" style="z-index: 719; left: 0px;"></div>
			</div>
			<a id="page-g-search">
				<span class="personal-msearch">您的体质适合这些</span>
			</a>
			<div class="index-hl"></div>
			<div class="personal-caregory-icon"></div>
		</div>
		<div class="member-contant hidden">
            <div class="member-add">
                <div class="member-add-text">添加成员</div>
            </div>
        </div>
	</div>
</template>

<script>
	export default {
		name : 'PersonalMade'
	}
</script>

<style>
	.personal-made {
    	position: absolute;
	    left: 12%;
	    top: 16%;
	    z-index: 100;
	    width: 76%;
	    background: #FFFFFF;
	    box-shadow: 0 4px 5px 0 rgba(0,0,0,0.13);
	    border-radius: 4px;
	    flex-direction: row;
	    display: flex;
	    align-items: center;
	    justify-content: space-around;
	    height: 2.5rem;
	}
	.members-icon {
	    position: relative;
	    height: 2.5rem;
	    width: 3rem;
	}
	.members-icon div {
	    position: absolute;
	    top: .5rem;
	}
	.m_hidden {
  	  display: none;
	}
	.member-icon1 {
	    background: url(http://img.weidao.com/mindex/admin@3x.png) center no-repeat;
	    background-size: 1.6rem;
	    width: 1.6rem;
	    height: 1.6rem;
	    border-radius: 60px;
	}
	.member-icon2 {
	    background: url(http://img.weidao.com/mindex/admin2@3x.png) center no-repeat;
	    background-size: 1.6rem;
	    width: 1.6rem;
	    height: 1.6rem;
	    border-radius: 60px;
	}
	.member-icon3 {
	    background: url(http://img.weidao.com/mindex/admin3@3x.png) center no-repeat;
	    background-size: 1.6rem;
	    width: 1.6rem;
	    height: 1.6rem;
	    border-radius: 60px;
	}
	.member-icon0 {
	    background: url(http://img.weidao.com/mindex/Oval%203@3x.png) center no-repeat;
	    background-size: 1.6rem;
	    width: 1.6rem;
	    height: 1.6rem;
	}
	.index-hl {
	    width: 0;
	    height: 1.6rem;
	    border-right: .5px solid #d8d8d8;
	}
	.personal-caregory-icon {
	    background: url(http://img.weidao.com/mindex/category-menu.png) center no-repeat;
	    background-size: .8rem;
	    width: 1rem;
	    height: 1rem;
	}
	.hidden {
	    display: none!important;
	}
	.member-contant {
	    background: #FFFFFF;
	    box-shadow: 0 4px 5px 0 rgba(0,0,0,0.13);
	    border-radius: 6px;
	    width: 76%;
	    position: absolute;
	    z-index: 90;
	    top: 24%;
	    left: 12%;
	    flex-direction: column;
	    display: flex;
	    padding: 1rem .75rem 0;
	}
	.member-add {
	    height: 1.8rem;
	    width: 100%;
	    display: flex;
	    flex-direction: row;
	    align-items: center;
	    justify-content: center;
	}
	.member-add-text {
	    font-size: .7rem;
	    color: #191919;
	    padding-left: 1rem;
	    background: url(http://img.weidao.com/mindex/+%20copy%203@3x.png) left center no-repeat;
	    background-size: .6rem;
	    line-height: 1.2rem;
	}
</style>