<template>
  <div class="wrapper">
          <!-- <panel :header="列表"  :list="list" :type="5"></panel> -->
          <dl class="spanel vux-1px-b" v-for="(item, index) in list" :key="index">
            <dt class="title">{{item.title}}</dt>
            <dd class="contain">
              <img class="panimg" :src="item.src" :alt="item.id" v-if="item.src">
              <p class="desc">{{item.desc}}</p>
            </dd>
            <dd class="tips">
              <i class="tip author">作者:{{item.author}}</i>
              <i class="tip time">浏览:{{item.times}}</i>
              <i class="tip comment">评论:{{item.comments}}</i>
            </dd>
          </dl>       
  </div>
</template>
<script>
 import {Panel} from 'vux'
// const testList={
//           id:5132,
//           src: '../static/img/download.jpg',
//           fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
//           title: '各种物质组成的巨型球状天体叫做星球叫做星球叫做星球',         
//           desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道星球有一定的形状，有自己的运行轨道星球有一定的形状，有自己的运行轨道星球有一定的形状，有自己的运行轨道星球有一定的形状，有自己的运行轨道。',  
//           author:'张三',
//           times:1,
//           comments:0,
         
//       }
export default {
    name:'',
    components:{
        // Panel
    },
    props:{
      list:Array
      },
    data(){
      return {
        // list:testList      
          
    }
  },
    
    computed:{},
    methods:{},
    created(){},
    mounted(){}
}
</script>
<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
    .wrapper{
      width: 100%;
        .spanel{
          height: 140px;
          padding:5px 15px;
          box-shadow: darkgray 0px 0px 2px 1px;
        .title{} 
        .contain{
          display: flex;
          margin: 5px 0px;
          .panimg{
            width:25%;
            height: 70%;
            margin:5px 10px 5px 0;
            border-radius:3px;
          }
          .desc{
            font-size: 12px;
            line-height: 24px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp:3;
            overflow: hidden;
            text-overflow: ellipsis;            
          }
        }
        .tips{         
          font-size: 10px;
          color: grey;
          .tip{
             font-style:normal;
             padding:0 5px;
          }
          .author{
           
          }
        }
      }

   
    }
</style>