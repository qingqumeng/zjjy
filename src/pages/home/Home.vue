<template>
  <div class="wrapper">
      <x-header title="use prop:title"></x-header> 
      <svg  class="icon" aria-hidden="true">
        <use xlink:href="#icon-home"></use>
      </svg>
  </div>
</template>

<script>
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux'
export default {
    name:'',
    components:{
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