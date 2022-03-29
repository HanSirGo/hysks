const Mock = require("mockjs")
let formdata = [
  {id:0,title:"中国npm镜像源升级公告",writer:"fengmk2",liull:43467,huif:8},
  {id:1,title:"中国npm镜像源升级公告",writer:"fengmk2",liull:43467,huif:8},
  {id:2,title:"中国npm镜像源升级公告",writer:"fengmk2",liull:43467,huif:8},
  {id:3,title:"中国npm镜像源升级公告",writer:"fengmk2",liull:43467,huif:8},
  {id:4,title:"中国npm镜像源升级公告",writer:"fengmk2",liull:43467,huif:8},
  {id:5,title:"中国npm镜像源升级公告",writer:"fengmk2",liull:43467,huif:8},
]
Mock.mock("/api/titleget","get",function(config){
  console.log(config);
  return formdata
})
Mock.mock(/\/api\/titledelete\/\d/,"get",function(config){
  console.log(config);
  let id = config.url.split("/").pop()

  formdata.splice(id,1)
  return formdata
})
Mock.mock(/\/api\/edit\/\d/,"put",function(config){
  console.log(config);
  let id = config.url.split('/').pop()
  let obj = JSON.parse(config.body)
  data[id].title = obj.title
  data[id].writer = obj.writer
  data[id].liull = obj.liull
  data[id].huif = obj.huif
  return data[id]
})