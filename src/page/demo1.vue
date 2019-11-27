<template>
  <div class="title">

    <el-select v-model="values"  placeholder="直播平台" class="fl" @change="aaa" >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <div class="demo-input-suffix fl">
      <el-input
        placeholder="请输入APP名称或运营商名称"
        prefix-icon="el-icon-search"
        v-model="input">
      </el-input>
    </div>
    <div class="container_table">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column type="selection"  width="55"> </el-table-column>
        <el-table-column prop="name"  label="商品名称"  width="180"> </el-table-column>
        <el-table-column  prop="price"  sortable  label="商品价格"></el-table-column>
        <el-table-column  prop="createDate" sortable label="创建时间"></el-table-column>
        <el-table-column  prop="stock"  sortable label="库存"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
          <el-row>
            <el-button type="primary" icon="el-icon-edit"  circle @click='toUpdate(scope.row)'>修改</el-button>
            <el-button type="primary" icon="el-icon-delete" circle @click='delete(scope.row)'>删除</el-button>
          </el-row>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination class="fy"
                     layout="prev, pager, next"
                     @current-change="current_change"
                     :total="total"
                     background
                     :page-sizes="[2,3,15]"
                     :current-page="currentPage"
                     :page-size="pageSize"
      >
      </el-pagination>

    <!--修改-->
      <el-dialog title="修改" :visible.sync="dialogFormVisible" center>
        <el-form :model="form">
          <el-form-item label="app名称" :label-width="formLabelWidth">
            <el-input v-model="form.appname" autocomplete="off" class="w1"></el-input>
          </el-form-item>
          <el-form-item label="直播平台" :label-width="formLabelWidth">

            <el-select v-model="form.type" placeholder="请选择" class="w1">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>


    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        total:0,//默认数据总数
        pageSize:5,//每页的数据条数
        currentPage:1,//默认开始页面
        values:"",
        input: '',
        options: [
            {
          value: '1',
          label: '虎牙直播'
        }, {
          value: '2',
          label: '腾讯直播'
        }, {
          value: '3',
          label: '熊猫直播'
        }, {
          value: '4',
          label: '斗鱼直播'
        }],
        tableData: [

        ],
        //修改 相关配置
        dialogFormVisible: false,
        formLabelWidth: '120px',
        form: {
          appname: '',
          type: ''

        },
      };
    } ,
    created(){
      this.queryList();
      //this.showNum();
    },
    methods: {
      queryList(){
          //传参方式一
        var data=this.$qs.stringify({
          "currentPage":this.currentPage,
          "pageSize":this.pageSize
        });
        //传参方式二
        var param = new URLSearchParams();
        param.append('currentPage',this.currentPage);
        param.append('pageSize',this.pageSize);
        this.$axios({
          method:"post",
          url:"/api/product/queryListToVue",
          data:data,
        }).then(result=>{
           console.log(result.data);
            this.tableData=result.data.data.data;
            this.total=result.data.data.totalCount;
        }).catch(err=>{

        })
      },
      toUpdate(row){
        this.form.appname=row.appname;
        this.form.type=row.type;
        this.dialogFormVisible = true;

      },

      current_change:function(currentPage){
        this.currentPage = currentPage;
        this.queryList();
      },
      aaa :function (value) {
        alert(value);
      }
    },

  };
</script>
<style>
  .fl{
    float: right;
    margin-right:20px;
    margin-top:10px;
  }
  .fy{
    text-align:center;
    margin-top:30px;
  }
  .title{
    height:100%;
  }
  .w1{
    width: 200px;
    margin-left:20px;
  }
</style>
