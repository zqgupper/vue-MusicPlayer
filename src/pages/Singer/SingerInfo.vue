<template lang="html">
  <div class="singerinfo">
    <TopTab />
    <SingerMusic />
  </div>
</template>

<script>

import SingerMusic from "../../components/SingerMusic"
import TopTab from '../../components/TopTab'

export default {
  name:"singerinfo",
  data(){
    return{

    }
  },
  components:{
    SingerMusic,
    TopTab
  }
}
</script>

<style scoped>
.singerinfo{
  margin-top: 44px
}
</style>
