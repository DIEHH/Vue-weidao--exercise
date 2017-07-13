<template>
	<div class="nrow">
        <div class="header-third">
            <div class="add-plan">添加待办</div>
            <div class="today-plan">
                <div class="today-plan-member">0/8</div>
                <div class="today-plan-text">今日待办</div>
            </div>
            <div class="plan-contant">
                <div class="swiper-container swiper-container-horizontal swiper-container-vertical" id="m-mission">
                    <div>
                        <div class="swiper-slide swiper-slide-active" style="width: 170px; height: 42px;">
                            <div class="mission">
                                <img class="mission-img" src="http://img.weidao.com/mindex/admin@3x.png">
                                <div class="mission-row">
                                    <div class="mission-head">
                                        <div class="mission-title">天天八杯水</div>
                                        <div class="mission-schedule">未完成</div>
                                    </div>
                                    <div class="mission-text">
                                        一天八杯水保持健康…
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name : 'ToDo'
	}
</script>

<style>
	.header-third {	
	    flex-direction: row;
	    display: flex;
	    align-items: center;
	    justify-content: space-between;
	    height: 3.8rem;
	    border-bottom: .5px solid #ddd;
	}
	.add-plan {
    	font-size: .6rem;
	    color: #191919;
	    padding-top: 1.3rem;
	    background: url(http://img.weidao.com/mindex/add.png)center 0px no-repeat;
	    background-size: 1rem;
	}
	.today-plan {
	    flex-direction: column;
	    display: flex;
	    color: #191919;
	}
	.today-plan-member {
	    font-family: "DIN Condensed";
	    font-size: 1.5rem;
	    font-weight: bold;
	    line-height: 1.3rem;
	    text-align: center;
	}
	.today-plan-text {
	    font-size: .6rem;
	    line-height: 1;
	}
	.plan-contant {
	    height: 2.1rem;
	    width: 8.5rem;
	    overflow: hidden;
	}
	.swiper-container {
	    margin: 0 auto;
	    position: relative;
	    overflow: hidden;
	    padding-bottom: 0;
	    z-index: 1;
	}
	.mission {
	    flex-direction: row;
	    display: flex;
	    align-items: center;
	    justify-content: space-around;
	}
	.mission-img {
	    width: 2.1rem;
	    height: 2.1rem;
	    border-radius: 30px;
	    display: block;
	}
	.mission-row {
	    flex-direction: column;
	    display: flex;
	}
	.mission-head {
	    flex-direction: row;
	    display: flex;
	    align-items: center;
	    justify-content: space-between;
	    color: #191919;
	    font-size: .6rem;
	}
	.mission-title {
    font-weight: bold;
    width: 4rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
	}
	.mission-text {
	    font-size: .6rem;
	    color: #A7A7A7;
	    width: 6rem;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
</style>