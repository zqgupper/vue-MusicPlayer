<template lang="html">
  <div class="recd">
    <TopTab />
    <RecommendList :musictype="$route.params.musictype" />
  </div>
</template>

<script>
import RecommendList from "../../components/RecommendList"
import TopTab from '../../components/TopTab'

export default {
  name:"recommend",
  data(){
    return{

    }
  },
  components:{
    RecommendList,
    TopTab
  }
}
</script>

<style scoped>
.recd{
  margin-top: 44px
}
</style>
