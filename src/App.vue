<template>
  <div>
    <el-container>
      <el-header>
        <i class="el-icon-platform-eleme"></i>
        <i class="el-icon-share"></i>
        <i
          class="el-icon-search"
          style="position: absolute; right: 160px; top:30px"
        ></i>
        <i
          class="el-icon-shopping-cart-2"
          style="position: absolute; right: 130px; top:30px"
        ></i>
        <i
          class="el-icon-bell"
          style="position: absolute; right: 100px; top:30px"
        ></i>
        <i
          class="el-icon-user-solid"
          style="position: absolute; right: 25px; top:30px"
          >admin</i
        >
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="12">
              <h5><i class="el-icon-s-tools"> 系统管理</i></h5>
              <el-divider></el-divider>
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
              >
                <el-menu-item index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title"
                      ><router-link :to="'/table'">导航一</router-link></span
                    >
                  </template>
                </el-menu-item>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title"
                    ><router-link :to="'/navigation2'"
                      >导航二</router-link
                    ></span
                  >
                </el-menu-item>
                <el-menu-item index="3" disabled>
                  <i class="el-icon-document"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title"
                    ><router-link :to="'/navigation4'"
                      >导航四</router-link
                    ></span
                  >
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { Data } from "./data";
export default {
  name: "App",
  data() {
    return {
      input1: "",
      tableData: [...Data].splice(0, 5).map((item, no) => {
        return {
          ...item,
          number: no
        };
      }),
      length: Data.length
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    changePage(page) {
      const data = [...Data].map((item, index) => {
        return {
          ...item,
          number: index
        };
      });
      this.tableData = data.splice(5 * (page - 1) + 1, 5 * page);
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.el-header,
.el-footer {
  background-color: #ffffff;
  color: #333;
  text-align: left;
  line-height: 60px;
  box-shadow: 0 2px 12px 0 rgba(65, 48, 214, 0.1);
}
.el-aside {
  background-color: #ffffff;
  color: #333;
  box-shadow: 0 2px 12px 0 rgba(65, 48, 214, 0.1);
}
.el-main {
  background-color: #ffffff;
  color: #333;
  box-shadow: 0 2px 12px 0 rgba(65, 48, 214, 0.1);
  height: 550px;
}
body > .el-container {
  margin-bottom: 40px;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.left {
  display: flex;
  flex-direction: row;
  width: 100px;
  margin: 4px;
  background-color: #ffffff;
  text-align: left;
}
.bottom {
  display: flex;
  flex-direction: column;
  width: 100px;
  margin: 4px;
  height: 50px;
  background-color: #ffffff;
  font-size: 10px;
}
.el-col-12 {
  width: 95%;
}
.el-menu {
  border-right: unset;
}
.el-icon-arrow-down:before {
  content: unset;
}
.el-form-item__label {
  text-align: left;
}
a:-webkit-any-link {
  color: unset;
  cursor: pointer;
  text-decoration: underline;
  text-decoration-line: unset;
  text-decoration-thickness: initial;
  text-decoration-style: initial;
  text-decoration-color: initial;
}
</style>
