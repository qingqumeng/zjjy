<template>
      <div style="height:44px;">
      <sticky >
        <tab :line-width="1">
          <tab-item selected>正在正映</tab-item>
          <tab-item>即将上映</tab-item>
        </tab>
      </sticky>
    </div>
</template>

<script>
import { Tab,
    TabItem,
    Sticky} from 'vux'
export default {
    name:'',
    components:{ 
    Tab,
    TabItem,
    Sticky},
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