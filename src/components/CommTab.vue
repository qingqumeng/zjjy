<template>
 <!-- @click="changed(index)" -->
  <div class="wrapper">
       <tab :line-width=2 active-color='#ff5000' v-model="index">
        <tab-item class="vux-center" :selected="tabselected===index" v-for="(item, index) in titles" :key="index">{{item.title}}</tab-item>
      </tab>
      <swiper v-model="index" height="100px" :show-dots="false">
        <swiper-item v-for="(item, index) in list+'titles[index]'" :key="index">
          <div class="tab-swiper vux-center">{{item}} Container</div>
        </swiper-item>
      </swiper>
  </div>
</template>

<script>
import {Tab,TabItem,Swiper,SwiperItem} from 'vux'
import axios from 'axios'
export default {
    name:'',
    components:{Tab,TabItem,Swiper,SwiperItem},
    props:{},
    data(){
      return {
        tabselected:0,
        index:0,
        list:[],
        titles:[ 
              {title:"新闻公告",name:"gonggao"},       
              {title:"八卦爆料",name:"bagua"},       
              {title:"出租寻租",name:"chuzu"},       
              {title:"求职招聘",name:"qiuzhi"},       
              {title:"跳蚤市场",name:"shichang"},       
              {title:"跳蚤市场",name:"shichang"},       
              {title:"跳蚤市场",name:"shichang"},       
              {title:"杂七杂八",name:"other"},       
        ] 
        }
  },
    watch:{
      list:function(){
      
       
      }
    },
    computed:{},
    methods:{
      // changed:(index)=>{   tabselected = index  }
    },
    created(){
         var _this=this
        axios.get("/static/test.json").then(function(res){
             _this.list = res.data.data.community;
             console.log(_this.list)
        })
    },
    mounted(){
      
    }
}
</script>
<style lang="less" scoped>
.tab-swiper {
  background-color: #fff;
  height: 100px;
}
</style>