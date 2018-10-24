<template>
  <div class="wrapper">
    <x-header title="use prop:title"></x-header> 
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeSwiper from './component/HomeSwiper'
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux'
export default {
    name:'',
    components:{
    HomeSwiper,
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem},
    props:{},
    data(){
      return {
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