<template>
  <div class="HouseInformation">
    <el-button type="primary" size="big" class="addHouse" @click="addNewHouse">新增房屋</el-button>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="Id" width="130" />
      <el-table-column prop="address" label="地址" width="200" />
      <el-table-column prop="houseKind" label="房型" width="180" />
      <el-table-column prop="maxNumber" label="最多容纳房客数" width="180" />
      <el-table-column prop="price" label="价格" width="180" />
      <el-table-column prop="status" label="房屋状态" width="180" />
      <el-table-column label="操作" width="180">
        <el-button type="primary" size="small" @click="editHouseInformation">编辑
        </el-button>
        <el-button size="small" type="danger" @click="editHouseDelete">删除
        </el-button>
      </el-table-column>

    </el-table>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const tableData = reactive([
  {
    id: "1",
    address: "陕西省西安市西安电子科技大学",
    houseKind: "平房",
    maxNumber: "5",
    price: "5000",
    status: "待租"
  },
  {
    id: "1",
    address: "陕西省西安市西安电子科技大学",
    houseKind: "平房",
    maxNumber: "5",
    price: "5000",
    status: "待租"
  }
]);
const addNewHouse = () => {

};
const editHouseInformation = () => {

}
const editHouseDelete = () => {

}
</script>

<style lang="scss" scoped>
.HouseInformation {
  .addHouse {
    margin-bottom: 20px;
  }
}
</style>