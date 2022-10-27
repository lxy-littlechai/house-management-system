<template>
  <div class="HomePage">
    <div class="login-form-container">
      <div class="title-setting">房屋租赁管理系统</div>
      <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        ref="loginFormRef"
        label-width="100px"
        class="demo-ruleForm login-form"
      >
        <el-form-item label-width="0" label="" prop="name">
          <el-input
            placeholder="请输入用户名"
            v-model.number="loginForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item label-width="0" label="" prop="pass">
          <el-input
            placeholder="请输入密码"
            type="password"
            v-model="loginForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label-width="0" label="" prop="identical">
          <el-radio-group v-model="loginForm.identical">
            <el-radio label="租客"></el-radio>
            <el-radio label="房主"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label-width="0">
          <el-button type="primary" round class="login-button" @click="login"
            >登入</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const loginFormRef = ref(null);
const loginForm = reactive({
  username: "",
  password: "",
  identical: "",
});
const rules = {
  username: [{ required: true, message: "请填写用户名", trigger: blur }],
  password: [{ required: true, message: "请填写密码", trigger: blur }],
  identical: [{ required: true, message: "请选择身份", trigger: blur }],
};
const login = () => {
  if (loginForm.identical == "房主") {
    router.push({
      path: "/HouseHold"
    });
  } else if(loginForm.identical == "租客") {
    router.push({
      path: "/HouseHire"
    });
  }
};
</script>

<style lang="scss" scoped>
.HomePage {
  width: 100%;
  height: 100vh;

  background: url("~@/assets/img/HomePage.png");
  background-size: 100% 100%;

  .login-form-container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 350px;
    text-align: center;
    background: rgba($color: #ffffff, $alpha: 0.8);

    .title-setting {
      position: absolute;
      left: 50%;
      top: 30px;
      transform: translate(-50%, 0);
      font-size: 20px;
      color: rgba(241, 62, 170, 0.747);
    }
    .login-form {
      position: absolute; //绝对位置
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      width: 60%;

      ::v-deep(.el-form-item__content) {
        justify-content: center !important;
      }
      .login-button {
        width: 80%;
        margin: 0 auto;
      }
    }
  }
}
</style>