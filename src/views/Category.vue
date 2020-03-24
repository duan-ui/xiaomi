<template>
    <div class="category">
     <van-nav-bar  title="分类" left-arrow>
        <van-icon name="search" slot="right" />
     </van-nav-bar>
     <div class="content">
         <div class="left"  ref="left">
             <div class="item" 
             v-for="(item,index) in cate"  
             :key="index"
             :class="{'active':index==current}"
             @click="changeCur(index)"
             >
                 {{item.category_name}}
            </div>
         </div>
         <div class="right">right</div>
     </div>
    </div>
</template>
<script>
export default {
    data(){ return {
        cate:[],//分类信息
        current:0,// 当前被选择的item
       
    }},
    created(){
        this.getCate();
    },
    methods:{
        changeCur(index){
            this.current = index;
            let left = this.$refs.left; //选择到left
            let items = document.querySelectorAll(".left .item"); //选择到items
            let el = items[index] //当前被单击的item
            let leftH = left.offsetHeight;//left 高
            left.scrollTop = el.offsetTop-leftH/2-el.offsetHeight/2;
            // 设置left顶部滚动的高是=当前单击元素与left顶部的距离-left高度一般-单击元素自己高度一般
        },
        // 获取分类
        getCate(){
            this.$http.get("/mi/category.php")
            .then(res=>{
                // console.log(res.data);
                this.cate = res.data.data;
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }
}
</script>
<style scoped>
     .item.active{color:#f30}
     /* 元素即拥有item 也拥有 active  class类名*/
    .category{ display: flex; flex-direction: column;  }
    .content{ flex:1; /* 自适应高 */ display: flex; height: 100%; overflow:hidden; }
    .left{  width:1.5rem; height: 100%; overflow: auto; border-right: 1px solid #fafafa; /*宽1.5rem 高100%； 超出高度隐藏 有边框*/ 
    scroll-behavior: smooth;
    /* left滚动平滑 */
    }
    .left::-webkit-scrollbar{ display:none;}
    /* left 滚动条隐藏 */
    
    .right{ flex:1; /* 自适应宽 */ height: 100%; overflow: auto; }
    .left .item{
        height: .88rem;
        line-height: .88rem;
        text-align: center;
        font-size: .24rem;
        border-bottom:1px solid #fafafa;
        /* 高.88rem，行高.88rem; 文字居中  文字大小.12rem  下边框 */
    }
</style>
