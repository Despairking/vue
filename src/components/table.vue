<template>
  <div>
    <el-main>
      <div class="left"><i class="el-icon-s-order">菜单管理</i></div>
      <div class="bottom">
        共五个菜单
      </div>
      <div style="position: absolute;right: 95px;top: 106px">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="inputName"
          @keyup.enter.native="searchEnterFun"
        >
        </el-input>
      </div>
      <i
        class="el-icon-circle-plus"
        style="position: absolute; right: 55px; top:110px; font-size:30px"
        @click="createForm()"
      ></i>
      <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort="{ prop: 'date', order: 'descending' }"
      >
        <el-table-column prop="number" label="序号"> </el-table-column>
        <el-table-column
          prop="applicationName"
          :formatter="addWord"
          label="应用名称"
          width="180"
        >
<template slot-scope="scope">
      <span class="col-cont" v-html="showDate(scope.row.applicationName)" ></span>
     </template>
        </el-table-column>
        <el-table-column prop="describe" label="备注" width="180">
        </el-table-column>
        <el-table-column
          prop="applicationType"
          label="类型"
          :filters="[
            { text: 'Web', value: 'Web' },
            { text: 'WeChat', value: 'WeChat' }
          ]"
          :filter-method="filterType"
          filter-placement="bottom-end"
        >
        </el-table-column>
        <el-table-column prop="instant" label="唯一标识" width="150">
        </el-table-column>
        <el-table-column prop="ownerName" label="所有者"> </el-table-column>
        <el-table-column
          prop="created"
          :formatter="setDate"
          label="日期"
          width="180"
          sortable
        >
        </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="handleEdit(scope.$index, scope.row)"
            >
              <i class="el-icon-edit"></i>
            </el-button>
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
            >
              <i class="el-icon-delete"></i>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <span class="demonstration"></span>
        <el-pagination
          layout="prev, pager, next"
          :current-page="1"
          :page-size="5"
          :total="length"
          @current-change="changePage"
        >
        </el-pagination>
      </div>
    </el-main>
    <el-dialog
      :title="titleNew"
      :visible.sync="dialogFormVisible"
      width="500px"
      top="200px"
    >
      <el-form :model="form" ref="form">
        <el-form-item
          label="名称"
          :label-width="formLabelWidth"
          prop="applicationName"
        >
          <el-input
            v-model="form.applicationName"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="唯一标识"
          :label-width="formLabelWidth"
          prop="instant"
        >
          <el-input v-model="form.instant" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="类型"
          :label-width="formLabelWidth"
          prop="applicationType"
        >
          <el-input
            v-model="form.applicationType"
            auto-complete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSet('form')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "App",
  data() {
    return {
      inputName: "",
      tableData: [],
      tableDataNew: [],
      length: 0,
      dialogFormVisible: false,
      form: {
        applicationName: "",
        instant: "",
        applicationType: ""
      },
      formLabelWidth: "80px",
      currentIndex: "",
      titleNew: ""
    };
  },
  methods: {
    changePage(page) {
      this.tableData = this.tableDataNew
        .map((item, index) => {
          return {
            ...item,
            number: index + 1
          };
        })
        .slice(5 * (page - 1), 5 * page);
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    table() {
      axios
        .get("https://run.mocky.io/v3/fda6ff8a-4a08-4fc2-8b52-754623edf201")
        .then(response => {
          // handle success
          this.tableDataNew = response.data.data.content;
          this.tableData = response.data.data.content
            .slice(0, 5)
            .map((item, index) => {
              return {
                ...item,
                number: index + 1
              };
            });
          this.length = response.data.data.content.length;
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    setDate(row, column) {
      var newdate = row[column.property];
      if (newdate == undefined) {
        return "";
      }
      return moment(newdate).format("YYYY-MM-DD HH:mm:ss");
    },
    addWord(row, column) {
      var newapplicationName = row[column.property];
      return newapplicationName + "应用";
    },
    handleEdit(index, row) {
      this.dialogFormVisible = true;
      this.titleNew = "编辑应用";
      this.form.applicationName = row.applicationName;
      this.form.instant = row.instant;
      this.form.applicationType = row.applicationType;
      this.currentIndex = index;
    },
    handleSet() {
      if (this.titleNew == "新建应用") {
        var params = {
          applicationName: this.form.applicationName,
          instant: this.form.instant,
          applicationType: this.form.applicationType
        };
        this.tableDataNew.push(params);
        this.tableData = this.tables;
        this.length = this.tableDataNew.length;
        this.$refs["form"].resetFields();
        this.dialogFormVisible = false;
      }

      if (this.titleNew == "编辑应用") {
        this.tableData[
          this.currentIndex
        ].applicationName = this.form.applicationName;
        this.tableData[this.currentIndex].instant = this.form.instant;
        this.tableData[
          this.currentIndex
        ].applicationType = this.form.applicationType;
        this.dialogFormVisible = false;
      }
    },
    createForm() {
      this.dialogFormVisible = true;
      this.titleNew = "新建应用";
      this.form.applicationName = "";
      this.form.instant = "";
      this.form.applicationType = "";
    },
    searchEnterFun() {
      console.log(this.inputName);
      this.tableData = this.tableData.filter(
        data =>
          !this.inputName ||
          data.applicationName
            .toLowerCase()
            .includes(this.inputName.toLowerCase())
      );
    },
    filterType(value, row) {
      return row.applicationType === value;
    },
    showDate(val) {
    val = val + '应用';
    if (val.indexOf(this.inputName) !== -1 && this.inputName !== '') {
     return val.replace(this.inputName, '<font color="#409EFF">' + this.inputName + '</font>')
    } else {
     return val
    }
   }
  },
  computed: {
    tables: function() {
      this.tableDataNew.slice(0, 5).map((item, index) => {
        return {
          ...item,
          number: index + 1
        };
      });
      return this.tableData;
    }
  },
  watch: {
    inputName: function () {
      this.tableData = this.tableData.filter(
        data =>
          !this.inputName ||
          data.applicationName
            .toLowerCase()
            .includes(this.inputName.toLowerCase())
      )
    }
  },
  created() {
    this.table();
  }
};
</script>
