<template>
  <div style="width: 100%; height: 100%" ref="chart"></div>
</template>
<script>
let Echarts = require('echarts/lib/echarts');
require('echarts/lib/component/grid');
require('echarts/lib/chart/bar');

export default {
  data() {
    return { chart: null };
  },
  mounted() {
    this.init();
    window.addEventListener("resize", () => {
      this.chart.resize();
    });
  },
  methods: {
    init() {
      this.chart = Echarts.init(this.$refs.chart);

      let option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, {
            value: 200,
            itemStyle: {
                color: '#a90000'
            }
        }, 150, 80, 70, 110, 130],
        type: 'bar'
    }]
};
      this.chart.setOption(option);
    }
  }
};
</script>
