<template>
  <div class="house-hold-information">
    <div class="information-container">

    
    <el-form
      :model="personalInformation"
      :rules="rules"
      label-width="100px"
      ref="form"
      class="demo-ruleForm"
    >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="personalInformation.name"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="personalInformation.resource">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="住址" prop="sex">
        <el-input v-model="personalInformation.address"></el-input>
      </el-form-item>
      <el-form-item label="电话号码" prop="phoneNumber">
        <el-input v-model="personalInformation.phoneNumber"></el-input>
      </el-form-item>
      <el-form-item label="出生年月" prop="birth">
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder=""
              v-model="personalInformation.date"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">修改</el-button>
        <el-button @click="resetForm()">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const form = ref(null);

const personalInformation = reactive({
  name: "",
  sex: "",
  address: "",
  phoneNumber: "",
  date: "",
});

const submitForm = () => {};
const resetForm = () => {
  form.value.resetFields();
};
</script>

<style lang="scss">
.house-hold-information {
  width: 90%;
  height: 500px;
  background-color: white;
  padding: 50px;
  .information-container {
    width: 50%;
  }
}
</style>