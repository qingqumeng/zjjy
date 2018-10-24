<template>
  <div class="wrapper">
    <swiper :list="imgList" auto style="margin:0 auto;" height="180px" dots-class="" dots-position="right"></swiper>
    <swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">

      <swiper-item v-for="(item, index) in textList" :key="index"><p>{{item.title}}</p></swiper-item>
  
    </swiper>
  </div>
</template>

<script>
import { Swiper,SwiperItem } from 'vux'
export default {
    name:'',
    components:{Swiper,SwiperItem},
    props:{},
    data(){
      return {
        imgList:[
            {
            url: 'javascript:',
            img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
            title: '送你一朵fua'
            }, 
            {
            url: 'javascript:',
            img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
            title: '送你一辆车'
            }, 
            {
            url: 'javascript:',
            img: 'https://static.vux.li/demo/5.jpg', // 404
            title: '送你一次旅行',
            fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
            }, 
            {
            url: 'javascript:',
            img: '../static/img/download.jpg', // 404
            title: 'a nice watch',
            fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
            }
        ] ,
        textList:[
            {id:0,title:'义务爱了 完成传奇世界H5-王者归来任务5-王者归来任务 获得20金币'},
            {id:1,title:'只知道不知道 兑换【饿了么】畅享美5-王者归来任务食红包 消耗20金币'},
            {id:2,title:'基本世神 兑换《传奇世界H5》畅玩5-王者归来任务级礼包 消耗30金币'},
            {id:3,title:'做迎而為 兑换【饿了么】畅享美食5-王者归来任务红包 消耗20金币'},
            {id:4,title:'基本世神 兑换《传奇世界H5》畅玩5-王者归来任务级礼包 消耗30金币'},
    ]
    }
  },
    watch:{},
    computed:{},
    methods:{},
    created(){},
    mounted(){}
}
</script>
<style lang="less" scoped>
.text-scroll{
    border:1px solid #8a8a8a;
    border-left:none;
    border-right:none;
   p{    
    font-size: 12px;
    text-align: left;
    margin-left: 30px;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    }
}

</style>
