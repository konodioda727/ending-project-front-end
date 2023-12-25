import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import { defaultOption } from '../../configs/chartConfig.ts';
import { ChartProps } from '../types/chartProps.ts';

const Charts: React.FC<ChartProps> = props => {
  const { data, type, id, ...restProps } = props;
  const elemID = id ? id : 'class-img';
  useEffect(() => {
    const chartDom = document.getElementById(elemID);
    const myChart = echarts.init(chartDom);
    const option = defaultOption;
    const optionSeries = option.series as echarts.SeriesOption;
    if (optionSeries && type && data) {
      optionSeries.type = type;
      optionSeries.data = data;
    }

    optionSeries && myChart.setOption(option);
  }, [data, elemID, type]);

  return (
    <>
      <div id={elemID} {...restProps}></div>
    </>
  );
};
export default Charts;
