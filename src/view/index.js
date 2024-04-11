import { tree } from "./mockDataTree.js";
import { getDataTree } from "./getDataTree.js";
console.log('Start');

const data = getDataTree(tree);

console.log('data = ', data)

const start = () => {
    const chartDom = document.getElementById('chart-container');
    // const myChart = echarts.init(chartDom);
    const myChart = echarts.init(chartDom, 'light', {
        renderer: 'svg',
        useDirtyRect: false
      });
    const option = {
        title: {
            text: 'Dependencies'
          },
          animationDurationUpdate: 1500,
          animationEasingUpdate: 'quinticInOut',
          series: [
            {
              type: 'graph',
              layout: 'none',
              // progressiveThreshold: 700,
              data: data.nodes,
              // data: json.nodes.map(function (node) {
              //   return {
              //     x: node.x,
              //     y: node.y,
              //     id: node.id,
              //     name: node.label,
              //     symbolSize: node.size,
              //   };
              // }),
              edges: data.links,
              emphasis: {
                focus: 'adjacency',
                label: {
                  position: 'right',
                  show: true
                }
              },
              roam: true,
              lineStyle: {
                width: 0.5,
                curveness: 0.2,
                opacity: 0.7
              }
            }
          ]
    };
    myChart.setOption(option);
  }



start();
