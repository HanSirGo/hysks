<template>
  <div class="titleview">
    <p class="toptitle">
      文章列表
    </p>
    <div class="headform">
      <div class="btnblock">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)" type="primary">编辑添加各种字段规则验证示例</el-button>
        <el-button type="primary">本地导出表格</el-button>
      </div>
      <div class="inpform">
        <el-input placeholder="请输入文章标题"></el-input>
        <el-select v-model="value" placeholder="请选择"></el-select>
        <el-button type="success">查询</el-button>
        <el-button type="warning">重置</el-button>
      </div>
    </div>
    <!-- 表格 -->
    <div class="tablebox">
      <el-table :data="formdata" border v-if="formdata" type="index">
        <el-table-column label="文章标题"  prop="title">
        </el-table-column>
        <el-table-column label="作者"  prop="writer">
        </el-table-column>
        <el-table-column label="浏览量"  prop="liull">
        </el-table-column>
        <el-table-column label="回复"  prop="huif">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 是否删除 弹窗 -->
    <el-dialog title="编辑" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="标题">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="form.writer" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="浏览量">
          <el-input v-model="form.liull" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="回复">
          <el-input v-model="form.huif" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" class="btncancel">取 消</el-button>
        <el-button type="primary" @click="surebtn">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import instance from "@/axios/index.js"
export default {
  name:"TitleView",
  data(){
    return{
      formdata:null,
      form:{
        id:'',
        title:"",
        writer:"",
        liull:"",
        huif:""
      },
      dialogFormVisible:false
    }
  },
  methods:{
    surebtn(){
      this.dialogFormVisible = false
    },
     handleEdit(index, row) {
      console.log(index, row);
      this.dialogFormVisible = true;
      this.form.title = row.title
      this.form.writer = row.writer
      this.form.liull = row.liull
      this.form.huif = row.huif
      this.form.id = row.id;
      this.editData()
    },
    handleDelete(index, row){
       console.log(index, row);
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        this.deleteData(index)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });      
    },
    async getdata(){
      let {data} = await instance.get("/titleget")
      console.log(data);
      this.formdata = data
    },
    async deleteData(id){
      let {data} = await instance.get("/titledelete/"+id)
      console.log(data);
      this.getdata()
    },
    //编辑
    async editData(){
      let id = this.form.id
      let name = this.form.name
      let text = this.form.text
      let {data} = await instance.put("/edit/"+id,{name,text})
      // console.log(data);
      this.getdata()
    }
  },
  created () {
    this.getdata()
  }
}
</script>
<style scoped>
.toptitle{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:20px;
  line-height:20px;
  background-color:#fff;
  text-align:left;
  padding:5px;
}
.headform{
  display:flex;
  align-items:center;
  justify-content: space-between;
  font-size:12px;
  height:50px;
  background-color:#fff;
  margin-bottom:5px;
}
.headform input{
  height:26px;
  font-size:12px;
  width:50px;
}
.headform button{
  font-size:12px;
}
.btnblock{
  display:flex;
  align-items:center;
}
.inpform{
  display:flex;
  align-items:center;
}
.btncancel{
  background-color:#ccc;
}
</style>