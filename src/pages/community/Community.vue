<template>
  <div class="wrapper"> 
    <grid :show-vertical-dividers="false">
      <grid-item v-for="i in 5" :key="i">
        <span class="grid-center">{{i}}</span>
      </grid-item>
    </grid></div>
</template>

<script>
import { Grid, GridItem, GroupTitle } from 'vux'
export default {
    name:'',
    components:{Grid, GridItem, GroupTitle},
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