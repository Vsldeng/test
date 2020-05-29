<template>
  <div class="rights">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <el-row>
        <el-col>
          <el-button type="primary" @click="handleAddRoles">添加角色</el-button>
        </el-col>
      </el-row>

      <el-table :data="rolesList" border stripe>
        <!-- 展开列 -->
        <el-table-column type="expand"></el-table-column>
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column label="角色名称" prop="roleName"></el-table-column>
        <el-table-column label="角色描述" prop="roleDesc"></el-table-column>
        <el-table-column label="操作" prop="level" width="350px">
          <template v-slot:default="scope">
            <el-button size="mini" type="primary" icon="el-icon-edit">编辑</el-button>
            <el-button size="mini" type="danger" icon="el-icon-delete">删除</el-button>
            <el-button size="mini" type="warning" icon="el-icon-setting">分配权限</el-button>
            {{scope.row.id}}
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-dialog title="添加角色" :visible.sync="RolesVision" width="50%" @close="rolesClosed">
      <!-- 内容主体区域 -->
        <el-form :model="addRolesList" :rules="addRolesRules" ref="RolesFormRef" label-width="70px">
          <el-form-item label="角色名" prop="roleName">
            <el-input v-model="addRolesList.rolename"></el-input>
          </el-form-item>
          <el-form-item label="描述" prop="roleDesc">
            <el-input v-model="addRolesList.roleDesc"></el-input>
          </el-form-item>
        </el-form>
      <!-- 底部区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="rolesClosed">取 消</el-button>
        <el-button type="primary" @click="handleAddRoles">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
        rolesList:[],
        addRolesList:{
            roleName:'',
            roleDesc:''
        },
        RolesVision:false,
        addRolesRules:{
            roleName:[
                {required:true,message:'请输入角色名称',trigger:'blur'}
            ],
            roleDesc:[
                {required:true,message:'请输入角色描述',trigger:'blur'}
            ]
        }
    }
  },
  created(){
      this.getRolesList()
  },
  methods:{
      async getRolesList(){
          const {data:res} =await this.$http.get('roles')
          if(res.meta.status!==200){
              this.$message.error('获取列表失败')
          }
          this.rolesList=res.data
          console.log(this.rolesList)
          this.$message.success('获取列表成功')
      },
      rolesClosed(){
          this.$refs.RolesFormRef.resetFields()
          this.RolesVision=false
      },
      handleAddRoles(){
          this.RolesVision=true
      }
  }
}
</script>

<style lang="less" scoped>
</style>