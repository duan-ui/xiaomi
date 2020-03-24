<template>
    <div class="swiper-container" v-if="gallery.length">
        <!-- 只有gallery有长度时候才显示swiper -->
        <div class="swiper-wrapper">
            <div class="swiper-slide" 
            v-for="(item,index) in gallery"
            :key="index">
                <img :src="item.url" alt="" width="100%">
            </div>
            
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import "swiper/css/swiper.css"
// 导入node_modules里面的 swiper文件夹 Swiper类
// 导入node_modules里面的 swiper/css/文件夹里面的swiper.css
export default {
    props:["gallery"],
    mounted(){
        // 当页面初始渲染完毕执行
        this.swiper = new Swiper(".swiper-container",{
            loop:true,//自动让最后一张的下一张是第一张
            pagination:{
                el:'.swiper-pagination'//小点指示器
            }
        });
    }
}
</script>
<style>
    .swiper-container{
        height: 200px;
        width: 100%;
    }
    /* 设置幻灯片高与宽 */
    /* 修改小点高亮颜色 */
    .swiper-pagination-bullet-active{
        background-color: #f30;
    }
</style>