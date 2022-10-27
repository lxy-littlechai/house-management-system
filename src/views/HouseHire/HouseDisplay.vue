<template>
  <div class="house-display STANDARD-width">
    <div
      class="house-information"
      v-for="house in houseInformation"
      :key="house.id"
    >
      <div class="house-information-container CARD-style">
        <el-image :src="house.img" :fit="fiil" alt="" class="house-img" />

        <el-descriptions
          class="house-description"
          :title="house.address"
          :column="1"
        >
          <el-descriptions-item label="房型">{{
            house.houseKind
          }}</el-descriptions-item>
          <el-descriptions-item label="容纳人数">{{
            house.peopleLimit
          }}</el-descriptions-item>
          <el-descriptions-item label="房屋状态">
            <el-tag size="small">{{ house.status }}</el-tag>
          </el-descriptions-item>
        </el-descriptions>

        <div class="price-describe">
          <div class="content">
            <div class="number">{{ house.price }}</div>
            <div class="text">元/月</div>
          </div>

          <el-button type="warning" plain @click="checkHouse"
            >我想看房</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const houseInformation = reactive([
  {
    img: require("@/assets/img/houseCover.jpg"),
    address: "陕西省西安市",
    houseKind: "平房",
    peopleLimit: 4,
    price: 5000,
    status: "待出组",
  },
  {
    img: require("@/assets/img/houseCover.jpg"),
    address: "陕西省西安市",
    houseKind: "平房",
    peopleLimit: 4,
    price: 5000,
    status: "待出组",
  },
]);
const checkHouse = () => {};
</script>

<style lang="scss" scoped>
.house-display {
  .house-information {
    width: 100%;
    height: 200px;
    padding: 30px 0px;

    .house-information-container {
      width: 100%;
      height: 200px;

      .house-img {
        float: left;
        height: 100%;
      }
      .house-description {
        height: 100%;
        float: left;
        margin-left: 20px;
        margin-top: 20px;
      }
      .el-descriptions__title {
        font-size: 30px !important;
      }

      .price-describe {
        float: right;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-right: 50px;
        color: $color-orange;
        .content {
          .number {
            display: inline-block;
            font-size: 50px;
          }
          .text {
            display: inline-block;
          }
        }
      }
    }
  }
}
</style>