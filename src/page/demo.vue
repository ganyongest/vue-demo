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
        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        stripe
        style="width: 100%"
        :default-sort = "{prop: 'date', order: 'descending'}"
      >
        <el-table-column type="selection"  width="55"> </el-table-column>
        <el-table-column prop="appname"  label="APP名称"  width="180"> </el-table-column>
        <el-table-column  prop="type"  sortable  label="直播平台"></el-table-column>
        <el-table-column  prop="comp_name" sortable label="运营企业名称"></el-table-column>
        <el-table-column  prop="download_num"  sortable label="下载量（万）"></el-table-column>
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
        total:20,//默认数据总数
        pagesize:10,//每页的数据条数
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
          {
            appname: '1喵喵直播',
            type: '3视频直播',
            comp_name: '1广大科技公司',
            download_num: '123.6'
          },
          {
            appname: '2喵喵直播',
            type: '2视频直播',
            comp_name: '2广大科技公司',

            download_num: '223.6'
          },
          {
            appname: '3喵喵直播',
            type: '3视频直播',
            comp_name: '3广大科技公司',
            download_num: '323.6'
          },
          {
            appname: '4喵喵直播',
            type: '4视频直播',
            comp_name: '4广大科技公司',
            download_num: '423.6'
          },
          {
            appname: '4喵喵直播',
            type: '4视频直播',
            comp_name: '4广大科技公司',
            download_num: '423.6'
          },
          {
            appname: '4喵喵直播',
            type: '4视频直播',
            comp_name: '4广大科技公司',
            download_num: '423.6'
          },
          {
            appname: '4喵喵直播',
            type: '4视频直播',
            comp_name: '4广大科技公司',
            download_num: '423.6'
          },
          {
            appname: '4喵喵直播',
            type: '4视频直播',
            comp_name: '4广大科技公司',
            download_num: '423.6'
          },
          {
            appname: '4喵喵直播',
            type: '4视频直播',
            comp_name: '4广大科技公司',
            download_num: '423.6'
          },
          {
            appname: '4喵喵直播',
            type: '4视频直播',
            comp_name: '4广大科技公司',
            download_num: '423.6'
          },
          {
            appname: '4喵喵直播',
            type: '4视频直播',
            comp_name: '4广大科技公司',
            download_num: '423.6'
          },
          {
            appname: '4喵喵直播',
            type: '4视频直播',
            comp_name: '4广大科技公司',
            download_num: '423.6'
          },
          {
            appname: '4喵喵直播',
            type: '4视频直播',
            comp_name: '4广大科技公司',
            download_num: '423.6'
          },
          {
            appname: '4喵喵直播',
            type: '4视频直播',
            comp_name: '4广大科技公司',
            download_num: '423.6'
          },
          {
            appname: '4喵喵直播',
            type: '4视频直播',
            comp_name: '4广大科技公司',
            download_num: '423.6'
          },
          {
            appname: '4喵喵直播',
            type: '4视频直播',
            comp_name: '4广大科技公司',
            download_num: '423.6'
          },
          {
            appname: '4喵喵直播',
            type: '4视频直播',
            comp_name: '4广大科技公司',
            download_num: '423.6'
          },
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
    methods: {

      toUpdate(row){
        this.form.appname=row.appname;
        this.form.type=row.type;
        this.dialogFormVisible = true;

      },

      current_change:function(currentPage){
        this.currentPage = currentPage;
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
