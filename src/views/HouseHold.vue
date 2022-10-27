<template>
  <div class="HouseHold">
    <header class="header">房屋租赁管理系统</header>
    <el-row class="tac">
      <el-col :span="4">
        <el-menu
          default-active="HouseInformation"
          class="el-menu-vertical-demo household-menu"
          @open="handleOpen"
          @close="handleClose"
          router
        >
          <el-menu-item index="HouseInformation">
            <el-icon>
              <HomeFilled />
            </el-icon>
            <span>房屋信息</span>
          </el-menu-item>
          <el-menu-item index="HouseHoldInformation">
            <el-icon>
              <UserFilled />
            </el-icon>
            <span>个人信息</span>
          </el-menu-item>
        </el-menu>
      </el-col>

      <el-col :span="20" class="content-container">
      <router-view></router-view>
      </el-col>
    </el-row>

    
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.HouseHold {
  .header {
    display: flex;
    align-items: center;
    padding-left: 20px;
    height: 8vh;
    background: rgb(75, 172, 252);
    font-size: 20px;
    color: white;
  }
  .household-menu {
    height: 92vh;
  }

  .content-container {
    background: rgb(242, 244, 244);
    padding: 40px;
  }
}
</style>
