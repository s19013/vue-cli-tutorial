<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"/>
    <button @click="currentComponent = 'TekitouHome'">home</button>
    <button @click="currentComponent = 'TekitouAbout'">about</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>

    <!-- <tekitou-home  v-if="currentComponent === 'home'"></tekitou-home>
    <tekitou-about v-if="currentComponent === 'about'"></tekitou-about> -->
  </div>
</template>

<script>
import TekitouAbout from './components/TekitouAbout.vue';
import TekitouHome  from './components/TekitouHome.vue';
// import LikeCounter from './components/LikeCounter.vue';
// import LikeHeader from './components/likeHeader.vue';
export default {
  name: 'App',
  data(){
    return{
      counterName:"",
      currentComponent:"TekitouHome"
    }
  },
  components: {
    TekitouHome,
    TekitouAbout
    // LikeCounter,
    // LikeHeader,
    
},
  methods:{
    changeCounterName(arg){
      console.log(arg);
      this.counterName = arg;
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
