<template>
  <div class="wrapper">
    <x-header title="use prop:title"></x-header> 
    <home-swiper></home-swiper>
    <spanel :list="list"></spanel>
    <release></release>
    <temp></temp>
    <tempop></tempop>
   
  </div>
</template>

<script>

const testList=[{
          id:5132,
          src: 'static/img/download.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '各种物质组成的巨型球状天体叫做星球叫做星球叫做星球1',         
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道星球有一定的形状，有自己的运行轨道星球有一定的形状，有自己的运行轨道星球有一定的形状，有自己的运行轨道星球有一定的形状，有自己的运行轨道。',  
          author:'张三',
          times:1,
          comments:0,
      },{
          id:5122,
          src: '',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '各种物质组成的巨型球状天体叫做星球叫做星球叫做星球2',         
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道星球有一定的形状，有自己的运行轨道星球有一定的形状，有自己的运行轨道星球有一定的形状，有自己的运行轨道星球有一定的形状，有自己的运行轨道。',  
          author:'张三',
          times:1,
          comments:0,
         
      },{
          id:5122,
          src: '',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '各种物质组成的巨型球状天体叫做星球叫做星球叫做星球2',         
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道星球有一定的形状，有自己的运行轨道星球有一定的形状，有自己的运行轨道星球有一定的形状，有自己的运行轨道星球有一定的形状，有自己的运行轨道。',  
          author:'张三',
          times:1,
          comments:0,
         
      },{
          id:5122,
          src: '',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '各种物质组成的巨型球状天体叫做星球叫做星球叫做星球2',         
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道星球有一定的形状，有自己的运行轨道星球有一定的形状，有自己的运行轨道星球有一定的形状，有自己的运行轨道星球有一定的形状，有自己的运行轨道。',  
          author:'张三',
          times:1,
          comments:0,
         
      },{
          id:5122,
          src: '',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '各种物质组成的巨型球状天体叫做星球叫做星球叫做星球2',         
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道星球有一定的形状，有自己的运行轨道星球有一定的形状，有自己的运行轨道星球有一定的形状，有自己的运行轨道星球有一定的形状，有自己的运行轨道。',  
          author:'张三',
          times:1,
          comments:0,
         
      }]
         

import HomeSwiper from './component/HomeSwiper'
import Spanel from '@/components/Spanel'
import temp from '../temp.vue'
import tempop from '../tempop.vue'
import Release from '../Release.vue'
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux'
export default {
    name:'',
    components:{
        Release,
        temp,
        tempop,
        Spanel,
        HomeSwiper,
        XHeader,
        Actionsheet,
        ButtonTab,
        ButtonTabItem
      },
    props:{},
    data(){
      return {
       list:testList
    }
  },
    watch:{},
    computed:{},
    methods:{},
    created(){},
    mounted(){}
}
</script>
<style lang="" scoped>
    
</style>