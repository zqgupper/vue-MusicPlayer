<template>
    <div class="index">
        <Search />
        <SwiperSlider />    
        <MusicNav />
        <router-view></router-view>
        <Singer />
    </div>
</template>
<script>

import MusicNav from "./MusicNav"
import Singer from "./Singer"
import SwiperSlider from "../components/SwiperSlider"
import Search from "../components/Search"

export default {
  name:"index",
  data(){
    return{
    }
  },
  components:{
    MusicNav,
    Singer,
    SwiperSlider,
    Search
  }
}
</script>

<style lang="css">
.index{
  margin-top: 44px;
}
</style>

