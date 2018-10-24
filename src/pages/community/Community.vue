<template>
  <div class="wrapper"> 
    <grid :show-vertical-dividers="false">
      <grid-item v-for="i in 5" :key="i">
        <span class="grid-center">{{i}}</span>
      </grid-item>
    </grid>
   <CommTab></CommTab>
  </div>
</template>

<script>
import { Grid, GridItem, GroupTitle } from 'vux'
import CommTab from '@/components/CommTab'
export default {
    name:'',
    components:{Grid, GridItem, GroupTitle,CommTab},
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