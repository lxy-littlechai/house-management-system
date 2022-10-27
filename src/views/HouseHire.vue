<template>
  <div class="HouseHire">
    <div class="cover STANDARD-title">趁年轻给自己的一个家</div>
    <el-menu
      default-active="HouseDisplay"
      class="el-menu-demo menu"
      mode="horizontal"
      @select="handleSelect"
      active-text-color="#ffc603"
      router="true"
    >
      <el-menu-item index="HouseDisplay" class="menu-item"
        >未来的家</el-menu-item
      >
      <el-menu-item index="LikedHouse" class="menu-item">心怡小窝</el-menu-item>
      <el-menu-item index="PersonalInformation" class="menu-item"
        >个人信息</el-menu-item
      >
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.HouseHire {
  .cover {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px;
    background: url("../assets/img/houseCover.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .menu {
    justify-content: center;
    .menu-item {
      margin: 0 50px;
    }
    .el-menu-item:hover {
      background: none !important;
      color: $color-orange !important;
      border-bottom: 2px solid $color-orange !important;
    }
    .el-menu-item {
      background: none !important;
    }
  }
}
</style>