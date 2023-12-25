import React,{useEffect} from 'react';
import { View } from '../../components/contentView';
import Word from '../../components/word';
import MvPageButton from '../../components/mvPageButton';
import { Stars } from '../../components/randomObjects/star.tsx';
import './index.less';
import * as echarts from 'echarts';

function StudyImg(){
    useEffect(()=>{
        type EChartsOption = echarts.EChartsOption;
        const chartDom = document.getElementById('class-img')!;
        const myChart = echarts.init(chartDom);
        const option: EChartsOption = {
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }; 
    option && myChart.setOption(option);
    },[])
   
return(
            <div id="class-img" style={{ width: '90vw', height: '50vh'}}></div>
)
}

const Study: React.FC = () => {
    
  // const [classetime,setclasstime]=useState(0)
  // const [classhour,setclasshour]=useState(0)
  return (
    <View>
        <Word className={'study-word-1'}>你一共上了</Word>
        <Word className={'study-word-2'}>{`${'classetime'}节课`}</Word>
        <Word className={'study-word-3'}>{`共计${'classhour'}小时`}</Word>
        <Word><StudyImg></StudyImg></Word>
        <Word className={'study-word-4'}>学习之路上，</Word>
        <Word className={'study-word-5'}>你一定有很多收获吧？</Word>
      <MvPageButton type={'mvPageVertically'} mode={'light'}></MvPageButton>
      <Stars></Stars>
    </View>
  );
};
export default Study;
