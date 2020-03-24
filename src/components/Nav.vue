<template>
    <div class="nav-wrap">
        <div class="nav" ref="scroll">
            <div 
            :class="{'active':index==current}"
            @click="selected($event,index)"
            v-for="(item,index) in navList"
            :key="index"
            class="nav-item">
                {{item.name}}
            </div>
        </div>
        <div class="nav-toggle"
        :class="{'up':showLay==true}"
         @click="showLay=!showLay">
            >
        </div>
        <div class="nav-lay" v-if="showLay">
            <div class="nav-title">标题</div>
            <div class="nav-buttons">
                <div class="btn" 
                @click="btnclick(index)"
                :class="{'active':index==current}"
                v-for="(item,index) in navList"
                :key="index"
                >{{item.name}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["navList"],
    methods:{
        btnclick(index){
           this.showLay=false;
        //  隐藏弹出菜单按钮
           this.current=index;
        //  设置当前选中current
           let items = document.querySelectorAll(".nav-item");
        // 获取到所有的.nav-item
           this.selected({target:items[index]},index);
        // 执行selected 方法({target:和index对应的nav-item},index);
        //  执行selected函数传两个参数 
        // 第一个参数是个对象 对象里面有个target属性 属性值是一个dom节点(.nav-item 对应current的dom节点) 
        // 比如我单击的是btns里面的第2个元素 让后我选择到nav-item里面的第2个元素作为target属性值传递过去
        // 第二个参数是index
        },
        selected(e,index){
            this.current = index;
            let ew = e.target.offsetWidth; // 获取当前单击元素宽
            let el = e.target.offsetLeft;// 元素左侧偏移值
            let elem = this.$refs.scroll; // 获取滚动元素； $refs是vue内置的获取元素对象
            let vw = elem.offsetWidth;// 滚动元素整体的宽;
            // console.log(ew,el,vw);
            elem.scrollLeft = el-vw/2+ew/2;
            // 设置滚动元素的左侧滚动距离为=调整单击元素到画面的中心。
            // 单击的元素滚动到最左侧
            // 最左侧-总宽度一半+当前元素宽度一半
        }
    },
    data(){return {
        current:0,// 当前选中的导航
        showLay:false,//是否显示导航弹出内容
    }}
}
</script>
<style  scoped>
/* scoped 让样式只在当前组件中管用 */
.nav-buttons .btn.active{
    background-color:#ffe8d5;
    color:#f30;
}
.nav-buttons .btn{
    width: 20%; height: 30px; line-height: 30px; margin-bottom: 15px; margin-right: 15px; border-radius: 6px; background-color:#fff; border:1px solid #eee; display: inline-block; text-align: center; color:#777; font-size:14px;
}
.nav-lay{
    position: absolute; left:0; top:44px; width: 100%;
}
.nav-title{
    margin-right: 44px; height: 44px; background-color: #f0f0f0; line-height: 44px; padding-left: 15px; margin-top: -44px; }
.nav-buttons{
    padding: 0 15px;
  
    background-color: #f0f0f0;
}
 
.nav-toggle{
    width: 44px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    color:#777;
    background-color: #f0f0f0;
    transform: rotate(90deg);
    /* transition:all ease .4s; */
}
.up{
     transform: rotate(-90deg);
}
.nav-wrap{
    width: 100%;
    height: 44px;
    display: flex;
    position: relative;
    z-index: 10000;
    background-color: #f0f0f0;
}
.nav{
    flex:1;
    line-height: 44px;
    background-color: #f0f0f0;
    overflow-x:auto;
    /* 水平滚动自动 */
    white-space: nowrap;
    /* 行内元素不换行 */
    scroll-behavior: smooth; 
      /* 滚动平滑 */
  -webkit-overflow-scrolling: touch;
 
  
}
.nav-item{
    display: inline-block;
    /* 转换位行内块 */
    vertical-align: middle;
    /* 垂直居中对齐 */
    padding: 0 15px;
    /* 设置间距 */
    color:#484848;
    /* 设置颜色 */
}
::-webkit-scrollbar{
    display: none;
}
/* 隐藏滚动条 */

.active{color:#f30;}
</style>