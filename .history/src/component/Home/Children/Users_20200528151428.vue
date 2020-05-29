<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row>
        <el-col :span="7"></el-col>
        <el-col :span="4"></el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 2
      }
    }
  },
  created() {
    this.getUserList()
  },
  methods: {
    async getUserList() {
      const {data}=await this.$http.get('users', { params: this.queryInfo })
      console.log(data);
      if(data.meta.status!==200){
        return this.$message.error('获取失败')
      }
      this.userlist=data.data.users
      this.total=data.data.total
    }
  }
}
</script>

<style lang="less" scoped>
</style>