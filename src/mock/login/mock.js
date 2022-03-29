const Mock = require("mockjs")

Mock.mock("/api/login","post",function(config){
  console.log(config);
  let obj = JSON.parse(config.body)
  if(obj.name=='admin'&&obj.pass==="123456"){
    return {
      message:"success",
      data:{
        token:"qwer"
      }
    }
  }else{
    return {
      message:"fail",
    }
  }
})