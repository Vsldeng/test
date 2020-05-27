<template>
    <div class="login_container">
        <div class="login_box">
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="头像">
            </div>
            <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginFormRef">
                <el-form-item  prop="username">
                    <el-input prefix-icon="el-icon-user-solid" v-model="loginForm.username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input prefix-icon="el-icon-key" v-model="loginForm.password" type="password"></el-input>
                </el-form-item>
                <el-form-item class="btns">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            loginForm:{
                username:'',
                password:'',
            },
            rules:{
                username:[
                    {required:true, message:'请输入用户名', trigger:'blur'},
                    {min:3,max:5,message:'长度必须在3-5之间',trigger:'blur'}
                ],
                password:[
                    {required:true, message:'请输入密码', trigger:'blur'},
                    {min:5,max:12,message:'长度必须在5-12之间',trigger:'blur'}
                ]
            }
        }
    },
    methods:{
        resetLoginForm:function(){
            this.$refs.loginFormRef.resetFields();
        },
        login:function(){
            this.$refs.loginFormRef.validate(async(valid)=>{
                if(!valid) return;
                const {data}=await this.$http.post('login',this.loginForm)
                if(data.meta.status==200){
                    window.sessionStorage.setItem('token',data.data.token);
                    this.$message({
                        showClose:true,
                        message:'登陆成功',
                        type:'success'
                    })
                    this.$router.push('/home');
                }else{
                    this.$message({
                        type:'error',
                        showClose:true,
                        message:'登陆失败'
                    })
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>
.login_container{
    background-color: #2b4b6b;
    height: 100%;
}
.login_box{
    width:450px;
    height:300px;
    background-color: #fff;
    border-radius:3px;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);

    .avatar_box{
        height: 130px;
        width: 130px;
        border:1px solid #eee;
        border-radius:50%;
        padding:10px;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left:50%;
        transform:translate(-50%,-50%);
        background-color: #fff;
        img{
            background-color: #eee;
            height: 130px;
            width:130px;
            border-radius:50%;
        }
    }
}
.login_form{
    position: absolute;
    bottom:0px;
    width: 100%;
    padding:0 20px;
    box-sizing:border-box;
}
.btns{
    display: flex;
    justify-content: flex-end;
}
</style>
