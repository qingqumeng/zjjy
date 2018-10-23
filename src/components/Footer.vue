<template>
<tabbar class="tabbar">       
      <tabbar-item :link="{path:'/'}"  selected>
        <svg slot="icon" class="icon" aria-hidden="true">
        <use xlink:href="#icon-home_pre-copy"></use>
      </svg>    
       <svg slot="icon-active" class="icon" aria-hidden="true">
        <use xlink:href="#icon-home"></use>
      </svg>    
        <span slot="label">综合</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/Community'}" >
        <svg slot="icon" class="icon" aria-hidden="true">
          <use xlink:href="#icon-list"></use>
        </svg>    
        <svg slot="icon-active" class="icon" aria-hidden="true">
          <use xlink:href="#icon-list-active"></use>
        </svg> 
        <span slot="label">动弹</span>
      </tabbar-item>
      <!-- <tabbar-item :link="{path:'/'}" >
        <img style="height:40px;width:40px;" slot="icon" src="../assets/image/ic_nav_add_normal.png">
      </tabbar-item> -->
      <tabbar-item :link="{path:'/News'}" >
       <svg slot="icon" class="icon" aria-hidden="true">
          <use xlink:href="#icon-discover-copy"></use>
        </svg>    
        <svg slot="icon-active" class="icon" aria-hidden="true">
          <use xlink:href="#icon-discover-active-copy"></use>
        </svg> 
        <span slot="label">发现</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/My'}">    
        <svg slot="icon" class="icon" aria-hidden="true">
          <use xlink:href="#icon-account"></use>
        </svg>    
        <svg slot="icon-active" class="icon" aria-hidden="true">
          <use xlink:href="#icon-account-active"></use>
        </svg> 
        <span slot="label">我的</span>
      </tabbar-item>
</tabbar>
</template>
<script>
import {Tabbar,TabbarItem} from 'vux'
export default {
    name:'Footer',
    components:{Tabbar,TabbarItem},
    props:{},
    data(){
      return {
          index:0
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
.icon {
  width: 27px; height: 27px; 
 }
</style>