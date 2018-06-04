<template>
    <div class="toplab">
      <div class="mainbox">
        <router-link to="/" class = "a1">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-baiduyinle"></use>
            </svg>
		</router-link>
        <P id="txt">Music Time</P>
        <router-link to="/">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo"></use>
            </svg>
        </router-link>
      </div>    
    </div>
</template>
<script>

// import "../assets/tptb/iconfont.css"
import '../assets/tptb/iconfont.js'
import '../assets/zqg/iconfont.js'

    export default{
        name:'TopTab',
        data(){
            return{

            }
        }
    }
</script>
<style scoped>
.toplab{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 521;
    width: 100%;
    height: 44px;
    background-color: #f8f8f8;
}
.mainbox{
    display: flex;
    align-items: center;
    width: 90%;
    height: 100%;
    margin: 0 auto;
}

#txt{
    flex:1;
    font-size: 16px;
    line-height:44px;
    text-align: center;
}

.icon {
    width: 1em; 
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    font-size:30px;
}

.a1{
    padding-top:4px;
}
</style>

