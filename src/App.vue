<template>
  <div id="app">
    <transition 
    enter-active-class="slideInRight animated"
    leave-active-class="slideOutRight animated"
    mode="in-out"
    >
          <router-view class="page"/>
          <!-- 存放页面 -->
    </transition>
    
    <div id="nav">
      <router-link to="/" class="cols ihome">首页</router-link> 
      <router-link to="/cat" class="cols icat">分类</router-link> 
      <router-link to="/about" class="cols iabout">购物车</router-link>
      <router-link to="/user" class="cols iuser">我的</router-link> 
      <!-- router-link 切换页面导航 -->
    </div>
   
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
.page{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: .98rem;
  background-color: #fff;
}

#nav {
  display: flex;
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: .98rem;
  text-align: center;
  background-color: #f0f0f0;
  box-shadow: 0 -2px 4px rgba(200, 200,200, .4);
  box-sizing: border-box;
}
a{
  text-decoration: none;
  color: #777;
}
#nav a {
 /* line-height: .98rem; */
 text-align: center;
 flex: 1;
}
.cols{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cols:before{
  content: '';
  display: block;
  width: 0.49rem;
  height: 0.49rem;
  background-image: url("./assets/home.png");
  background-size: cover;
}
 .icat:before{
   background-image: url("./assets/cat.png");
}
 .iabout:before{
   background-image: url("./assets/cart.png");
}
 .iuser:before{
   background-image: url("./assets/user.png");
}
.router-link-exact-active{
  color: #f30;
}
/* .route-link-active  配置 地址和路由配置有部分匹配 */
</style>
