import { EChartsOption } from 'echarts';

export const defaultOption: EChartsOption = {
  tooltip: {
    trigger: 'item',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '100%',
      center: ['50%', '50%'],
      label: {
        position: 'inside',
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
};
