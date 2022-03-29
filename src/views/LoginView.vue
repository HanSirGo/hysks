<template>
  <div class="login">
    <div class="block">
      <h3>Login Form</h3>
      <el-form :model="form" :rules="rules" v-if="form">
        <el-form-item prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input v-model="form.pass"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="btn" type="primary" @click="submitForm">提交</el-button>
        </el-form-item>
      </el-form>
      <p class="text">username:admin password:any</p>
    </div>
  </div>
</template>
<script>
import instance from "@/axios/index.js"
export default {
  name:"LoginView",
  data(){
    let validateName = function(rules,value,callback){
      let reg = /^\w{5,10}$/
      if(!reg.test(value)){
        callback('用户名格式错误')
      }
    }
    let validatePass = function(rules,value,callback){
      let reg = /^\w{6,10}$/
      if(!reg.test(value)){
        callback('密码格式错误')
      }
    }
    return {
      form:{
        name:"admin",
        pass:"123456"
      },
      rules:{
        name:[
          { validator: validateName, trigger: 'blur' }
        ],
        pass:[
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods:{
    submitForm(){
      this.getdata()
    },
    async getdata(){
      let name = this.form.name
      let pass = this.form.pass
      let {data} = await instance.post("/login",{name,pass})
      console.log(data);
      if(data.message=='fail'){
        this.$message.error('登录失败');
      }
      if(data.message=='success'){
        localStorage.setItem('token',data.data.token)
        this.$message({
          message: '成功登录',
          type: 'success',
          duration:2000,
          onClose:()=>{
            this.$router.push({name:'title'})
          }
        });
      }
    }
  }
}
</script>
<style scoped>
.login{
  width:100vw;
  height:100vh;
  background:#ccc;
  display:flex;
  justify-content: center;
  align-items:center;
}
h3{
  color:#fff;
  margin-bottom:40px;
}
.block{
  width:500px;
  height:400px;
  padding:40px;
  box-sizing:border-box;
}
.btn{
  width:100%;
}
.text{
  color:#fff;
  text-align:left;
}
</style>