<template>
  <div class="box">
    <div style="width: 33.33%; height: 255px" ref="chart"></div>
    <div style="width: 33.33%; height: 255px" ref="chartTwo"></div>
    <div style="width: 33.33%; height: 255px" ref="chartThree"></div>
    <div style="width: 33.33%; height: 255px" ref="chartFour"></div>
    <div style="width: 33.33%; height: 255px" ref="chartFive"></div>
    <div style="width: 33.33%; height: 255px" ref="chartSix"></div>
  </div>
</template>
<script>
let Echarts = require("echarts/lib/echarts");
require("echarts/lib/component/title");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/legend");
require("echarts/lib/chart/pie");
let EchartsTwo = require("echarts/lib/echarts");
require("echarts/lib/component/title");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/legend");
require("echarts/lib/chart/pie");
let EchartsThree = require("echarts/lib/echarts");
require("echarts/lib/component/title");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/legend");
require("echarts/lib/chart/pie");
let EchartsFour = require("echarts/lib/echarts");
require("echarts/lib/component/title");
require("echarts/lib/component/toolbox");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/grid");
require("echarts/lib/component/legend");
require("echarts/lib/chart/line");
let EchartsFive = require("echarts/lib/echarts");
require("echarts/lib/component/title");
require("echarts/lib/component/toolbox");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/grid");
require("echarts/lib/component/legend");
require("echarts/lib/chart/line");
let EchartsSix = require("echarts/lib/echarts");
require("echarts/lib/component/title");
require("echarts/lib/component/toolbox");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/grid");
require("echarts/lib/component/legend");
require("echarts/lib/chart/line");
import axios from "axios";

export default {
  data() {
    return {
      chart: null,
      chartTwo: null,
      chartThree: null,
      chartFour: null,
      chartFive: null,
      chartSix: null,
      chartdata: [],
    };
  },
  created() {
    this.chartCreate();
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.chartTwo.resize();
      this.chartThree.resize();
      this.chartFour.resize();
      this.chartFive.resize();
      this.chartSix.resize();
    });
  },

  methods: {
    chartCreate() {
      axios
        .get(
          "https://www.fastmock.site/mock/41efbff27f37a90024ccfd98b0794258/api_test/api/getPieData"
        )
        .then((response) => {
          if (response.data.code == 200) {
              var obj = {}
            response.data.data.map(item => {
              obj = item;
              obj["value"] = item["data"];
              delete obj["data"];
              this.chartdata.push(obj);
              this.init();
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    init() {
      {
        this.chart = Echarts.init(this.$refs.chart);

        let option = {
          title: {
            text: "某站点用户访问来源",
            subtext: "纯属虚构",
            left: "center"
          },
          tooltip: {
            trigger: "item"
          },
          legend: {
            orient: "vertical",
            left: "left"
          },
          series: [
            {
              name: "访问来源",
              type: "pie",
              radius: "50%",
              data:this.chartdata,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)"
                }
              }
            }
          ]
        };
        this.chart.setOption(option);
      }
      {
        this.chartTwo = EchartsTwo.init(this.$refs.chartTwo);

        let option = {
          title: {
            text: "某站点用户访问来源",
            subtext: "纯属虚构",
            left: "center"
          },
          tooltip: {
            trigger: "item"
          },
          legend: {
            orient: "vertical",
            left: "left"
          },
          series: [
            {
              name: "访问来源",
              type: "pie",
              radius: "50%",
              data: [
                { value: 1048, name: "搜索引擎" },
                { value: 735, name: "直接访问" },
                { value: 580, name: "邮件营销" },
                { value: 484, name: "联盟广告" },
                { value: 300, name: "视频广告" }
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)"
                }
              }
            }
          ]
        };

        this.chartTwo.setOption(option);
      }
      {
        this.chartThree = EchartsThree.init(this.$refs.chartThree);

        let option = {
          title: {
            text: "某站点用户访问来源",
            subtext: "纯属虚构",
            left: "center"
          },
          tooltip: {
            trigger: "item"
          },
          legend: {
            orient: "vertical",
            left: "left"
          },
          series: [
            {
              name: "访问来源",
              type: "pie",
              radius: "50%",
              data: [
                { value: 1048, name: "搜索引擎" },
                { value: 735, name: "直接访问" },
                { value: 580, name: "邮件营销" },
                { value: 484, name: "联盟广告" },
                { value: 300, name: "视频广告" }
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)"
                }
              }
            }
          ]
        };

        this.chartThree.setOption(option);
      }
      {
        this.chartFour = EchartsFour.init(this.$refs.chartFour);

        let option = {
          title: {
            text: "折线图堆叠"
          },
          tooltip: {
            trigger: "axis"
          },
          legend: {
            data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          },
          yAxis: {
            type: "value"
          },
          series: [
            {
              name: "邮件营销",
              type: "line",
              stack: "总量",
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: "联盟广告",
              type: "line",
              stack: "总量",
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: "视频广告",
              type: "line",
              stack: "总量",
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: "直接访问",
              type: "line",
              stack: "总量",
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: "搜索引擎",
              type: "line",
              stack: "总量",
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        };

        this.chartFour.setOption(option);
      }
      {
        this.chartFive = EchartsFive.init(this.$refs.chartFive);

        let option = {
          title: {
            text: "折线图堆叠"
          },
          tooltip: {
            trigger: "axis"
          },
          legend: {
            data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          },
          yAxis: {
            type: "value"
          },
          series: [
            {
              name: "邮件营销",
              type: "line",
              stack: "总量",
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: "联盟广告",
              type: "line",
              stack: "总量",
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: "视频广告",
              type: "line",
              stack: "总量",
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: "直接访问",
              type: "line",
              stack: "总量",
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: "搜索引擎",
              type: "line",
              stack: "总量",
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        };

        this.chartFive.setOption(option);
      }
      {
        this.chartSix = EchartsFive.init(this.$refs.chartSix);

        let option = {
          title: {
            text: "折线图堆叠"
          },
          tooltip: {
            trigger: "axis"
          },
          legend: {
            data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          },
          yAxis: {
            type: "value"
          },
          series: [
            {
              name: "邮件营销",
              type: "line",
              stack: "总量",
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: "联盟广告",
              type: "line",
              stack: "总量",
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: "视频广告",
              type: "line",
              stack: "总量",
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: "直接访问",
              type: "line",
              stack: "总量",
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: "搜索引擎",
              type: "line",
              stack: "总量",
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        };

        this.chartSix.setOption(option);
      }
    }
  }
};
</script>
<style>
.box {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}
</style>
