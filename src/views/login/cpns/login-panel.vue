<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>

    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <UserFilled
              style="
                width: 1.2em;
                height: 1.2em;
                margin-right: 8px;
                vertical-align: middle;
              "
            />
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <Iphone
              style="
                width: 1.2em;
                height: 1.2em;
                margin-right: 8px;
                vertical-align: middle;
              "
            />
            <span>手机登录</span>
          </span>
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-button" @click="handelLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  name: 'login-panel',
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const isKeepPassword = ref(false)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()

    const handelLoginClick = () => {
      console.log('立即登录')
      accountRef.value?.loginAction()
    }

    return {
      isKeepPassword,
      accountRef,
      handelLoginClick
    }
  }
})
</script>

<style scoped lang="less">
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
.login-panel {
  width: 320px;

  .title {
    text-align: center;
  }
}

.account-control {
  display: flex;
  justify-content: space-between;
  margin: 8px;

  .el-link .el-icon--right.el-icon {
    vertical-align: text-bottom;
  }
}

.login-button {
  width: 320px;
}
</style>
