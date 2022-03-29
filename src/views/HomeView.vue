<template>
  <div class="home">
    <el-container>
      <!-- 左侧 -->
      <el-aside class="aside" background-color="rgb(50,64,87)">
        <!-- 头部 -->
        <el-header class="asideheader">ElementUi管理后台</el-header>
        <!-- center -->
        <el-menu router background-color="rgb(50,64,87)" text-color="#fff">
          <el-menu-item class="item" index="/">
            <i class="el-icon-orange"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2" class="item">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1"><i class="el-icon-remove-outline"></i>文章列表</el-menu-item>
              <el-menu-item index="2-2"><i class="el-icon-remove-outline"></i>多层级路由示例</el-menu-item>
            </el-menu-item-group>
          </el-submenu>          
        </el-menu>  
        <!-- 底部 -->
        <el-footer class="asidefooter">
          <i class="el-icon-back"></i>
        </el-footer>     
      </el-aside>
      <!-- 右侧 -->
      <el-container>
        <el-header class="headerright">
          <i class="el-icon-menu"></i>
          <div class="rightbox">
            <i class=""></i>
            <i class="el-icon-setting"></i>
            <i class=""></i>
            <el-dropdown>
              <span class="el-dropdown-link">
                <img src="@/assets/logo.png" alt="">
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
        <el-main class="rightmain">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  name: "HomeView",
  components: {},
};
</script>
<style scoped>
.aside{
  height:100vh;
  background:rgb(50,64,87);
  position:relative;
}
.asideheader{
  background-color:blue;
  color:#fff;
  display:flex;
  justify-content: center;
  align-items:center;
}
.aside .item{
  text-align:left;
}
.asidefooter{
  position:absolute;
  left:0;
  bottom:0;
  background:blue;
  width:100%;
  display: flex;
  align-items:center;
  justify-content: flex-end;
}
.asidefooter >i{
  color:#fff;
  font-size:30px;
  font-weight:bolder;
}
.headerright{
  background-color:rgb(92, 92, 240);
  display:flex;
  justify-content: space-between;
  align-items:center;
}
.rightbox{
  display:flex;
  align-items: center;
}
.rightbox >i{
  margin-right:10px;
}
.rightbox img{
  width:30px;
  height:30px;
  border-radius:50%;
}
.rightmain{
  position: relative;
  background-color:#ccc;
  padding-top:40px;
}
</style>