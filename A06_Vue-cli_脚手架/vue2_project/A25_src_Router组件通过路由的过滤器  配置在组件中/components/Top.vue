<template>
 <!-- 顶部导航条 -->
 <div class="top">
        <!--版心  清楚浮动的影响-->
        <div class="container clear-both">
            <!-- 左侧欢迎词 -->
            <div class="top-welcome float-left">欢迎来到淘神价官网</div>
            <!-- 右侧导航区 -->
            <div class="navigation float-right">
                <!--导航区实例  -->
                <ul class="top-navigation-items">
                    <!-- 登录/注册 -->
                    <li class="login-register">
                        <a href="#">你好，请登录</a>
                        <a href="#">免费注册</a>
                    </li>
                    <li><a href="#">我的订单</a></li>
                    <li><a href="#">我的京东</a></li>
                    <li><a href="#">企业采购</a></li>
                    <li><a href="#">商家服务</a></li>
                    <li><a href="#">网站导航</a></li>
                    <li><a href="#">手机京东</a></li>
                    <li><a href="#">网站无障碍</a></li>
                </ul>
            </div>

        </div>
    </div>
 
</template>

<script>
export default {
  name: "Top",
};
</script>

<style scoped>
/* ----------------------------导航条---------------------------------- */

.top {
  /* 背景颜色 */
  background-color: #e3e4e5;
  /* 边距 */
  border: 1px solid #ddd;
  /* 高度 */
  height: 30px;

}

.top-navigation-items{
  /*清除空白处 */
  font-size: 0;
}
/* 左侧欢迎词 */
.top-welcome {
  /* 字体大小 */
  font-size: 20px;
  /* 字体居中 */
  text-align: center;
  /* 行距 */
  line-height: 30px;
  /* 字符 粗体 */
  font-weight: bold;
  /*  字符颜色*/
  color: red;
}

/* 右侧导航区 */
.top-navigation-items li {
  /* 左浮动 */
  float: left;
 


}

/* 右侧导航区中的a标签 */
.top-navigation-items li >a {
   /* 字体大小 */
  font-size: 12px;
  /*字体类型  */
  font-family: Microsoft YaHei;
   /* 字体居中 */
  text-align: center;
  /* 行距 */
  line-height: 30px;
  /* 边框 */
  border-right: 1px solid #999;
  /* 内边框 */
  padding-right: 10px;
  padding-left: 10px;
}

/* 右侧导航区中的第一个a标签 */
.login-register :first-child {
  /* 边框 */
  border-right: 0;
   /* 内边框 */
  padding-left: 0;
  padding-right: 0;
  
}

/* 右侧导航区中的最后一个a标签 */
.top-navigation-items li:last-child a {
    /* 边框 */
  border-right: 0;
   /* 内边框 */
  padding-right: 0;
}


</style>