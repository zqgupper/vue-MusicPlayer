<template lang="html">
  <div class="scvw">
    <TopTab />
    <SearchList :content="$route.params.searchcontent"/>
  </div>
</template>

<script>
import SearchList from "../../components/SearchList"
import TopTab from '../../components/TopTab'

export default {
  name:"searchview",
  data(){
    return{

    }
  },
  components:{
    SearchList,
    TopTab
  }
}
</script>

<style scoped>
.scvw{
  margin-top: 44px
}
</style>
